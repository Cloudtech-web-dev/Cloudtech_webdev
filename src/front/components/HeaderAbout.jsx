import { Link } from "react-router-dom";
import HomeAbout from "../assets/img/HomeAbout.jpg"
import { useTranslation } from "react-i18next";
import '../../../src/front/styles/StickyLayout.css';
// import PageHeader from "../components/PageHeader";

// const PageHeader = ({ title, description, withProjectButton = true }) => (

// <section className="w-100 min-vh-100 mb-5 position-relative d-flex align-items-center">
//     <img src={HomeAbout} alt="CloudTech background image" className="z-n1 position-absolute w-100 h-100 object-fit-cover d-sm-block" />
//     <div className="position-absolute w-100 h-100 bg-dark bg-opacity-75"></div>

//     <div className="container z-1">
//         <div className="row d-flex justify-content-center">
//             <div className="col-12 col-lg-8 text-center d-flex flex-column gap-5">
//                 <h1 className="hero-title-home display-3 fw-bolder text-center">
//                     {t('headers.headerAbout.headLine')}
//                 </h1>

//                 <p className="intro-text-positive">
//                     {t('headers.headerAbout.headerDescription')}
//                 </p>

//                 <div className="d-flex flex-column justify-content-center flex-md-row gap-3 w-100">
//                     <Link to="/projects" className="btn btn-outline-light btn-lg rounded-pill px-5">{t('headers.headerAbout.portfolioButton')}</Link>
//                     <Link to="/contact" className="btn btn-outline btn-lg rounded-pill px-5">{t('headers.headerAbout.contactButton')}</Link>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>
// )

export const HeaderAbout = () => {
    const { t } = useTranslation();

    return (
        // <PageHeader
        //     title={t('headers.headerAbout.headLine')}
        //     description={t('headers.headerAbout.headerDescription')}
        //     backgroundImg={HomeAbout}
        // />
        <section className="w-100 min-vh-100 mb-5 position-relative d-flex align-items-center">
            <img src={HomeAbout} alt="CloudTech background image" className="z-n1 position-absolute w-100 h-100 object-fit-cover d-sm-block" />
            <div className="position-absolute w-100 h-100 bg-dark bg-opacity-75"></div>

            <div className="container z-1">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-8 text-center d-flex flex-column gap-5">
                        <h1 className="hero-title-home display-3 fw-bolder text-center">
                            {t('headers.headerAbout.headLine')}
                        </h1>

                        <p className="intro-text-positive">
                            {t('headers.headerAbout.headerDescription')}
                        </p>

                        <div className="d-flex flex-column justify-content-center flex-md-row gap-3 w-100">
                            <Link to="/projects" className="btn btn-outline-light btn-lg rounded-pill px-5">{t('headers.headerAbout.portfolioButton')}</Link>
                            <Link to="/contact" className="btn btn-outline btn-lg rounded-pill px-5">{t('headers.headerAbout.contactButton')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}