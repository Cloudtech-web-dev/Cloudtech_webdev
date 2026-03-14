import { Link } from "react-router-dom";
import { projectsContent } from "../utils/projectsContent";
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
                            cover={project.cover}
                            name={t(project.name)}
                            preview={t(project.preview)}
                            index={index}
                        />
                    ))}
                </div>
                {/* Buttons */}
                {/* {limit > 0 ? (
                    <div className="row text-center mt-5">
                        <div className="col">
                            <Link to={"/projects"} className="btn btn-outline btn-lg rounded-pill px-4 mx-auto w-lg-auto">
                                {t('projects.sectionPortfolioButton')}
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="row text-center mt-5">
                        <div className="col">
                            <Link to={"/contact"} className="btn btn-outline btn-lg rounded-pill px-4 mx-auto w-lg-auto">
                                {t('projects.sectionCTAButton')}
                            </Link>
                        </div>
                    </div>
                )} */}
            </div>

            {/* CTA */}
            {limit === 0 && <ProjectCTA />}
        </section>
    );
};