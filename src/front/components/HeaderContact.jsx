import React, { useState, useContext, useEffect, useRef } from 'react';
import { createPortal } from "react-dom";
import { Link } from 'react-router-dom';
import { AppContext } from '../pages/Layout.jsx';
import HomeContact from '../assets/img/HomeContact.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useTranslation, Trans } from 'react-i18next';
import styles from "../styles/components/HeaderContact.module.css"
import { element } from 'prop-types';

const Modal = ({ isOpen, onClose, children }) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
            dialog.close();
        }
    }, [isOpen]);

    return createPortal(
        <dialog
            ref={dialogRef}
            className={`${styles.modalOverlay}`}
            onMouseUp={e => e.target === dialogRef.current && onClose()}
        >
            <div className={styles.modalContainer}>
                <div className={styles.scrollContainer}>
                    {children}
                </div>
            </div>
        </dialog>,
        document.body
    );
}

/** @type {DataStructure} */
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

/** ### Form Data Structure
 * 
 * @typedef DataStructure
 * @prop {string[]} needs
 * @prop {number} stage
 * @prop {string} problemDescription
 * @prop {number} idealTimeframe
 * @prop {PersonalData} personalData
 * @prop {boolean} newsletterOptIn
 * 
 * @typedef PersonalData
 * @prop {string} wholeName
 * @prop {string} email
 * @prop {string} phone
 * @prop {string} projectName
 * 
*/

const HeaderContact = () => {
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState(initialData);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleInputs = (/**@type {React.ChangeEvent}*/ e) => {
        // console.log(e.target);
        // e.target.setCustomValidity("");
        // e.target.reportValidity();
    };

    const handleTermsAgreement = (/**@type {React.ChangeEvent<HTMLInputElement>}*/ e) => {
        // console.log(e);
    };

    const handleSubmit = (/**@type {React.FormEvent<HTMLButtonElement>}*/e) => {
        e.preventDefault();

        // const form = e.currentTarget;

        // /*  --  Check #1 – Required Project Type(s)  --  */

        // /** @type {HTMLInputElement[]} */
        // const checkboxes = Array.from(form.elements).filter(
        //     // element => console.log(element)
        //     (/** @type {HTMLInputElement} */ element) => element.type === 'checkbox' && element.name === 'type'
        // );
        // const atLeastOneChecked = checkboxes.some(checkbox => checkbox.checked);
        // checkboxes.forEach(checkbox => {
        //     checkbox.required = !atLeastOneChecked;
        //     checkbox.setCustomValidity("");
        //     if (!atLeastOneChecked) {
        //         checkbox.setCustomValidity("Por favor, escoge al menos una de estas opciones (la(s) que más se aproxime(n))...");
        //         checkbox.reportValidity();
        //         return;
        //     }
        // });


        // /*  --  Form verdict  --  */
        
        // if (!form.checkValidity) {
        //     form.reportValidity();
        //     return;
        // }

        // console.info("Formulario entregado exitosamente! Enviando datos...")
    };

    return (<>
        <section className="contact-header container vh-100" style={{ maxWidth: 1440, color: "var(--bs-gray-100)", placeContent: "center", padding: 137.5, width: "100vw" }}>
            <div className="row" style={{ gap: 50 }}>
                <div className="col g-0">
                    <h2 className="font-h0" style={{ color: "var(--bs-accent-1)", fontSize: 70, lineHeight: 1, letterSpacing: "0" }}>
                        <Trans i18nKey='contact.sectionTitle' components={[<span className="highlighted-text" />]} />
                    </h2>
                </div>
                <div className="col g-0">
                    <p className="font-p1" style={{ whiteSpace: 'pre-line' }}>
                        {t('contact.sectionDescription')}
                    </p>
                    <div className="row justify-content-center g-0" style={{ marginTop: 40 }}>
                        <button className="btn btn-outline btn-lg rounded-pill border-2 font-p1 fw-bold fs-6" onClick={() => setIsModalOpen(true)} style={{ minWidth: "50%", padding: "18px 34px", lineHeight: "18px" }}>
                            {t('contact.formButton')}
                        </button>
                    </div>
                </div>
            </div>
            <style>{`
                @media (width < 768px) {
                    section.contact-header {
                        padding-inline: 40px !important;

                        > div {
                            flex-direction: column;

                            h2 {
                                font-size: calc(1.525rem + 3.3vw) !important;
                            }

                            button {
                                margin-top: 30px;
                                padding: 8px 48px !important;
                                border-width: 1px !important;
                                font-size: 20px !important;
                                font-weight: 400 !important;
                                line-height: var(--bs-btn-line-height) !important;
                                letter-spacing: normal;
                            }
                        }
                    }
                }
            `}</style>
        </section>

        {/* Contact Form */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <form onSubmit={handleSubmit} className={`${styles.form} d-flex flex-column mx-auto`} style={{ maxWidth: 843, marginBlock: 28, gap: 40, color: "var(--bs-gray-1000)" }}>

                {/* Top Section */}
                <div className={`${styles.top} d-flex justify-content-between font-h3`} style={{ fontSize: 20, userSelect: 'none' }}>

                    {/* Go Downwards Label */}
                    <span
                        className="bg-transparent m-0 p-0 fw-semibold"
                        style={{ border: 0, width: 'fit-content' }}
                    >
                        {t("contact.form.top.scrollDown")}   ↓
                    </span>

                    {/* Close button */}
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="bg-transparent m-0 p-0 fw-semibold"
                        style={{ border: 0, width: 'fit-content' }}
                    >
                        {t("contact.form.top.closeButton")}
                    </button>
                </div>

                {/* Form instructions */}
                <p className={`${styles.instructions} font-p1`} style={{ fontSize: 24, lineHeight: "1.8" }}>
                    {t('contact.form.top.description')}
                </p>

                {/* Horizontal rule */}
                <hr className="opacity-100" />

                {/* Section 1 */}
                <div className={`${styles.section1} ${styles.section} d-flex flex-column`} style={{ gap: 30 }}>

                    {/* Section title */}
                    <h3 className="font-h3">
                        <span style={{ marginRight: 30 }}>[01]</span>
                        <span>{t('contact.form.section1.title')}</span>
                    </h3>

                    {/* Needs checkboxes */}
                    <div className={`d-flex flex-wrap ${styles["form-bool-inputs"]} form-bool-inputs font-p1`} style={{ paddingLeft: 72, gap: "21px 17px", gridAutoFlow: "column", lineHeight: "1" }}>{
                        [
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
                                {option.label}
                                <input type="checkbox" required
                                    name={`type`} id={`type-${option.id}`}
                                    // style={{ visibility: 'hidden', width: 0 }}
                                    style={{ opacity: 0, width: 1, height: 1, position: 'absolute', top: 0, left: 0 }}
                                    onChange={handleInputs}
                                />
                            </label>
                        ))
                    }</div>
                </div>

                {/* Section 2 */}
                <hr className="opacity-100" />
                <div className={`${styles.section2} ${styles.section} d-flex flex-column`} style={{ gap: 30 }}>
                    <h3 className="font-h3">
                        <span style={{ marginRight: 30 }}>[02]</span>
                        <span>{t('contact.form.section2.title')}</span>
                    </h3>
                    <div className={`d-flex flex-wrap ${styles["form-dropdown"]} form-dropdown`} style={{ paddingLeft: 72, gap: "21px 17px", gridAutoFlow: "column" }}>
                        <select onChange={handleInputs} name="stage" id="stage" defaultValue={0} className='w-100 bg-transparent font-p1' style={{ padding: "10px 20px", border: "1px solid var(--bs-gray-1000)", borderRadius: 12 }}>
                            <option value={0} disabled>{t('contact.form.section2.options.placeholder')}</option>
                            {[
                                { id: 1, label: t('contact.form.section2.options.opt1') },
                                { id: 2, label: t('contact.form.section2.options.opt2') },
                                { id: 3, label: t('contact.form.section2.options.opt3') },
                                { id: 4, label: t('contact.form.section2.options.opt4') },
                            ].map(stage => (
                                <option key={stage.id} value={stage.id}>{stage.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Section 3 */}
                <hr className="opacity-100" />
                <div className={`${styles.section3} ${styles.section} d-flex flex-column`} style={{ gap: 30 }}>
                    <h3 className="font-h3">
                        <span style={{ marginRight: 30 }}>[03]</span>
                        <span>{t('contact.form.section3.title')}</span>
                    </h3>
                    <div className="d-flex flex-wrap font-p1" style={{ paddingLeft: 72, gap: "21px 17px", gridAutoFlow: "column", lineHeight: "1" }}>
                        <textarea name="request" id="request" onChange={handleInputs} className='font-p1 bg-transparent w-100' style={{ color: "var(--bs-gray-1000)", height: "4lh", padding: "10px 20px", boxSizing: "content-box", border: "1px solid var(--bs-gray-1000)", borderRadius: 12 }} />
                    </div>
                </div>

                {/* Section 4 */}
                <hr className="opacity-100" />
                <div className={`${styles.section4} ${styles.section} d-flex flex-column`} style={{ gap: 30 }}>
                    <h3 className="font-h3">
                        <span style={{ marginRight: 30 }}>[04]</span>
                        <span>{t('contact.form.section4.title')}</span>
                    </h3>
                    <div className={`d-flex flex-wrap ${styles['form-bool-inputs']} form-bool-inputs font-p1`} style={{ paddingLeft: 72, gap: "21px 17px", gridAutoFlow: "column", lineHeight: "1" }}>{
                        [
                            { id: 1, label: t('contact.form.section4.options.opt1') },
                            { id: 2, label: t('contact.form.section4.options.opt2') },
                            { id: 3, label: t('contact.form.section4.options.opt3') },
                            { id: 4, label: t('contact.form.section4.options.opt4') },
                            { id: 5, label: t('contact.form.section4.options.opt5') },
                        ].map(option => (
                            <label key={option.id} htmlFor={`term-${option.id}`} className='d-flex align-items-end justify-content-center text-center' style={{ width: 140, height: 88, border: "1px solid var(--bs-gray-1000)", borderRadius: 12, padding: "20px 17px" }}>
                                {option.label}
                                <input onChange={handleInputs} type="radio" id={`term-${option.id}`} name={`term`} style={{ visibility: 'hidden', width: 0 }} />
                            </label>
                        ))
                    }</div>
                </div>

                {/* Section 5 */}
                <hr className="opacity-100" />
                <div className={`${styles.section5} ${styles.section} d-flex flex-column`} style={{ gap: 30 }}>
                    <h3 className="font-h3">
                        <span style={{ marginRight: 30 }}>[05]</span>
                        <span>{t('contact.form.section5.title')}</span>
                    </h3>
                    <div className={`d-flex flex-column ${styles['form-data-input']} form-data-input font-p1`} style={{ paddingLeft: 72, gap: 20, lineHeight: "1" }}>{
                        [
                            { id: 1, label: t('contact.form.section5.fieldsLabels.fullName') },
                            { id: 2, label: t('contact.form.section5.fieldsLabels.email'), inputType: "email" },
                            { id: 3, label: t('contact.form.section5.fieldsLabels.phone'), inputType: "tel" },
                            { id: 4, label: t('contact.form.section5.fieldsLabels.projectName') },
                        ].map(option => (
                            <label key={option.id} htmlFor={`data-${option.id}`} className='d-flex align-items-end text-center font-h3' style={{ gap: 30 }}>
                                {option.label}
                                <input required onChange={handleInputs} type={option.inputType || "text"} id={`data-${option.id}`} name={`data`} className='bg-transparent font-p1' style={{ flex: 1, height: 36 }} />
                            </label>
                        ))
                    }</div>
                </div>

                {/* Submit handles */}
                <div className={`${styles.submitHandles} d-flex justify-content-end`}>
                    <div className={`${styles['submit-handles']} submit-handles d-flex flex-column col-auto g-0`} style={{ gap: 30 }}>
                        <div className="d-flex flex-column col-auto g-0" style={{ gap: 5 }}>
                            <label htmlFor="terms-conditions">
                                <input required onChange={handleTermsAgreement} type="checkbox" id="terms-conditions" name="agreements" />
                                {t('contact.form.formSubmission.termsDisclosure')}
                            </label>
                            <label htmlFor="newsletter">
                                <input onChange={handleInputs} type="checkbox" id="newsletter" name="agreements" />
                                {t('contact.form.formSubmission.newsletter')}
                            </label>
                        </div>
                        <button type="submit" className="btn btn-outline btn-lg rounded-pill border-4 font-p1 fs-6 d-lg-block" style={{ padding: "18px 34px", fontWeight: 900, lineHeight: "1.125", letterSpacing: 0 }}>
                            {t('contact.form.formSubmission.submitButton')}
                        </button>
                    </div>
                </div>
            </form>
        </Modal >
    </>);
};

export default HeaderContact
