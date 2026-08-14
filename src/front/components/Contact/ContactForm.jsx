import styles from "../../styles/components/HeaderContact.module.css";

import { useState } from "react";
import { useTranslation } from 'react-i18next';


/**
 * @type {import("../../utils/customTypes.js").DataStructure}
 * */
const initialData = {
    needs: [], // ← A bunch of possible IDs (min 1)
    stage: null, // ← An ID
    problemDescription: null, // ← At least 3 characters (non space) [max? maybe 500 ch?]
    idealTimeframe: null, // ← An ID
    personalData: {
        wholeName: null, // ← At least 2 words of 3 characters each, up to 10 words or 100ch total
        email: null, // ← Proper email [max? maybe 50 ch?]
        phone: null, // ← just numbers, with correct number of digits (country code?)
        projectName: null, // ← At least 2 characters (non space) up to 30ch
    },
    newsletterOptIn: false
};
// ↪ All fields mandatory (right?)


export const ContactForm = ({ handleSubmit, handleCloseForm }) => {
    const { t } = useTranslation();

    const [data, setData] = useState(initialData);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);


    // const handleInputs = (/**@type {React.ChangeEvent}*/ e) => {

    // };

    // const handleTermsAgreement = (/**@type {React.ChangeEvent<HTMLInputElement>}*/ e) => {

    // };

    // const handlePreSubmit = (/**@type {React.FormEvent<HTMLButtonElement>}*/ e) => {
    //     e.preventDefault();

    //     handleSubmit && handleSubmit(e);
    // };

    // 1. Manejador unificado de inputs
    const handleInputs = (e) => {
        const { name, value, type, checked, id } = e.target;

        // Sección 1: Checkboxes multiselect (needs)
        if (name === "needs") {
            const optionId = parseInt(id.replace("type-", ""), 10);
            setData(prev => {
                const currentNeeds = prev.needs || [];
                const updatedNeeds = checked
                    ? [...currentNeeds, optionId]
                    : currentNeeds.filter(item => item !== optionId);
                return { ...prev, needs: updatedNeeds };
            });
            return;
        }

        // Sección 2: Dropdown (stage)
        if (name === "stage") {
            setData(prev => ({ ...prev, stage: parseInt(value, 10) }));
            return;
        }

        // Sección 3: Textarea (problemDescription)
        if (name === "problemDescription") {
            setData(prev => ({ ...prev, problemDescription: value }));
            return;
        }

        // Sección 4: Radio buttons (idealTimeframe)
        if (name === "idealTimeframe") {
            const optionId = parseInt(id.replace("term-", ""), 10);
            setData(prev => ({ ...prev, idealTimeframe: optionId }));
            return;
        }

        // Sección 5: Campos Personales (personalData)
        if (name.startsWith("personalData.")) {
            const field = name.split(".")[1];
            setData(prev => ({
                ...prev,
                personalData: {
                    ...prev.personalData,
                    [field]: value
                }
            }));
            return;
        }

        // Newsletter Checkbox
        if (name === "newsletterOptIn") {
            setData(prev => ({ ...prev, newsletterOptIn: checked }));
            return;
        }
    };

    const handleTermsAgreement = (e) => {
        setTermsAccepted(e.target.checked);
    };

    // 2. Manejador del envío (Fetch POST)
    const handlePreSubmit = async (e) => {
        e.preventDefault();

        if (!termsAccepted) {
            setStatusMessage({ type: 'error', text: 'Por favor acepta los términos y condiciones.' });
            return;
        }

        setIsSubmitting(true);
        setStatusMessage(null);

        try {
            // Usa tu variable de entorno o fallback a localhost
            const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

            const response = await fetch(`${backendUrl}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Error al enviar el formulario.");
            }

            setStatusMessage({ type: 'success', text: '¡Mensaje enviado con éxito!' });
            setData(initialData); // Reiniciar formulario

            if (handleSubmit) handleSubmit(e);

        } catch (error) {
            console.error("Error enviando lead:", error);
            setStatusMessage({ type: 'error', text: error.message || "Ocurrió un error inesperado." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handlePreSubmit} className={`${styles.form} d-flex flex-column mx-auto`} style={{ maxWidth: 843, marginBlock: 28, gap: 40, color: "var(--bs-gray-1000)" }}>

            {/* Top Section */}
            <div className={`${styles.top} d-flex justify-content-between font-h3`} style={{ fontSize: 20, userSelect: 'none' }}>

                {/* Go Downwards Label */}
                <span className="bg-transparent m-0 p-0 fw-semibold" style={{ border: 0, width: 'fit-content' }}>
                    {t("contact.form.top.scrollDown")}   ↓
                </span>

                {/* Close button */}
                <button onClick={handleCloseForm} type="button" className="bg-transparent m-0 p-0 fw-semibold" style={{ border: 0, width: 'fit-content' }}>
                    {t("contact.form.top.closeButton")}
                </button>

            </div>

            {/* Form instructions */}
            <p className={`${styles.instructions} font-p1`} style={{ fontSize: 24, lineHeight: "1.8" }}>
                {t('contact.form.top.description')}
            </p>

            {/* Section 1 */}
            <hr className="opacity-100" />
            <div className={`${styles.section1} ${styles.section} d-flex flex-column`} style={{ gap: 30 }}>

                {/* Section title */}
                <h3 className="font-h3">
                    <span style={{ marginRight: 30 }}>[01]</span>
                    <span>{t('contact.form.section1.title')}</span>
                </h3>

                {/* Checkboxes array (multiselect) */}
                <div className={`d-flex flex-wrap ${styles["form-bool-inputs"]} form-bool-inputs font-p1`} style={{ paddingLeft: 72, gap: "21px 17px", gridAutoFlow: "column", lineHeight: "1" }}>{[
                    { id: 1, label: t('contact.form.section1.options.webSite') },
                    { id: 2, label: t('contact.form.section1.options.webApp') },
                    { id: 3, label: t('contact.form.section1.options.onlineShop') },
                    { id: 4, label: t('contact.form.section1.options.creativePortfolio') },
                    { id: 5, label: t('contact.form.section1.options.visualIndentity') },
                    { id: 6, label: t('contact.form.section1.options.webUpgrade') },
                    { id: 7, label: t('contact.form.section1.options.notSure') },
                ].map(option => (
                    <label
                        key={option.id}
                        htmlFor={`type-${option.id}`}
                        className='d-flex align-items-end justify-content-center text-center'
                        style={{
                            width: 180, height: 159, padding: "20px 17px",
                            border: "1px solid var(--bs-gray-1000)", borderRadius: 12,
                            position: 'relative'
                        }}
                    >

                        {/* Option label */}
                        {option.label}

                        {/* Invisible checkbox (for behavior) */}
                        <input type="checkbox" required
                            name="needs" id={`type-${option.id}`}
                            checked={data.needs.includes(option.id)}
                            style={{ opacity: 0, width: 1, height: 1, position: 'absolute', top: 0, left: 0 }}
                            onChange={handleInputs}
                        />

                    </label>
                ))}</div>

            </div>

            {/* Section 2 */}
            <hr className="opacity-100" />
            <div className={`${styles.section2} ${styles.section} d-flex flex-column`} style={{ gap: 30 }}>

                {/* Section title */}
                <h3 className="font-h3">
                    <span style={{ marginRight: 30 }}>[02]</span>
                    <span>{t('contact.form.section2.title')}</span>
                </h3>

                {/* Dropdown menu */}
                <div className={`d-flex flex-wrap ${styles["form-dropdown"]} form-dropdown`} style={{ paddingLeft: 72, gap: "21px 17px", gridAutoFlow: "column" }}>
                    <select onChange={handleInputs} name="stage" id="stage" value={data.stage || 0} className='w-100 bg-transparent font-p1' style={{ padding: "10px 20px", border: "1px solid var(--bs-gray-1000)", borderRadius: 12 }}>
                        <option value={0} disabled>{t('contact.form.section2.options.placeholder')}</option>
                        {[
                            { id: 1, label: t('contact.form.section2.options.opt1') },
                            { id: 2, label: t('contact.form.section2.options.opt2') },
                            { id: 3, label: t('contact.form.section2.options.opt3') },
                            { id: 4, label: t('contact.form.section2.options.opt4') },
                            { id: 5, label: t('contact.form.section2.options.opt5') },
                            { id: 6, label: t('contact.form.section2.options.opt6') },
                        ].map(stage => (
                            <option key={stage.id} value={stage.id}>{stage.label}</option>
                        ))}
                    </select>
                </div>

            </div>

            {/* Section 3 */}
            <hr className="opacity-100" />
            <div className={`${styles.section3} ${styles.section} d-flex flex-column`} style={{ gap: 30 }}>

                {/* Section title */}
                <h3 className="font-h3">
                    <span style={{ marginRight: 30 }}>[03]</span>
                    <span>{t('contact.form.section3.title')}</span>
                </h3>

                {/* Text area field */}
                <div className="d-flex flex-wrap font-p1" style={{ paddingLeft: 72, gap: "21px 17px", gridAutoFlow: "column", lineHeight: "1" }}>
                    <textarea name="problemDescription" id="problemDescription" value={data.problemDescription || ""} onChange={handleInputs} className='font-p1 bg-transparent w-100' style={{ color: "var(--bs-gray-1000)", height: "4lh", padding: "10px 20px", boxSizing: "content-box", border: "1px solid var(--bs-gray-1000)", borderRadius: 12 }} />
                </div>

            </div>

            {/* Section 4 */}
            <hr className="opacity-100" />
            <div className={`${styles.section4} ${styles.section} d-flex flex-column`} style={{ gap: 30 }}>

                {/* Section title */}
                <h3 className="font-h3">
                    <span style={{ marginRight: 30 }}>[04]</span>
                    <span>{t('contact.form.section4.title')}</span>
                </h3>

                {/* Radio buttons array */}
                <div className={`d-flex flex-wrap ${styles['form-bool-inputs']} form-bool-inputs font-p1`} style={{ paddingLeft: 72, gap: "21px 17px", gridAutoFlow: "column", lineHeight: "1" }}>{[
                    { id: 1, label: t('contact.form.section4.options.opt1') },
                    { id: 2, label: t('contact.form.section4.options.opt2') },
                    { id: 3, label: t('contact.form.section4.options.opt3') },
                    { id: 4, label: t('contact.form.section4.options.opt4') },
                    { id: 5, label: t('contact.form.section4.options.opt5') },
                ].map(option => (
                    <label key={option.id} htmlFor={`term-${option.id}`} className='d-flex align-items-end justify-content-center text-center' style={{ width: 140, height: 88, border: "1px solid var(--bs-gray-1000)", borderRadius: 12, padding: "20px 17px" }}>

                        {/* Option label */}
                        {option.label}

                        {/* Invisible radio button (for behavior) */}
                        <input onChange={handleInputs} type="radio" id={`term-${option.id}`} name="idealTimeframe" checked={data.idealTimeframe === option.id} style={{ visibility: 'hidden', width: 0 }} />

                    </label>
                ))}</div>

            </div>

            {/* Section 5 */}
            <hr className="opacity-100" />
            <div className={`${styles.section5} ${styles.section} d-flex flex-column`} style={{ gap: 30 }}>

                {/* Section title */}
                <h3 className="font-h3">
                    <span style={{ marginRight: 30 }}>[05]</span>
                    <span>{t('contact.form.section5.title')}</span>
                </h3>

                {/* Input data fields array */}
                <div className={`d-flex flex-column ${styles['form-data-input']} form-data-input font-p1`} style={{ paddingLeft: 72, gap: 20, lineHeight: "1" }}>{[
                    { id: 1, fieldName: "wholeName", label: t('contact.form.section5.fieldsLabels.fullName') },
                    { id: 2, fieldName: "email", label: t('contact.form.section5.fieldsLabels.email'), inputType: "email" },
                    { id: 3, fieldName: "phone", label: t('contact.form.section5.fieldsLabels.phone'), inputType: "tel" },
                    { id: 4, fieldName: "projectName", label: t('contact.form.section5.fieldsLabels.projectName') },
                ].map(field => (
                    <label key={field.id} htmlFor={`data-${field.id}`} className='d-flex align-items-end text-center font-h3' style={{ gap: 30 }}>

                        {/* Field label */}
                        {field.label}

                        {/* Field input element */}
                        <input
                            required
                            onChange={handleInputs}
                            value={data.personalData[field.fieldName] || ""}
                            type={field.inputType || "text"} 
                            id={`data-${field.id}`}
                            name={`personalData.${field.fieldName}`}
                            className='bg-transparent font-p1'
                            style={{ flex: 1, height: 36 }}
                        />

                    </label>
                ))}</div>

            </div>

            {/* Submit handles */}
            <div className={`${styles.submitHandles} d-flex justify-content-end`}>
                <div className={`${styles['submit-handles']} submit-handles d-flex flex-column col-auto g-0`} style={{ gap: 30 }}>

                    {/* Checkboxes container */}
                    <div className="d-flex flex-column col-auto g-0" style={{ gap: 5 }}>

                        {/* Terms agreement */}
                        <label htmlFor="terms-conditions">

                            {/* Checkbox element */}
                            <input required onChange={handleTermsAgreement} checked={termsAccepted} type="checkbox" id="terms-conditions" name="agreements" />

                            {/* Checkbox label */}
                            {t('contact.form.formSubmission.termsDisclosure')}

                        </label>

                        {/* Newsletter subscription agreement */}
                        <label htmlFor="newsletter">

                            {/* Checkbox element */}
                            <input onChange={handleInputs} checked={data.newsletterOptIn} type="checkbox" id="newsletter" name="newsletterOptIn" />

                            {/* Checkbox label */}
                            {t('contact.form.formSubmission.newsletter')}

                        </label>

                    </div>

                    {statusMessage && (
                        <div className={`alert alert-${statusMessage.type === 'error' ? 'danger' : 'success'} py-2 px-3 text-center`} role="alert">
                            {statusMessage.text}
                        </div>
                    )}

                    {/* Submit form button */}
                    <button type="submit" disabled={isSubmitting} className="btn btn-outline btn-lg rounded-pill border-4 font-p1 fs-6 d-lg-block" style={{ padding: "18px 34px", fontWeight: 900, lineHeight: "1.125", letterSpacing: 0 }}>
                        {isSubmitting ? 'Enviando...' : t('contact.form.formSubmission.submitButton')}
                    </button>

                </div>
            </div>

        </form>
    );
};
