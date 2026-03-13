import { useParams } from "react-router-dom"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CosmoHeader from "../assets/img/ProjectHeaders/header-cosmonauta.jpg"
import AnalysisArt from "../assets/img/ProjectHeaders/analysis.jpg"
import { ProjectProcess } from "./ProjectSingle/ProjectProcess";
import { ProjectCTA } from "./ProjectSingle/ProjectCTA";
import { OtherProjects } from "./ProjectSingle/OtherProjects";
import { projectsList } from "../utils/projectsList";
import { useEffect } from "react";

export const SingleProjectView = () => {
    const { projectId } = useParams();
    const { t } = useTranslation();


    const projectData = projectsList.find(project => project.id === projectId)


    return (
        <section id="project-view" className="mx-auto">
            <div className="container py-5 mt-5 d-flex flex-column gap-5">
                <div className="d-flex flex-column justify-content-center">
                    <img src={projectData.cover} alt="portada de proyecto CloudTech" className="rounded-4" />
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between gap-4 px-5 my-5 text-white">
                    <ul className="list-unstyled d-flex flex-column text-md-start text-center gap-2">
                        <li className="fs-5">{t('projects.menuItems.itemOne')}</li>
                        <li className="fs-5">{t('projects.menuItems.itemTwo')}</li>
                        <li className="fs-5">{t('projects.menuItems.itemThree')}</li>
                        <li className="fs-5">{t('projects.menuItems.itemFour')}</li>
                    </ul>
                    <p className="ct-psummary text-lg-start text-center">{t(projectData.summary)}</p>
                </div>

                <div className="d-flex flex-column justify-content-center">
                    <div className="d-flex flex-column flex-lg-row gap-4 gap-lg-5 justify-content-center align-items-center">
                        <h2 className="fs-4 section-title">{t('projects.menuItems.itemOne')}</h2>
                        <p className="text-white text-lg-start text-center ct-psummary">{t(projectData.need)}</p>
                    </div>
                    <img src={AnalysisArt} className="mt-5 rounded-4" alt="proceso analisis de necesidad CloudTech" />
                </div>

                <div className="d-flex flex-column justify-content-center gap-4">
                    <div className="d-flex flex-column flex-lg-row gap-4 gap-lg-5 justify-content-center align-items-center">
                        <h2 className="fs-4 section-title">{t('projects.menuItems.itemTwo')}</h2>
                        <p className="text-white text-lg-start text-center ct-psummary">{t(projectData.process)}</p>
                    </div>

                    <ProjectProcess />
                </div>

                <div className="d-flex flex-column justify-content-center gap-4">
                    <div className="d-flex flex-column flex-lg-row gap-4 gap-lg-5 justify-content-center align-items-center">
                        <h2 className="fs-4 section-title">{t('projects.menuItems.itemThree')}</h2>
                        <p className="text-white text-lg-start text-center ct-psummary">{t(projectData.solution)}</p>
                    </div>


                </div>

                <div className="d-flex flex-column justify-content-center gap-4">
                    <div className="d-flex flex-column flex-lg-row gap-4 gap-lg-5 justify-content-center align-items-center">
                        <h2 className="fs-4 section-title">{t('projects.menuItems.itemFour')}</h2>

                    </div>


                </div>
                <ProjectCTA />
                <OtherProjects />
            </div>
        </section>
    )
}