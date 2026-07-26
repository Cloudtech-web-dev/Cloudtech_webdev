import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";


export const HeaderHome = () => {
    const { t } = useTranslation();

    return (<>
    
        {/* Header (desktop) */}
        <section className={`d-none d-lg-block w-100 vh-100 d-flex position-relative synced-bg`}>

            {/* Background Filter */}
            {/* <div className="position-absolute w-100 h-100 bg-dark bg-opacity-50 mx-auto" /> */}

            {/* Section Contents */}
            <div className="container w-100 h-100 z-1">
                <div className="row h-100 text-center justify-content-center z-1 my-5 mx-0">
                    <div className="col pt-5 pt-lg-0 mt-5 d-flex flex-column justify-content-center align-items-center z-1" style={{ marginBottom: 20, maxWidth: 1024 }}>

                        {/* Heading */}
                        <h1 className="fw-bold" style={{ fontSize: 64, lineHeight: 1.11, letterSpacing: "-0.01em", color: "var(--bs-accent-1)", marginBottom: 40 }}>
                            <Trans i18nKey='headers.headerHome.headLine' components={[<span className={`highlighted-text synced-bg synced-bg-header`} />]} />
                        </h1>

                        {/* Description */}
                        <p className="font-p1 fw-semibold" style={{ color: "var(--bs-gray-100)", maxWidth: "689px", marginBottom: 63 }}>
                            {t('headers.headerHome.headerDescription')}
                        </p>

                        {/* Buttons */}
                        <div className="d-flex flex-column justify-content-center flex-md-row gap-3 w-100">
                            
                            {/* Go to Projects button */}
                            <Link to="/projects" className="btn btn-outline btn-lg rounded-pill border-2 font-p1 fw-bold fs-6" style={{ width: 159, padding: "18px 34px", lineHeight: "18px" }}>
                                {t('headers.headerHome.portfolioButton')}
                            </Link>

                            {/* Go to Contact button */}
                            <Link to="/contact" className="btn btn-outline btn-lg rounded-pill boder-2 font-p1 fw-bold fs-6" style={{ backgroundColor: "var(--bs-accent-1)", width: 225, padding: "18px 34px", lineHeight: "18px" }} ref={node => node?.style.setProperty("color", "var(--bs-gray-1000)", "important")}>
                                {t('headers.headerHome.contactButton')}
                            </Link>
                            
                        </div>

                    </div>
                </div>
            </div>

        </section>

        {/* Header (mobile) */}
        <section className={`d-lg-none w-100 d-flex position-relative synced-bg`} style={{ minHeight: "100dvh" }}>

            {/* Background Filter */}
            {/* <div className="position-absolute w-100 h-100 bg-dark bg-opacity-50 mx-auto" /> */}

            {/* Section Contents */}
            <div className="container w-100 z-1 py-5" style={{ minHeight: "100dvw" }}>
                <div className="row text-center z-1 h-100">
                    <div className="col pt-5 pt-lg-0 my-5 d-flex flex-column justify-content-center align-items-center z-1 gap-5">

                        {/* Heading */}
                        <h1 className="hero-title-home display-3 fw-bolder w-100 mt-sm-0 mb-4" style={{ color: "var(--bs-accent-1)" }}>
                            <Trans i18nKey='headers.headerHome.headLine' components={[<span className={`highlighted-text synced-bg synced-bg-header`} />]} />
                        </h1>

                        {/* Description */}
                        <p className="hero-subtitle-home font-p1 text-white w-100 mb-5">
                            {t('headers.headerHome.headerDescription')}
                        </p>

                        {/* Buttons */}
                        <div className="d-flex flex-column justify-content-center flex-md-row gap-3 w-100">

                            {/* Go to Projects button */}
                            <Link to="/projects" className="btn btn-outline-light btn-lg rounded-pill px-5">
                                {t('headers.headerHome.portfolioButton')}
                            </Link>

                            {/* Go to Contact button */}
                            <Link to="/contact" className="btn btn-outline btn-lg rounded-pill px-5">
                                {t('headers.headerHome.contactButton')}
                            </Link>
                            
                        </div>

                    </div>
                </div>
            </div>
            
        </section>

        {/* Component Styles */}
        <style>{`
            .synced-bg {
                background-image: url("src/front/assets/img/HomeOne.jpg");
                background-size: cover;
                background-position: center;
                background-attachment: fixed;
            }
            .synced-bg-header {                                            
                color: transparent;
                background-clip: text;
            }
        `}</style>
        
    </>)
}