import { Link } from "react-router-dom";
import HomeProjects from "../assets/img/HomeProjects.jpg"
import { useTranslation } from "react-i18next";

export const HeaderProjects = () => {
    const { t } = useTranslation();

    return (

        <section className="w-100 h-100 mb-5 position-relative">
            <img src={HomeProjects} alt="CloudTech background image" className="z-n1 mx-auto position-absolute w-100 h-100 object-fit-cover d-sm-block" />
            <div className="position-absolute w-100 h-100 bg-dark bg-opacity-50 mx-auto"></div>
            <div className="container w-100 h-100 py-5 py-lg-2">
                <div className="row text-center z-0">
                    <div className="col-12 mt-5 mt-lg-0 col-lg-6 offst-lg-6 my-5 my-lg-3 py-3 d-flex flex-column justify-content-center align-items-center z-1 text-center">
                        <h1 className="hero-title-home display-3 fw-bolder mt-sm-0 mt-2 mb-4 pt-5 pt-lg-0">
                            {t('headers.headerProjects.headLine')}
                        </h1>

                        <p className="hero-subtitle-home fs-5 text-white w-75 mb-4">
                            {t('headers.headerProjects.headerDescription')}
                        </p>

                        <div className="d-flex flex-column justify-content-center flex-md-row gap-3 w-100">
                            {/* <Link to="/projects" className="btn btn-outline-light btn-lg rounded-pill px-5">Proyectos</Link> */}
                            <Link to="/contact" className="btn btn-outline btn-lg rounded-pill px-5">
                                {t('headers.headerHome.contactButton')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}