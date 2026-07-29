import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

import { GradientBg } from "./GradientBg";


export const PageHeader = ({
  title,
  description,
  backgroundImg,
  withProjectButton = true,
  withSphereEffect = false,
  withoutTransparencyEffect = false,
  withoutBackgroundFilter = false
}) => {
  const { t } = useTranslation();
  
  return (
    <section className={"position-relative min-vh-100 overflow-hidden" + (withoutTransparencyEffect ? "" : " synced-bg")}>

      {/* Background Selection */}
      {withSphereEffect ? (
        <div className="position-absolute top-0 start-0 w-100 h-100 z-0 overflow-hidden">
          <GradientBg />
        </div>
      ) : withoutTransparencyEffect && (
        <img  // ← Fallback if no transparency nor sphere effects
          src={backgroundImg}
          alt="CloudTech background image"
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-0"
          style={{ objectPosition: "center, center" }} />
      )}

      {/* (optional) Background Filter */}
      {withoutBackgroundFilter || <div className="position-absolute top-0 start-0 w-100 h-100 mx-auto" style={{ backgroundColor: "rgba(0, 0, 0, .55)", zIndex: 1 }} />}

      {/* Section Contents */}
      <div className="container w-100 min-vh-100 py-5 d-flex align-items-center position-relative z-2">
        <div className="row w-100 z-0 d-flex justify-content-center g-0">
          <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-center z-1 gap-5 w-auto">

            {/* Heading */}
            <h1 className="hero-title-home display-2 fw-bolder text-center">
              <Trans
                i18nKey={title}
                components={[ <span className={"highlighted-text" + (withoutTransparencyEffect ? "" : " synced-bg synced-bg-heading")} /> ]} />
            </h1>

            {/* Description */}
            <p className="hero-subtitle-home fs-5 fw-bold text-white text-center w-75">
              {t(description)}
            </p>

            {/* Navigation Buttons */}
            <div className="d-flex flex-column justify-content-center flex-md-row gap-3 w-100">

              {/* (optional) Projects Button */}
              {withProjectButton && (
                <Link to="/projects" className="btn btn-outline-light btn-lg rounded-pill px-5">
                  {t('headers.headerAbout.portfolioButton')}
                </Link>
              )}

              {/* Contact Button */}
              <Link to="/contact" className="btn btn-outline btn-lg rounded-pill px-5">
                {t('headers.headerAbout.contactButton')}
              </Link>

            </div>

          </div>
        </div>
      </div>

      {/* Component Styles */}
      <style>{`
        .synced-bg {
            background-image: url(${backgroundImg});
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            
            &.synced-bg-heading {
                color: transparent;
                background-clip: text;
            }
        }
      `}</style>

    </section>
  );
};

export default PageHeader;