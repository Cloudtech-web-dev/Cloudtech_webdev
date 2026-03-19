import { useTranslation } from "react-i18next";
import { Card } from "./Projects/Card";
import { ProjectCTA } from "../components/ProjectSingle/ProjectCTA";
import { projectsList } from "../utils/projectsList";

export const Projects = ({ limit = 0 }) => {
    const { t } = useTranslation();

    const projectsToDisplay = limit > 0
        ? projectsList.slice(0, limit)
        : projectsList;

    return (
        <section className="mx-3">
            <div className="container py-5">

                {/* Sction Title */}
                <div className="d-flex flex-column text-center justify-content-center mb-5">
                    <h2 className="section-title">{t('projects.sectionTitle')}</h2>
                    <p className="text-white ct-description-p">{t('projects.sectionDescription')}</p>
                </div>

                {/* Projects */}
                <div className="mt-5 mb-5">

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