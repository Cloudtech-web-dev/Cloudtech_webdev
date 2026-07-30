import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

import { GradientBg } from "./GradientBg";
import { HighlightTransparencyBox } from "./HighlightTransparencyBox.jsx";


/**
 * @param {import("../utils/customTypes.js").PageHeaderProps} props
 * */
export const PageHeader = ({
  title,
  description,
  backgroundImgURL,
  withSphereEffect,
  withoutProjectsButton,
  withoutTransparencyEffect,
  withoutBackgroundFilter,
  withoutParallaxEffect
}) => {
  const { t } = useTranslation();

  return (
    <section className="position-relative min-vh-100 overflow-hidden">

      {/* Background */}
      <div className="position-absolute bottom-0 start-0 w-100 h-100 overflow-hidden" style={{ clipPath: "inset(0)" }}>

        {/* Background Selection (between image or gradient background) */}
        <div className={"bottom-0 start-0 w-100 h-100 " + (withoutParallaxEffect ? "position-absolute" : "position-fixed")}>
          {(withSphereEffect || !backgroundImgURL) ?

            (/* Gradient Spheres Background */

              <GradientBg />
              
            ) : (/* Background Image */

              <img
                src={backgroundImgURL}
                alt="CloudTech background image"
                className="bottom-0 start-0 w-100 h-100 object-fit-cover"
                style={{ objectPosition: "center center" }} />
            )

          }
        </div>
        
        {/* (optional) Background Filter */}
        <div className={["position-absolute top-0 start-0 w-100 h-100 mx-auto",
            withoutBackgroundFilter==='mobile' ? " d-none d-lg-block"
          : withoutBackgroundFilter==='desktop' ? " d-lg-none"
          : withoutBackgroundFilter ? " d-none" : ""
        ]} style={{ backgroundColor: "rgba(0, 0, 0, .55)" }} />

      </div>

      {/* Section Contents */}
      <div className="container w-100 min-vh-100 py-5 d-flex align-items-center position-relative">
        <div className="row w-100 d-flex justify-content-center g-0">
          <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-center gap-5 w-auto">

            {/* Heading */}
            <h1 className="hero-title-home display-2 fw-bolder text-center">
              <Trans i18nKey={title} components={[
                  withoutTransparencyEffect
                    ? <span className="highlighted-text" style={{ display: "inline-flex", padding: "0 0.18em 0.08lh", margin: "0 0 -0.08lh" }} />
                    : <HighlightTransparencyBox />
                ]}
              />
            </h1>

            {/* Description */}
            <p className="hero-subtitle-home fs-5 fw-bold text-white text-center w-75">
              {t(description)}
            </p>

            {/* Navigation Buttons */}
            <div className="d-flex flex-column justify-content-center flex-md-row gap-3 w-100">

              {/* (optional) Projects Button */}
              {withoutProjectsButton || (
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
            background-image: url(${backgroundImgURL});
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