import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import ProjectsPreview from '../assets/img/Portfolio/projectsCT.png'
import cosmoLogo from "../assets/img/Portfolio/Cosmonauta/logo.svg"
import cosmoBg from "../assets/img/Portfolio/Cosmonauta/cardBg.jpg"
import muraLogo from "../assets/img/Portfolio/Mura/logo.png"
import muraBg from "../assets/img/Portfolio/Mura/cardBg.jpg"
import jpLogo from "../assets/img/Portfolio/JPPortfolio/logo.svg"
import jpBg from "../assets/img/Portfolio/JPPortfolio/cardBg.jpg"
import busquedasLogo from "../assets/img/Portfolio/Busquedas/logo.png"
import busquedasBg from "../assets/img/Portfolio/Busquedas/cardBg.jpg"
import React from "react"

export const ProjectsHome = () => {
    const { t } = useTranslation();

    const spotlightProjects = [
        {
            id: "cosmonauta",
            name: t("projects.projectName1"),
            logo: cosmoLogo,
            bgPicture: cosmoBg,
            description: t("projects.featured.projectDescription1"),
            tags: [t("projects.tags.eCommerce"), t("projects.tags.webDev")],
            path: "/projects/libreria-cosmonauta"
        },
        {
            id: "mura",
            name: t("projects.projectName7"),
            logo: muraLogo,
            bgPicture: muraBg,
            description: t("projects.featured.projectDescription7"),
            tags: [t("projects.tags.digitalMagazine"), t("projects.tags.digitalMagazine")],
            path: "/projects/mura"
        },
        {
            id: "jp-portfolio",
            name: t("projects.projectName9"),
            logo: jpLogo,
            bgPicture: jpBg,
            description: t("projects.featured.projectDescription9"),
            tags: [t("projects.tags.webCinematographer"), t("projects.tags.visualPortfolio")],
            path: null
        },
        {
            id: "busquedas",
            name: t("projects.projectName6"),
            logo: busquedasLogo,
            bgPicture: busquedasBg,
            description: t("projects.featured.projectDescription6"),
            tags: [t("projects.tags.digitalMagazine"), t("projects.tags.multilingualSite")],
            path: "/projects/busquedas"
        }
    ];

    return (
        <section id="projects-home-version" style={{ paddingTop: 65, paddingBottom: 52, color: "var(--bs-gray-100)" }}>
            <div className="container py-5 overflow-x-hidden">
                {/* Section Title */}
                <div className="home-projects-upper d-flex flex-column text-center align-items-center mb-5 mx-auto" style={{ width: "fit-content", maxWidth: "100%", paddingInline: 20, gap: 40 }}>
                    <h2 className="home-projects-title font-h1 position-relative" style={{ width: "fit-content", color: "var(--bs-gray-1000)" }}>
                        <span className="d-none d-md-block position-absolute" style={{ backgroundColor: "var(--bs-accent-1)", top: "-30%", left: "-7.5%", zIndex: -1, width: "115%", height: "160%" }} />
                        <span className="highlighted-text">{t('projects.sectionTitle')}</span>
                    </h2>
                    <p className="text-white font-p1" style={{ maxWidth: 600 }}>
                        {t('projects.sectionDescription')}
                    </p>
                    <style>{`
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
                        }
                        @media (width >= 768px) {
                            .home-projects-title {
                                font-size: 4rem;
                                font-weight: 900;
                                .highlighted-text { background: none; }
                            }
                        }
                    `}</style>
                </div>

                <div className="container" style={{ maxWidth: 774, marginBottom: 60 }}>
                    <div className="row row-cols-2" style={{ "--gutter": "10px", "--bs-gutter-x": "var(--gutter)", "--bs-gutter-y": "var(--gutter)", justifyContent: "center" }}>
                        {spotlightProjects.map(project => (
                            <div key={project.id} className="col" style={{ maxWidth: 380, minWidth: 330 }}>
                                {/* Project Card */}
                                <Link to={project.path} className="project-card container d-flex flex-column h-100" style={{ gap: 20, paddingBlockEnd: 20, textDecoration: "none", color: "var(--bs-gray-100)" }}>
                                    {/* Main Card Container */}
                                    <div className="card-main row text-center align-items-center position-relative overflow-hidden border" style={{ height: 655, paddingInline: 20, background: "var(--bs-gray-1000)" /* "#165766" */, borderRadius: 12, boxShadow: "5px 6px 7px 3px #00000040, 2px 4px 3.3px 1px #00000078" }} >
                                        <img src={project.bgPicture} alt={`Imagen de fondo de ${project.name}`} className="z-n1 position-absolute top-0 start-0 w-100 h-100 object-fit-cover d-sm-block p-0" />
                                        <div className="col g-0">
                                            <img src={project.logo} alt={`Logo de ${project.name}`} style={{ width: 221 }} />
                                            <div className="card-description-wrapper d-grid">
                                                <p className="card-description m-0 overflow-hidden">{project.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card Footer */}
                                    <div className="card-footer row">
                                        <div className="col d-flex flex-column" style={{ paddingInline: 20, gap: 20 }}>
                                            <div className="row">
                                                <h4 className="g-0 m-0">{project.name}</h4>
                                            </div>
                                            <div className="row gap-2">
                                                {project.tags?.map((tag, idx) => (
                                                    <div key={idx} className="col-auto border" style={{ "--bs-border-color": "currentColor", borderRadius: 14, padding: "5px 20px" }}>{tag}</div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <style>{`
                        .project-card {
                            .card-main { transition: background 0.3s ease; }
                            .card-footer { transition: color 0.3s ease; }
                            .card-description-wrapper {
                                grid-template-rows: 0fr;
                                margin-top: 0px;
                                transition:
                                  grid-template-rows 0.4s ease
                                , margin-top 0.3s ease;
                            }
                            .card-description {
                                opacity: 0;
                                transition:
                                  opacity 0.3s ease
                                , display 0.3s allow-discrete;
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
                    `}</style>
                </div>

                <div className="home-projects-portfolio-btn d-flex flex-column justify-content-center align-items-center flex-md-row gap-3">
                    <Link to="/projects" className="btn btn-outline btn-lg rounded-pill border-2 fw-bold fs-5 px-5 py-2" style={{ maxWidth: 419, width: "100%" }}>
                        {t('projects.sectionPortfolioButton')}
                    </Link>
                    <style>{`
                        @media (width < 768px) {
                            .home-projects-portfolio-btn a {                                                                
                                letter-spacing: 0;                                
                            }
                        }
                    `}</style>
                </div>
            </div>

        </section>
    )
}