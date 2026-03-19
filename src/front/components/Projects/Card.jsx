import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as bootstrap from "bootstrap";

export const Card = ({ id, gallery = [], name, preview, index }) => {
    const { t } = useTranslation();
    const isEven = index % 2 === 0;
    const carouselRef = useRef(null);

    useEffect(() => {
        if (carouselRef.current && gallery.length > 1) {
            // Inicializamos el carrusel manualmente para asegurar el autoplay
            const carousel = new bootstrap.Carousel(carouselRef.current, {
                interval: 3000,
                ride: 'carousel',
                pause: false // No se detiene al pasar el mouse
            });
            carousel.cycle();
        }
    }, [gallery.length]);

    return (
        <div className="row align-items-center g-4 g-lg-5 projects-card-spacing mt-5 mb-5">

            <div className={`col-12 col-lg-6 ${!isEven ? "order-lg-2" : "order-lg-1"}`}>
                <div className="text-center text-lg-start px-lg-4">
                    <h3 className="text-white fw-bold mb-3">
                        {t(name)}
                    </h3>
                    <p className="text-white ct-paragraph mb-4">
                        {t(preview)}
                    </p>
                    <Link
                        to={`/projects/${id}`}
                        className="btn btn-outline rounded-pill text-decoration-none py-2 px-4"
                    >
                        {t('projects.discoverMore')}
                    </Link>
                </div>
            </div>

            {/* COLUMNA DEL CARRUSEL: Imágenes y Flechas */}
            <div className={`col-12 col-lg-6 ${!isEven ? "order-lg-1" : "order-lg-2"}`}>
                <div
                    id={`carousel-${id}`}
                    ref={carouselRef}
                    className="carousel slide"
                >
                    <div className="carousel-inner rounded-4 shadow-lg">

                        {gallery.map((image, i) => (
                            <Link
                                key={i}
                                to={`/projects/${id}`}
                                className={`carousel-item ${i === 0 ? "active" : ""}`}
                                style={{ cursor: 'pointer' }} // Para que el usuario sepa que es clickable
                            >
                                <img
                                    src={image}
                                    className="d-block w-100 project-carousel-img"
                                    alt={`${name}-${i}`}
                                />
                            </Link>
                        ))}

                    </div>

                    {/* FLECHAS: Negras con fondo gris desenfocado */}
                    {gallery.length > 1 && (
                        <>
                            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${id}`} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon custom-arrow" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${id}`} data-bs-slide="next">
                                <span className="carousel-control-next-icon custom-arrow" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};