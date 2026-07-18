import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PageHeader = ({ title, description, backgroundImg, withProjectButton = true }) => {
  const { t } = useTranslation();

  return (
    <section className="w-100 min-vh-100 mb-5 position-relative d-flex align-items-center">
      <img src={backgroundImg} alt="CloudTech background image" className="z-n1 position-absolute w-100 h-100 object-fit-cover d-sm-block" />
      <div className="position-absolute w-100 h-100 bg-dark bg-opacity-75"></div>

      <div className="container z-1">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-8 text-center d-flex flex-column gap-5">
            <h1 className="hero-title-home display-3 fw-bolder text-center">
              {t(title)}
            </h1>

            <p className="intro-text-positive">
              {t(description)}
            </p>

            <div className="d-flex flex-column justify-content-center flex-md-row gap-3 w-100">
              {withProjectButton && <Link to="/projects" className="btn btn-outline-light btn-lg rounded-pill px-5">{t('headers.headerAbout.portfolioButton')}</Link>}
              <Link to="/contact" className="btn btn-outline btn-lg rounded-pill px-5">{t('headers.headerAbout.contactButton')}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHeader;