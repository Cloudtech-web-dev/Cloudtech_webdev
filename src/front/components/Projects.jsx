import { useTranslation } from "react-i18next";
import { Card } from "./Projects/Card";
import { ProjectCTA } from "../components/ProjectSingle/ProjectCTA";
import { projectsList } from "../utils/projectsList";
import '../styles/Accordion.css'

export const Projects = ({ limit = 0 }) => {
    const { t } = useTranslation();

    const projectsToDisplay = limit > 0
        ? projectsList.slice(0, limit)
        : projectsList;

    return (
        <section className="services-accordion-section">
            <div className="container py-5">

                {/* Sction Title */}
                <div className="category-header-centered">
                    <h2 className="service-category-title-main">{t('projects.sectionTitle2')}</h2>
                    <p className="service-category-description-main">{t('projects.sectionDescription2')}</p>
                </div>

                {/* Projects */}
                <div className="mt-5">

                    {projectsToDisplay.map((project, index) => (
                        <Card
                            key={project.id}
                            id={project.id}
                            // gallery={project.gallery}
                            cover={project.cover}
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