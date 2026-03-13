import { projectsList } from "../../utils/projectsList"
import { ProjectCard } from "./ProjectCard"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"

export const OtherProjects = () => {
    const { t } = useTranslation();
    const { projectId } = useParams();

    const filteredProjects = projectsList.filter(project => project.id !== projectId);

    return (
        <section id="otros-proyectos" className="my-4">
            <h1 className="section-title text-center">{t('projects.otherProjects')}</h1>
            <div className="row">
                {filteredProjects.map(project => (
                    <div key={project.id} className="col-12 col-lg-4 g-5">
                        <ProjectCard
                            id={project.id}
                            cover={project.cover}
                            name={t(project.name)}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}