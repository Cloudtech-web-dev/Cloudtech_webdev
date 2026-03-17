import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Card = ({ id, gallery = [], name, preview, index }) => {

    const { t } = useTranslation();
    const isEven = index % 2 === 0;

    return (

        <div className="row align-items-center g-4 g-lg-5 projects-card-spacing mt-5 mb-5">

            {/* TEXT */}
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
                        className="ct-btn-outline-accent text-decoration-none py-2 px-4"
                    >
                        {t('projects.discoverMore')}
                    </Link>
                </div>
            </div>

            {/* IMAGE CAROUSEL */}
            <div className={`col-12 col-lg-6 ${!isEven ? "order-lg-1" : "order-lg-2"}`}>
                <div id={`carousel-${id}`} className="carousel slide">
                    {/* DOT INDICATORS */}
                    {gallery.length > 1 && (
                        <div className="carousel-indicators">
                            {gallery.map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    data-bs-target={`#carousel-${id}`}
                                    data-bs-slide-to={i}
                                    className={i === 0 ? "active" : ""}
                                />
                            ))}
                        </div>
                    )}

                    {/* SLIDES */}
                    <div className="carousel-inner rounded-4">
                        {gallery.map((image, i) => (
                            <div
                                key={i}
                                className={`carousel-item ${i === 0 ? "active" : ""}`}
                            >
                                <img
                                    src={image}
                                    className="d-block w-100 project-carousel-img"
                                    alt={`project-${id}-${i}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}