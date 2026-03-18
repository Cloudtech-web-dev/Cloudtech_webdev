import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import ProjectsPreview from '../assets/img/Portfolio/projectsCT.png'

export const ProjectsHome = () => {
    const { t } = useTranslation();

    return (
        <section id="projects-home-version">
            <div className="container py-5">
                {/* Sction Title */}
                <div className="d-flex flex-column text-center justify-content-center">
                    <h2 className="section-title">{t('projects.sectionTitle')}</h2>
                    <p className="text-white ct-description-p">{t('projects.sectionDescription')}</p>
                </div>

                {/* Projects */}
                <div className="d-flex justify-content-center my-5">
                    <img src={ProjectsPreview} alt="Vista previa de proyectos de CloudTech" />
                </div>

                <div className="d-flex justify-content-center">
                    <Link to={"/projects"} className="btn btn-outline btn-lg rounded-pill px-4 mx-auto w-lg-auto">
                        {t('projects.sectionPortfolioButton')}
                    </Link>
                </div>
            </div>

        </section>
    )
}