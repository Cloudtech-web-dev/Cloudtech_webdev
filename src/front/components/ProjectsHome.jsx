import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import assets from "../assets/img/Portfolio";


const spotlightProjects = {
    cosmonauta: { id: 1, tags: ["eCommerce", "webDev"], path: "libreria-cosmonauta"},
    mura: { id: 7, tags: ["digitalMagazine", "digitalMagazine"], path: "mura"},
    jp: { id: 9, tags: ["webCinematographer", "visualPortfolio"], path: null},
    busquedas: { id: 6, tags: ["digitalMagazine", "multilingualSite"], path: "busquedas"}
};


export const ProjectsHome = () => {
    const { t } = useTranslation();

    return (
        <section id="projects-home-version" style={{ paddingTop: 65, paddingBottom: 52, color: "var(--bs-gray-100)" }}>

            {/* Section Contents */}
            <div className="container py-5 overflow-x-hidden">

                {/* Section Header */}
                <div className="home-projects-upper d-flex flex-column text-center align-items-center mb-5 mx-auto" style={{ width: "fit-content", maxWidth: "100%", paddingInline: 20, gap: 40 }}>

                    {/* Heading */}
                    <h2 className="home-projects-title font-h1 position-relative" style={{ width: "fit-content", color: "var(--bs-gray-1000)" }}>
                        <span className="d-none d-md-block position-absolute" style={{ backgroundColor: "var(--bs-accent-1)", top: "-30%", left: "-7.5%", zIndex: -1, width: "115%", height: "160%" }} />
                        <span className="highlighted-text">{t('projects.sectionTitle')}</span>
                    </h2>

                    {/* Description */}
                    <p className="text-white font-p1" style={{ maxWidth: 600 }}>
                        {t('projects.sectionDescription')}
                    </p>

                </div>

                {/* Project Cards Array */}
                <div className="container" style={{ maxWidth: 774, marginBottom: 60 }}>
                    <div className="row row-cols-2" style={{ "--gutter": "10px", "--bs-gutter-x": "var(--gutter)", "--bs-gutter-y": "var(--gutter)", justifyContent: "center" }}>
                        {Object.entries(spotlightProjects).map(([projectKey, project]) => (
                            <div key={projectKey} className="col" style={{ maxWidth: 380, minWidth: 330 }}>
                                
                                {/* Project Card */}
                                <Link to={project.path && `projects/${project.path}`} className="project-card container d-flex flex-column h-100" style={{ gap: 20, paddingBlockEnd: 20, textDecoration: "none", color: "var(--bs-gray-100)" }}>
                                    
                                    {/* Main Card Container */}
                                    <div className="card-main row text-center align-items-center position-relative overflow-hidden border" style={{ height: 655, paddingInline: 20, background: "var(--bs-gray-1000)" /* "#165766" */, borderRadius: 12, boxShadow: "5px 6px 7px 3px #00000040, 2px 4px 3.3px 1px #00000078" }} >

                                        {/* Project Background Image (only shown on hover) */}
                                        <img src={assets[projectKey].cardBg} alt={t('projects.aria.bgImage', { projectName: t(`projects.projectName${project.id}`) })} className="z-n1 position-absolute top-0 start-0 w-100 h-100 object-fit-cover d-sm-block p-0" />

                                        {/* Card Contents */}
                                        <div className="col g-0">
                                            
                                            {/* Project Logo */}
                                            <img src={assets[projectKey].logo} alt={t('projects.aria.logo', { projectName: t(`projects.projectName${project.id}`) })} style={{ width: 221 }} />

                                            {/* Project Description (only shown on hover) */}
                                            <div className="card-description-wrapper d-grid">
                                                <p className="card-description m-0 overflow-hidden">{t(`projects.featured.projectDescription${project.id}`)}</p>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                    {/* Card Footer */}
                                    <div className="card-footer row">
                                        <div className="col d-flex flex-column" style={{ paddingInline: 20, gap: 20 }}>

                                            {/* Project Name */}
                                            <div className="row">
                                                <h4 className="g-0 m-0">{t(`projects.projectName${project.id}`)}</h4>
                                            </div>

                                            {/* Project Tags */}
                                            <div className="row gap-2">
                                                {project.tags?.map((tagTPath, idx) => (
                                                    <div key={idx} className="col-auto border" style={{ "--bs-border-color": "currentColor", borderRadius: 14, padding: "5px 20px" }}>
                                                        {t(`projects.tags.${tagTPath}`)}
                                                    </div>
                                                ))}
                                            </div>
                                            
                                        </div>
                                    </div>

                                </Link>

                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigate to All Projects Button */}
                <div className="home-projects-portfolio-btn d-flex flex-column justify-content-center flex-md-row gap-3">
                    <Link to="/projects" className="btn btn-outline btn-lg rounded-pill border-2 font-p1 fw-bold fs-6" style={{ maxWidth: 419, width: "100%", padding: "18px 34px", lineHeight: "18px" }}>
                        {t('projects.sectionPortfolioButton')}
                    </Link>
                </div>
                
            </div>

            {/* Component Styles */}
            <style>{`
                .project-card {
                    .card-main { transition: background 0.3s ease; }
                    .card-footer { transition: color 0.3s ease; }
                    .card-description-wrapper {
                        grid-template-rows: 0fr;
                        margin-top: 0px;
                        transition:
                            grid-template-rows 0.4s ease,
                            margin-top 0.3s ease
                        ;
                    }
                    .card-description {
                        opacity: 0;
                        transition:
                            opacity 0.3s ease,
                            display 0.3s allow-discrete
                        ;
                    }
                
                    &:hover {
                        .card-main { background: rgba(0, 0, 0, 0.541) !important }
                        .card-footer { color: var(--bs-accent-1) }
                        .card-description-wrapper {
                            grid-template-rows: 1fr;
                            margin-top: 40px;
                        }
                        .card-description { opacity: 1 }
                    }
                }
                
                @media (width >= 768px) {
                    .home-projects-title {
                        font-size: 4rem;
                        font-weight: 900;
                        .highlighted-text { background: none; }
                    }
                }
                @media (width < 768px) {
                    .home-projects-upper {
                        .home-projects-title {
                            font-size: 3rem;
                            font-weight: 900;
                            line-height: 1.4;
                        }
                        .home-projects-description {
                            font-size: 1.5rem;
                            font-weight: 500;
                            letter-spacing: 0;
                        }
                    }

                    .home-projects-portfolio-btn a {
                        border-width: 1px !important;
                        font-size: 20px !important;
                        font-weight: 400 !important;
                        letter-spacing: 0;
                        line-height: var(--bs-btn-line-height) !important;
                        padding: 0.5rem 3rem !important;
                    }
                }
            `}</style>

        </section>
    )
}