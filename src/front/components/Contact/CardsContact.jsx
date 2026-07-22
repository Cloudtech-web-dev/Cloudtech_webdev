import "../../styles/Accordion.css";
import FolderIcon from "../../assets/Icons/Contact/folder1.svg";
import CalendarIcon from "../../assets/Icons/Contact/calendar.svg";
import EmailIcon from "../../assets/Icons/Contact/mail.svg";
import PortfolioPDF from "../../assets/img/Portfolio/PORTFOLIO-CLOUDTECH.pdf";
// import { useTranslation } from "react-i18next";

const ContactCard = ({ title, description, link = "", icon, isExternal = false, isEmail = false, email = "" }) => {
    return (
        <div className="col-12 col-xl-4">
            <div className={`contact-card-custom h-100 p-4 d-flex flex-column position-relative`}>

                {/* PARTE SUPERIOR: Título */}
                <div className="card-top flex-grow-1">
                    <h3 className="card-title-contact text-center text-md-start">{title}</h3>
                </div>

                {/* PARTE INFERIOR: Texto a la izquierda, Icono a la derecha */}
                <div className="card-bottom d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-end gap-2">
                    <div className="d-flex justify-content-center justify-content-md-start me-md-auto">
                        <p className={`card-description-contact text-center text-md-start`}>
                            {description}
                        </p>
                    </div>

                    <div className="icon-container">
                        <img src={icon} alt="" className="contact-icon" />
                        {link && (
                            <a
                                href={link}
                                className=""
                                target={isExternal ? "_blank" : "_self"}
                                rel={isExternal ? "noopener noreferrer" : ""}
                            ></a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const CardsContact = () => {
    // const { t } = useTranslation();
    const contactEmail = "ventas@cloudtech.com.ec";

    return (
        <section className="contact-cards-section">
            <div className="container">
                <div className="row g-4 justify-content-center align-items-stretch">

                    <ContactCard
                        title="¿Prefieres conversar directamente?"
                        description="Agenda una llamada corta para contarnos tu idea y ver cómo podemos ayudarte."
                        icon={CalendarIcon}
                    />

                    <ContactCard
                        title="También puedes escribirnos directamente a:"
                        description={contactEmail}
                        icon={EmailIcon}
                        link={`mailto:${contactEmail}`}
                    />

                    <ContactCard
                        title="¿Quieres ver primero cómo trabajamos?"
                        description="Mira nuestro portafolio"
                        icon={FolderIcon}
                        link={PortfolioPDF}
                        isExternal={true}
                    />

                </div>
            </div>
        </section>
    );
};