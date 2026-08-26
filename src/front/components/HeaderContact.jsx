import { useEffect, useRef, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import { Modal } from './Contact/Modal.jsx';
import { ContactForm } from './Contact/ContactForm.jsx';


export const HeaderContact = () => {
    const { t } = useTranslation();

    const [isFormOpen, setIsFormOpen] = useState(false);
    const formWasOpened = useRef(false);

    /**
     * @type {React.MutableRefObject<number?>}
     * */
    const openTimeout = useRef(null);

    const setFormAsAlreadyOpened = () => {
        formWasOpened.current = true;
        removeEventListener('scroll', handleScroll);
    };

    const openForm = () => {
        setIsFormOpen(true);
        document.body.classList.add("modal-open");

        if (!formWasOpened.current) {
            clearTimeout(openTimeout.current);
            openTimeout.current = setTimeout(setFormAsAlreadyOpened, 100);
        }
    };

    const closeForm = () => {
        document.body.classList.remove("modal-open");
        setIsFormOpen(false);

        if (!formWasOpened.current) {
            clearTimeout(openTimeout.current);
            setFormAsAlreadyOpened();
        }
    };

    const handleSubmit = (/**@type {React.FormEvent<HTMLButtonElement>}*/e) => {
        
    };


    /* OPEN FORM ON SCROLL BEHAVIOR */
    
    const scrollStart = useRef(scrollY);
    const handleScroll = () => {
        if (scrollY > scrollStart.current) {
            scrollTo({ top: 0 });
            openForm();
        } else { scrollStart.current = scrollY }
    };

    useEffect(() => {
        if (formWasOpened.current) return;
        
        addEventListener('scroll', handleScroll);
        return () => removeEventListener('scroll', handleScroll);
    }, []);


    return (<>

        {/* Page Header Section */}
        <section className="contact-header container vh-100" style={{ maxWidth: 1440, color: "var(--bs-gray-100)", placeContent: "center", padding: 137.5, width: "100%" }}>

            {/* Section Contents */}
            <div className="row" style={{ gap: 50 }}>

                {/* Header */}
                <div className="col g-0">

                    {/* Heading */}
                    <h2 className="font-h0" style={{ color: "var(--bs-accent-1)", fontSize: 70, lineHeight: 1, letterSpacing: "0" }}>
                        <Trans i18nKey='contact.sectionTitle' components={[<span className="highlighted-text" />]} />
                    </h2>

                </div>

                {/* Body */}
                <div className="col g-0">

                    {/* Description */}
                    <p className="font-p1" style={{ whiteSpace: 'pre-line' }}>
                        {t('contact.sectionDescription')}
                    </p>

                    {/* Open Form Button */}
                    <div className="row justify-content-center g-0" style={{ marginTop: 40 }}>
                        <button className="btn btn-outline btn-lg rounded-pill border-2 font-p1 fw-bold fs-6" onClick={openForm} style={{ minWidth: "50%", padding: "18px 34px", lineHeight: "18px" }}>
                            {t('contact.formButton')}
                        </button>
                    </div>

                </div>

            </div>

            {/* Component Styles */}
            <style>{`
                @media (width < 768px) { section.contact-header {

                    padding-inline: 40px !important;

                    > div {

                        flex-direction: column;

                        h2 { font-size: calc(1.525rem + 3.3vw) !important }

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
                }}
            `}</style>

        </section>

        {/* Contact Form (modal) */}
        <Modal isOpen={isFormOpen} onClose={closeForm}>
            <ContactForm handleSubmit={handleSubmit} handleCloseForm={closeForm} />
        </Modal >

    </>);
};