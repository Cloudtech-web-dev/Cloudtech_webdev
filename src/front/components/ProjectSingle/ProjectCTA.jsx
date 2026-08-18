import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";
import '../../styles/Accordion.css'

export const ProjectCTA = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto my-5">
            <div className="category-header-centered">
                <h1 className="service-category-title-main">{t('projects.projectsCTA')}</h1>
                <p className="service-category-description-main">{t('projects.projectsCTADescritpion')}</p>
                <Link to={'/contact'} className="btn btn-outline rounded-pill px-5 py-2 fs-5 fw-bold mx-auto w-lg-auto w-50">{t('projects.projectsCTAButton')}</Link>
            </div>
        </div>
    )
}