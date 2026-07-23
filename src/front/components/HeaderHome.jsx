import React from "react";
import { Link } from "react-router-dom";
import HomeOne from "../assets/img/HomeOne.jpg"
import { useTranslation, Trans } from "react-i18next";

const transparentText = true;
const syncedBgClassName = "synced-bg";
const syncedBg = (isHeading = true) => transparentText ? ` ${syncedBgClassName}${isHeading ? " is-header" : ""}` : "";
const syncedBgStyles = <style>{`
    .${syncedBgClassName} {
        background-image: url(${HomeOne});
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
    .is-header {                                            
        color: transparent;
        background-clip: text;
    }
`}</style>;

export const HeaderHome = () => {
    const { t } = useTranslation();

    return (

        <>
            {/* Header para escritorio */}
            <div className="d-none d-lg-block">
                <section className={`w-100 vh-100 d-flex position-relative${syncedBg(false)}`}>
                    <div className="position-absolute w-100 h-100 mx-auto" />
                    {transparentText || <img src={HomeOne} alt="CloudTech background image" className="z-n1 mx-auto position-absolute w-100 h-100 object-fit-cover d-sm-block" />}
                    <div className="container w-100 h-100 z-1">
                        <div className="row h-100 text-center justify-content-center z-1 my-5 mx-0">
                            <div className="col pt-5 pt-lg-0 mt-5 d-flex flex-column justify-content-center align-items-center z-1" style={{ marginBottom: 20, maxWidth: 1024 }}>
                                <h1 className="fw-bold" style={{ fontSize: 64, lineHeight: 1.11, letterSpacing: "-0.01em", color: "var(--bs-accent-1)", marginBottom: 40 }}>
                                    <Trans i18nKey='headers.headerHome.headLine' components={[<span className={`highlighted-text${syncedBg()}`} />]} />
                                    {transparentText && syncedBgStyles}
                                </h1>

                                <p className="font-p1 fw-semibold" style={{ color: "var(--bs-gray-100)", maxWidth: "689px", marginBottom: 63 }}>
                                    {t('headers.headerHome.headerDescription')}
                                </p>

                                <div className="d-flex flex-column justify-content-center flex-md-row gap-3 w-100">
                                    <Link to="/projects" className="btn btn-outline btn-lg rounded-pill border-2 font-p1 fw-bold fs-6" style={{ width: 159, padding: "18px 34px", lineHeight: "18px" }}>
                                        {t('headers.headerHome.portfolioButton')}
                                    </Link>
                                    <Link to="/contact" className="btn btn-outline btn-lg rounded-pill boder-2 font-p1 fw-bold fs-6" style={{ backgroundColor: "var(--bs-accent-1)", width: 225, padding: "18px 34px", lineHeight: "18px" }} ref={node => node?.style.setProperty("color", "var(--bs-gray-1000)", "important")}>
                                        {t('headers.headerHome.contactButton')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='intro-scroll-wrapper-positive'>
                    <div className='intro-sticky-box-positive'>
                        <section className="w-100 vh-100 d-flex position-relative">
                            <div className="container w-100 h-100 z-1">
                                <div className="row h-100 text-center justify-content-center z-1 my-5">
                                    <div className="col pt-5 pt-lg-0 my-5 d-flex flex-column justify-content-center align-items-center z-1 g-0" style={{ flex: "0 1 677px", gap: 40 }}>
                                        <h2 className="font-h1 mt-sm-0 mt-5 mb-4" style={{ color: "var(--bs-accent-1)" }} ref={node => node?.style.setProperty("line-height", "134%", "important")}>
                                            <Trans i18nKey='headers.headerHome.servicesPresentation.headLine' components={[<span className="highlighted-text" />]} />
                                        </h2>

                                        <p className="font-p1 mb-5" style={{ color: "var(--bs-gray-100)" }}>
                                            {t('headers.headerHome.servicesPresentation.description')}
                                        </p>


                                        <Link to="/projects" className="btn btn-outline btn-lg rounded-pill border-2 font-p1 fw-bold fs-6" style={{ width: 419, padding: "18px 34px", lineHeight: "18px" }}>
                                            {t('headers.headerHome.servicesPresentation.portfolioButton')}
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Header para movil */}
            <div className="d-lg-none">
                <section className={`w-100 d-flex position-relative${syncedBg(false)}`} style={{ minHeight: "100dvh" }}>
                    {/* <div className="position-absolute w-100 h-100 bg-dark bg-opacity-50 mx-auto"></div> */}
                    {transparentText || <img src={HomeOne} alt="CloudTech background image" className="z-n1 mx-auto position-absolute w-100 object-fit-cover d-sm-block" style={{ minHeight: "100dvh" }} />}
                    <div className="container w-100 z-1 py-5" style={{ minHeight: "100dvw" }}>
                        <div className="row text-center z-1 h-100">
                            <div className="col pt-5 pt-lg-0 my-5 d-flex flex-column justify-content-center align-items-center z-1 gap-5">
                                <h1 className="hero-title-home display-3 fw-bolder w-100 mt-sm-0 mb-4" style={{ color: "var(--bs-accent-1)" }}>
                                    <Trans i18nKey='headers.headerHome.headLine' components={[<span className={`highlighted-text${syncedBg()}`} />]} />
                                    {transparentText && syncedBgStyles}
                                </h1>

                                <p className="hero-subtitle-home font-p1 text-white w-100 mb-5">
                                    {t('headers.headerHome.headerDescription')}
                                </p>

                                <div className="d-flex flex-column justify-content-center flex-md-row gap-3 w-100">
                                    <Link to="/projects" className="btn btn-outline-light btn-lg rounded-pill px-5">
                                        {t('headers.headerHome.portfolioButton')}
                                    </Link>
                                    <Link to="/contact" className="btn btn-outline btn-lg rounded-pill px-5">
                                        {t('headers.headerHome.contactButton')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='intro-scroll-wrapper-positive'>
                    <div className='intro-sticky-box-positive'>
                        <section className="w-100 min-vh-100 d-flex position-relative px-3">
                            <div className="container z-1">
                                <div className="row h-100 text-center z-1">
                                    <div className="col my-5 d-flex flex-column justify-content-center align-items-center z-1 g-0" style={{ flex: "0 1 677px", gap: 40 }}>
                                        <h2 className="font-h1 mt-sm-0 mt-5 mb-4" style={{ color: "var(--bs-accent-1)" }} ref={node => node?.style.setProperty("line-height", "134%", "important")}>
                                            <Trans i18nKey='headers.headerHome.servicesPresentation.headLine' components={[<span className="highlighted-text" />]} />
                                        </h2>

                                        <p className="font-p1 mb-5 fw-medium" style={{ color: "var(--bs-gray-100)" }}>
                                            {t('headers.headerHome.servicesPresentation.description')}
                                        </p>


                                        <Link to="/projects" className="btn btn-outline btn-lg rounded-pill font-p1 px-5 py-3 w-100">
                                            {t('headers.headerHome.servicesPresentation.portfolioButton')}
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )

}