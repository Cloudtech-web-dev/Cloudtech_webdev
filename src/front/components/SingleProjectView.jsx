import { useParams } from "react-router-dom"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import AnalysisArt from "../assets/img/ProjectHeaders/analysis.jpg"
import { ProjectProcess } from "./ProjectSingle/ProjectProcess";
import { ProjectCTA } from "./ProjectSingle/ProjectCTA";
import { OtherProjects } from "./ProjectSingle/OtherProjects";
import { projectsList } from "../utils/projectsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const SingleProjectView = () => {
    const { projectId } = useParams();
    const { t } = useTranslation();

    const [showModal, setShowModal] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const projectData = projectsList.find(project => project.id === projectId)

    const gallery = projectData.gallery;

    const handleImageClick = (index) => {
        setShowModal(true);
        setSelectedImageIndex(index);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedImageIndex(null);
    }

    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedImageIndex(prevIndex => (prevIndex === 0 ? gallery.length - 1 : prevIndex - 1));
    }

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedImageIndex(prevIndex => (prevIndex === gallery.length - 1 ? 0 : prevIndex + 1));
    }

    const currentImage = selectedImageIndex !== null ? projectData.gallery[selectedImageIndex] : null;

    return (
        <section id="project-view" className="mx-auto">
            <div className="container mt-5 mt-lg-2 d-flex flex-column gap-5">
                <div className="mt-3 d-lg-none"></div>
                <div className="d-flex flex-column justify-content-center">
                    <img src={projectData.cover} alt="portada de proyecto CloudTech" className="rounded-4" />
                </div>

                {/* SECCIÓN ÍNDICE Y RESUMEN PROYECTO */}

                <div className="d-flex flex-column flex-md-row justify-content-between gap-4 px-5 my-5 text-white">
                    <ul className="list-unstyled d-flex flex-column text-md-start text-center gap-2">
                        <li className="fs-5"><a href="#needs" className="index-item-hover">{t('projects.menuItems.itemOne')}</a></li>
                        <li className="fs-5"><a href="#process" className="index-item-hover">{t('projects.menuItems.itemTwo')}</a></li>
                        <li className="fs-5"><a href="#gallery" className="index-item-hover">{t('projects.menuItems.itemThree')}</a></li>
                        <li className="fs-5"><a href="#credits" className="index-item-hover">{t('projects.menuItems.itemFour')}</a></li>
                    </ul>
                    <p className="ct-psummary text-lg-start text-center">{t(projectData.summary)}</p>
                </div>

                {/* SECCIÓN ANÁLISIS DE NECESIDADES */}

                <div id="needs" className="d-flex flex-column justify-content-center">
                    <div className="d-flex flex-column flex-lg-row gap-4 gap-lg-5 justify-content-center align-items-center">
                        <h2 className="fs-4 section-title">{t('projects.menuItems.itemOne')}</h2>
                        <p className="text-white text-lg-start text-center ct-psummary">{t(projectData.need)}</p>
                    </div>
                    <img src={AnalysisArt} className="mt-5 rounded-4" alt="proceso analisis de necesidad CloudTech" />
                </div>

                {/* SECCIÓN PROCESO */}

                <div id="process" className="d-flex flex-column justify-content-center gap-4">
                    <div className="d-flex flex-column flex-lg-row gap-4 gap-lg-5 justify-content-center align-items-center">
                        <h2 className="fs-4 section-title">{t('projects.menuItems.itemTwo')}</h2>
                        <p className="text-white text-lg-start text-center ct-psummary">{t(projectData.process)}</p>
                    </div>

                    <ProjectProcess phases={projectData.phase} />
                </div>

                {/* SECCIÓN FOTOS PROYECTO ENTREGADO */}

                <div id="gallery" className="d-flex flex-column justify-content-center gap-4 my-5">
                    <div className="d-flex flex-column flex-lg-row gap-4 gap-lg-5 justify-content-center align-items-center">
                        <h2 className="fs-4 section-title">{t('projects.menuItems.itemThree')}</h2>
                        <p className="text-white text-lg-start text-center ct-psummary">{t(projectData.solution)}</p>
                    </div>
                    <div className="row g-4">
                        {projectData.gallery.map((item, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4">
                                <div className="gallery-card">
                                    <img
                                        src={item}
                                        alt={`imagen del proyecto ${projectData.name} de CloudTech`}
                                        className="img-fluid rounded shadow-sm custom-gallery-img"
                                        onClick={() => handleImageClick(index)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* SECCIÓN CRÉDITOS */}

                <div id="credits" className="d-flex flex-column justify-content-center gap-4 bg-credits py-5">
                    <div className="d-flex flex-column gap-4 gap-lg-5 justify-content-center align-items-center">
                        <h2 className="fs-4 section-title">{t('projects.menuItems.itemFour')}</h2>
                        <div className="d-flex flex-column gap-4">

                            {projectData.credits.map((item, index) => (
                                <div key={index} className="d-flex flex-column flex-lg-row gap-2 gap-lg-5 justify-content-lg-center">
                                    <p className="text-white text-center text-lg-end">{item.name}</p>
                                    <p className="text-white text-center fw-bold">{t(item.position)}</p>
                                </div>
                            ))}

                        </div>
                        <div className="d-flex flex-column gap-2 mt-4">
                            <h3 className="text-white text-center">{t('projects.menuItems.tech')}</h3>
                            <ul className="list-unstyled d-flex flex-column flex-lg-row gap-lg-5 text-center justify-content-center gap-2">
                                {projectData.tech.map((item, index) => (
                                    <li key={index} className="text-white">{item}</li>
                                ))}
                            </ul>
                            {projectData.collab ? <p className="text-white text-center mt-4"><a className="text-decoration-none text-white" href="https://www.colmenalab.com/" target="_blank">{t(projectData.collab)}</a></p> : ""}
                        </div>
                    </div>


                </div>
                <ProjectCTA />
                <OtherProjects />
            </div>
            {showModal && selectedImageIndex !== null && (
                <>
                    <div className="modal-backdrop fade show"></div>
                    <div
                        className="modal fade show d-block"
                        tabIndex="-1"
                        role="dialog"
                        onClick={handleCloseModal}
                    >
                        <div className="modal-dialog modal-dialog-centered modal-xl" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-content card card-background border-0 rounded-4">
                                <div className="modal-header border-0 pb-0">
                                    <button
                                        type="button"
                                        className="btn-close custom-modal-close-btn mb-1"
                                        aria-label="Close"
                                        onClick={handleCloseModal}
                                    ></button>
                                </div>
                                <div className="modal-body text-center pt-0 position-relative">
                                    <button onClick={handlePrev} className="btn text-white bg-dark opacity-75 position-absolute top-50 start-0 translate-middle-y ms-2 rounded-pill d-flex align-items-center justify-content-center z-3" style={{ width: '45px', height: '45px' }}>
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>
                                    <img
                                        src={currentImage}
                                        className="img-fluid"
                                        alt="detalle portafolio de CloudTech"
                                        style={{ maxHeight: '90vh', objectFit: 'contain' }}
                                    />
                                    <button onClick={handleNext} className="btn text-white bg-dark opacity-75 position-absolute top-50 end-0 translate-middle-y me-2 rounded-pill d-flex align-items-center justify-content-center z-3" style={{ width: '45px', height: '45px' }}>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    )
}