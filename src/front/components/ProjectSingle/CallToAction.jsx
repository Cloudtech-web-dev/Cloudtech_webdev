import '../../styles/StickyLayout.css';
import PortfolioPDF from "../../assets/img/Portfolio/PORTFOLIO-CLOUDTECH.pdf";
import { useTranslation, Trans } from "react-i18next"

export const CallToAction = () => {
    const { t } = useTranslation();

    return (
        <section className="light-section intro-scroll-wrapper">
            {/* Call to Action Section */}
            <div className="intro-sticky-box">
                <div className="intro-content">
                    <h2 className="section-title">
                        <Trans 
                            i18nKey="projects.CTAsingleview.sectionTitle" 
                            components={[
                                <span className="bg-negative-title" /> 
                            ]} 
                        />
                    </h2>
                    <p className="intro-text">
                        <Trans i18nKey="projects.CTAsingleview.sectionDescription" />
                    </p>
                    <a
                        href={PortfolioPDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark-custom btn-lg px-4 mx-auto w-lg-auto"
                    >
                        {t('projects.downloadPortfolio')}
                    </a>

                </div>
            </div>
        </section>
    );
};