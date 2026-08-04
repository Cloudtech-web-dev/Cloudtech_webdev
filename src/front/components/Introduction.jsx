import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";

export const Introduction = () => {
    const { t } = useTranslation();

    return (

        /* Sticky (stuck) container */
        <div className='intro-scroll-wrapper-positive'>
            <div className='intro-sticky-box-positive'>
                
                {/* Introduction (desktop) */}
                <section className="d-none d-lg-block w-100 vh-100 d-flex position-relative">
                    <div className="container w-100 h-100 z-1">
                        <div className="row h-100 text-center justify-content-center z-1 my-5">
                            <div className="col pt-5 pt-lg-0 my-5 d-flex flex-column justify-content-center align-items-center z-1 g-0" style={{ flex: "0 1 677px", gap: 40 }}>

                                {/* Heading */}
                                <h2 className="font-h1 mt-sm-0 mt-5 mb-4" style={{ color: "var(--bs-accent-1)" }} ref={node => node?.style.setProperty("line-height", "134%", "important")}>
                                    <Trans i18nKey='headers.headerHome.servicesPresentation.headLine' components={[<span className="highlighted-text" />]} />
                                </h2>
                                
                                {/* Description */}
                                <p className="font-p1 mb-5" style={{ color: "var(--bs-gray-100)" }}>
                                    {t('headers.headerHome.servicesPresentation.description')}
                                </p>

                                {/* Go to Projects button */}
                                <Link to="/projects" className="btn btn-outline btn-lg rounded-pill border-2 font-p1 fw-bold fs-6" style={{ width: 419, padding: "18px 34px", lineHeight: "18px" }}>
                                    {t('headers.headerHome.servicesPresentation.portfolioButton')}
                                </Link>

                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction (mobile) */}
                <section className="d-lg-none w-100 min-vh-100 d-flex position-relative px-3">
                    <div className="container z-1">
                        <div className="row h-100 text-center z-1">
                            <div className="col my-5 d-flex flex-column justify-content-center align-items-center z-1 g-0" style={{ flex: "0 1 677px", gap: 40 }}>

                                {/* Heading */}
                                <h2 className="font-h1 mt-sm-0 mt-5 mb-4" style={{ color: "var(--bs-accent-1)" }} ref={node => node?.style.setProperty("line-height", "134%", "important")}>
                                    <Trans i18nKey='headers.headerHome.servicesPresentation.headLine' components={[<span className="highlighted-text" />]} />
                                </h2>

                                {/* Description */}
                                <p className="font-p1 mb-5 fw-medium" style={{ color: "var(--bs-gray-100)" }}>
                                    {t('headers.headerHome.servicesPresentation.description')}
                                </p>

                                {/* Go to Projects button */}
                                <Link to="/projects" className="btn btn-outline btn-lg rounded-pill font-p1 px-5 py-3 w-100">
                                    {t('headers.headerHome.servicesPresentation.portfolioButton')}
                                </Link>

                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        </div>

    );
};