"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Lead, CTAdmin
from api.utils import generate_sitemap, APIException
from sqlalchemy import select
from flask_cors import CORS
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/leads', methods=['GET'])
def get_leads():
    all_leads = Lead.query.all()
    serialized_leads = [lead.serialize() for lead in all_leads]

    return jsonify(serialized_leads), 200


def validate_lead_data(data):
    errors = {}

    # Extraemos arrays / valores de nivel superior
    needs = data.get("needs", [])
    stage = data.get("stage")
    problem_description = data.get("problemDescription")
    ideal_timeframe = data.get("idealTimeframe")
    newsletter_opt_in = bool(data.get("newsletterOptIn", False))

    # Extraemos el objeto anidado personalData
    personal_data = data.get("personalData") or {}
    whole_name = personal_data.get("wholeName")
    email = personal_data.get("email")
    phone = personal_data.get("phone")
    project_name = personal_data.get("projectName")

    # 1. Validar needs (mínimo 1 elemento)
    if not isinstance(needs, list) or len(needs) == 0:
        errors["needs"] = "At least one need must be selected."

    # 2. Validar personalData -> wholeName (mínimo 2 palabras)
    if not whole_name or not whole_name.strip():
        errors["fullName"] = "Full name is required."
    elif len(whole_name.strip().split()) < 2:
        errors["fullName"] = "Please enter both first and last name."

    # 3. Validar personalData -> email
    if not email or not email.strip():
        errors["email"] = "Email address is required."
    elif "@" not in email or "." not in email or len(email) < 5:
        errors["email"] = "Invalid email format."

    # 4. Validar personalData -> phone
    if phone and len(phone.strip()) < 7:
        errors["phone"] = "Phone number must have at least seven digits."

    return errors, {
        "needs": needs,
        "stage": int(stage) if stage is not None and str(stage).isdigit() else None,
        "problem_description": problem_description.strip() if problem_description else None,
        "ideal_timeframe": int(ideal_timeframe) if ideal_timeframe is not None and str(ideal_timeframe).isdigit() else None,
        "full_name": whole_name.strip() if whole_name else None,
        "email": email.strip() if email else None,
        "phone": phone.strip() if phone else None,
        "project_name": project_name.strip() if project_name else None,
        "newsletter_opt_in": newsletter_opt_in
    }


@api.route('/admin/login', methods=['POST'])
def admin_login():
    admin_data = request.get_json()

    if not admin_data:
        return jsonify({"message": "Invalid Json or empty request body"}), 400

    email = admin_data.get("email")
    password = admin_data.get("password")

    if not email:
        return jsonify({"message": "No email entered"}), 400
    if not password:
        return jsonify({"message": "Password is required"}), 400

    ct_admin = None

    try:
        ct_admin = db.session.execute(select(CTAdmin).where(
            CTAdmin.email == email)).scalar_one_or_none()

        if ct_admin is None:
            return jsonify({"message": "Invalid credentials"}), 401

        if not ct_admin.check_password(password):
            return jsonify({"message": "Invalid credentials"}), 401

        token = create_access_token(
            identity=ct_admin.id,
            additional_claims={"role": "ct_admin"}
        )

        return jsonify({
            "token": token,
            "user_id": ct_admin.id,
            "message": "Login successful"
        }), 200

    except Exception as e:
        print(f"Login error: {e}")
        return jsonify({"message": "Failed login. Please try again later"}), 500


@api.route('/contact', methods=['POST'])
def add_lead():
    lead_data = request.get_json()

    if not lead_data:
        return jsonify({"message": "Invalid JSON or empty request body"}), 400

    validation_errors, clean_data = validate_lead_data(lead_data)

    if validation_errors:
        return jsonify({
            "status": "error",
            "message": "Validation failed",
            "errors": validation_errors
        }), 400

    try:
        # Instanciamos el modelo Lead con los datos limpios
        new_lead = Lead(
            needs=clean_data["needs"],
            stage=clean_data["stage"],
            problem_description=clean_data["problem_description"],
            ideal_timeframe=clean_data["ideal_timeframe"],
            full_name=clean_data["full_name"],
            email=clean_data["email"],
            phone=clean_data["phone"],
            project_name=clean_data["project_name"],
            newsletter_opt_in=clean_data["newsletter_opt_in"]
        )

        db.session.add(new_lead)
        db.session.commit()

        return jsonify({
            "message": "Lead received successfully!",
            "lead_id": new_lead.id,
            "lead": new_lead.serialize()
        }), 201

    except IntegrityError as e:
        db.session.rollback()
        print(f"Registration error (Duplicate/Integrity): {e}")
        return jsonify({
            "status": "error",
            "message": "An integrity error occurred processing the lead."
        }), 400

    except Exception as e:
        db.session.rollback()
        print(f"Registration error (General): {e}")
        return jsonify({"message": "Unable to process your request at this time"}), 500
