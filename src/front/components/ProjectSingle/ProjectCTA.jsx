import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";

export const ProjectCTA = () => {
    const { t } = useTranslation();

    return (
        <div className="mx-auto my-5">
            <div className="d-flex flex-column gap-4 justify-content-center align-items-center py-5">
                <h1 className="component-title text-center">{t('projects.projectsCTA')}</h1>
                <p className="text-center text-white ct-psummary fs-5">{t('projects.projectsCTADescritpion')}</p>
                <Link to={'/contact'} className="btn btn-outline rounded-pill px-5 py-2 fs-5 fw-bold mx-auto w-lg-auto">{t('projects.projectsCTAButton')}</Link>
            </div>
        </div>
    )
}