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
                        <span className="bg-negative-title">
                            Explora
                        </span>
                        nuestro portafolio completo
                    </h2>

                    <p className="intro-text">Preparamos una versión descargable con proyectos seleccionados, servicios y ejemplos de cómo combinamos diseño, contenido y desarrollo para construir experiencias digitales con identidad.
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