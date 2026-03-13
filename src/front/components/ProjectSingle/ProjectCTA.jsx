import { useTranslation } from "react-i18next"

export const ProjectCTA = () => {
    const { t } = useTranslation();

    return (
        <div className="mx-auto my-4">
            <div className="d-flex flex-column gap-4 justify-content-center align-items-center">
                <h1 className="fs-3 section-title text-center">{t('projects.projectsCTA')}</h1>
                <p className="text-center text-white ct-psummary">{t('projects.projectsCTADescritpion')}</p>
                <button className="btn btn-outline btn-lg rounded-pill px-4 mx-auto w-lg-auto">{t('projects.projectsCTAButton')}</button>
            </div>
        </div>
    )
}