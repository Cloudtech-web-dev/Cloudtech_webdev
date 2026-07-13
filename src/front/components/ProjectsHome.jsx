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
            name: "Librería Cosmonauta",
            logo: cosmoLogo,
            bgPicture: cosmoBg,
            description: "Tienda online para una librería independiente, con catálogo, gestión de inventario y pagos seguros.",
            tags: ["E-commerce", "Desarrollo web", "Desarrollo web", "a", "b", "Desarrollo web"]
        },
        {
            id: "mura",
            name: "MURA",
            logo: muraLogo,
            bgPicture: muraBg,
            description: "Revista digital de literatura, con una experiencia visual limpia y una estructura pensada para dar protagonismo al contenido.",
            tags: ["Revisata digital", "Revista digital"]
        },
        {
            id: "jp-portfolio",
            name: "Portfolio Jean-Pierre Olivares",
            logo: jpLogo,
            bgPicture: jpBg,
            description: "Una web pensada para presentar trabajo audiovisual y fotográfico de forma clara, visual y profesional.",
            tags: ["Web cineasta", "Portafolio visual"]
        },
        {
            id: "busquedas",
            name: "Búsquedas",
            logo: busquedasLogo,
            bgPicture: busquedasBg,
            description: "Una plataforma editorial en tres idiomas, diseñada para organizar contenidos, autores y traducciones de forma clara.",
            tags: ["Revista digital", "Sitio multilingüe"]
        }
    ];

    return (
        <section id="projects-home-version">
            <div className="container py-5">
                {/* Sction Title */}
                <div className="d-flex flex-column text-center align-items-center mb-5 mx-auto" style={{ width: "fit-content", gap: 40 }}>
                    <h2 className="font-h1 position-relative" style={{ width: "fit-content", color: "var(--bs-gray-1000)" }}>
                        <span className="position-absolute" style={{ backgroundColor: "var(--bs-accent-1)", top: "-30%", left: "-7.5%", zIndex: -1, width: "115%", height: "160%" }} />
                        {t('projects.sectionTitle')}
                    </h2>
                    <p className="font-p1" style={{ width: 600, color: "var(--bs-gray-100)" }}>
                        {t('projects.sectionDescription')}
                    </p>
                </div>

                {/* Projects */}
                {/* <div className="d-flex justify-content-center my-5">
                    <img src={ProjectsPreview} alt="Vista previa de proyectos de CloudTech" className="img-fluid" />
                </div> */}

                <div className="container text-white" style={{ width: 774, marginBottom: 60 }}>
                    <div className="row row-cols-2" style={{ "--gutter": "10px", "--bs-gutter-x": "var(--gutter)", "--bs-gutter-y": "var(--gutter)" }}>
                        {spotlightProjects.map(project => (
                            <div key={project.id} className="col">
                                {/* Project Card */}
                                <div className="project-card container d-flex flex-column h-100" style={{ gap: 20, paddingBlockEnd: 20 }}>
                                    {/* Main Card Container */}
                                    <div className="card-main row text-center align-items-center position-relative overflow-hidden border" style={{ height: 655, paddingInline: 20, background: "var(--bs-gray-1000)" /* "#165766" */, borderRadius: 12, boxShadow: "5px 6px 7px 3px #00000040, 2px 4px 3.3px 1px #00000078" }} >
                                        <img src={project.bgPicture} alt={`Imagen de fondo de ${project.name}`} className="z-n1 position-absolute top-0 start-0 w-100 h-100 object-fit-cover d-sm-block p-0" />
                                        <div className="col g-0">
                                            <img src={project.logo} alt={`Logo de ${project.name}`} style={{ width: 221 }} />
                                            <p className="card-description" style={{ display: "none", marginTop: 40 }}>{project.description}</p>
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
                                </div>
                            </div>
                        ))}
                    </div>
                    <style>{`
                        .project-card:hover {
                            .card-main {
                                background: #0000008A !important;
                            }
                            .card-footer {
                                color: yellow;
                            }
                            .card-description {
                                display: block !important;
                            }
                        }
                    `}</style>
                </div>

                {/* <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                </div> */}


                <div className="d-flex flex-column justify-content-center flex-md-row gap-3">
                    <Link to="/projects" className="btn btn-outline btn-lg rounded-pill border-2 font-p1 fw-bold fs-6" style={{ width: 419, padding: "18px 34px", lineHeight: "18px" }}>
                        {t('projects.sectionPortfolioButton')}
                    </Link>
                </div>
            </div>

        </section>
    )
}