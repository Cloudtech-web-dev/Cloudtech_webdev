import { Link } from "react-router-dom";
import HomeProjects from "../assets/img/HomeProjects.jpg"
import { useTranslation } from "react-i18next";
import "../styles/StickyLayout.css";

export const HeaderProjects = () => {
    const { t } = useTranslation();

    return (

        <section className="position-relative min-vh-100 overflow-hidden">
            <img
                src={HomeProjects}
                alt="CloudTech background image"
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-0"
                style={{ objectPosition: "center, center" }} />

            <div className="position-absolute w-100 h-100 mx-auto" style={{ backgroundColor: "rgba(0, 0, 0, .55)", }} />

            <div className="container w-100 min-vh-100 py-5 d-flex align-items-center position-relative z-2">
                <div className="row w-100 z-0 d-flex justify-content-center">
                    <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-center z-1">

                        <h1 className="hero-title-home display-2 fw-bolder mb-4 text-center">
                            Proyectos digitales <br /> con <span className="bg-positive-title d-inline-block">identidad</span>
                            {/* {t('headers.headerProjects.headLine')}  */}
                            <span className="bg-positive-title d-inline-block"></span>
                        </h1>

                        <p className="hero-subtitle-home fs-5 fw-bold text-white text-center w-100 mb-5">
                            Una selección de sitios web, tiendas online, portafolios y plataformas editoriales donde diseño, contenido y desarrollo se integran para presentar mejor una marca, un producto o una idea.
                            {/* {t('headers.headerProjects.headerDescription')} */}
                        </p>
                        {/* <Link to="/projects" className="btn btn-outline-light btn-lg rounded-pill px-5">Proyectos</Link> */}
                        <Link to="/contact"
                            className="btn btn-outline btn-lg rounded-pill px-5">
                            {t('headers.headerHome.contactButton')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}