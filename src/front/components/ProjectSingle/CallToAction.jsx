import '../../styles/StickyLayout.css';
import PortfolioPDF from "../../assets/img/Portfolio/PORTFOLIO-CLOUDTECH.pdf";
// import { useTranslation } from "react-i18next"

export const CallToAction = () => {
    // const { t } = useTranslation();

    return (
        <section className="intro-scroll-wrapper">
            {/* Call to Action Section */}
            <div className="intro-sticky-box">
                <div className="intro-content">
                    <h2 className="section-title">
                        ¿Tienes un proyecto que necesita tomar forma digital?
                    </h2>
                    <p className="intro-text">Podemos ayudarte a ordenar la idea, diseñar la experiencia y construir una web, tienda online, plataforma o portafolio claro, funcional y alineado con tu identidad.
                    </p>
                    <a
                        href={PortfolioPDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark-custom btn-lg px-4 mx-auto w-lg-auto"
                    >
                        Descarga el portafolio
                        {/* {t('projects.downloadPortfolio')} */}
                    </a>

                </div>
            </div>
        </section>
    );
};