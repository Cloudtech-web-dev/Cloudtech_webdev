import { useTranslation } from "react-i18next";
import { Card } from "./Projects/Card";
import { ProjectCTA } from "../components/ProjectSingle/ProjectCTA";
import { projectsList } from "../utils/projectsList";
import PortfolioPDF from "../assets/img/Portfolio/CloudTech-Portfolio.pdf"

export const Projects = ({ limit = 0 }) => {
    const { t } = useTranslation();

    const projectsToDisplay = limit > 0
        ? projectsList.slice(0, limit)
        : projectsList;

    return (
        <section className="mx-3 mb-5">
            <div className="container py-5">

                {/* Sction Title */}
                <div className="d-flex flex-column text-center justify-content-center mb-5 gap-5">
                    <h2 className="section-title">{t('projects.sectionTitle')}</h2>
                    <p className="text-white ct-description-p">{t('projects.sectionDescription')}</p>
                    <div className="d-flex justify-content-center mb-3">
                        <a
                            href={PortfolioPDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            download="CloudTech-Portfolio.pdf"
                            className="btn btn-outline btn-lg rounded-pill px-4 mx-auto w-lg-auto"
                        >
                            {t('projects.downloadPortfolio')}
                        </a>
                    </div>
                </div>

                {/* Projects */}
                <div className="mt-5 ">

                    {projectsToDisplay.map((project, index) => (
                        <Card
                            key={project.id}
                            id={project.id}
                            gallery={project.gallery}
                            name={t(project.name)}
                            preview={t(project.preview)}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            {/* CTA */}
            {limit === 0 && <ProjectCTA />}
        </section>
    );
};