from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean, Text, Integer, JSON
from sqlalchemy.orm import Mapped, mapped_column
from flask_bcrypt import Bcrypt
from flask_login import UserMixin

db = SQLAlchemy()
bcrypt = Bcrypt()

class CTAdmin(db.Model, UserMixin):
    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(
        String(120), unique=True, nullable=False)
    _password: Mapped[str] = mapped_column(
        "password", String(128), nullable=False)
    is_admin: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)

    @property
    def password(self):
        raise AttributeError('Password is not a readable attribute.')

    @password.setter
    def password(self, password):
        self._password = bcrypt.generate_password_hash(
            password).decode('utf-8')

    # Método para verificar el password
    def check_password(self, password):
        return bcrypt.check_password_hash(self._password, password)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email
        }


class Lead(db.Model):
    __tablename__ = 'lead'
    
    id: Mapped[int] = mapped_column(primary_key=True)
    
    needs: Mapped[list] = mapped_column(JSON, nullable=False, default=list)
    stage: Mapped[int] = mapped_column(Integer, nullable=True)
    problem_description: Mapped[str] = mapped_column(Text, nullable=True)
    ideal_timeframe: Mapped[int] = mapped_column(Integer, nullable=True)
    
    full_name: Mapped[str] = mapped_column(String(120), nullable=False)
    email: Mapped[str] = mapped_column(String(120), nullable=False, index=True)
    phone: Mapped[str] = mapped_column(String(30), nullable=True)
    project_name: Mapped[str] = mapped_column(String(100), nullable=True)   
    
    newsletter_opt_in: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)        

    def serialize(self):
        return {
            "id": self.id,
            "needs": self.needs,
            "stage": self.stage,
            "problemDescription": self.problem_description,
            "idealTimeframe": self.ideal_timeframe,
            "personalData": {
                "fullName": self.full_name,
                "email": self.email,
                "phone": self.phone,
                "projectName": self.project_name,
            },
            "newsletterOptIn": self.newsletter_opt_in
        }


class TokenBlockedList(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    jti: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)

    def __repr__(self):
        return f'<CTAdmin {self.email}>'
