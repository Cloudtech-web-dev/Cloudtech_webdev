import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Card } from "./Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCustomBagCheck } from "../../utils/customFaIcons";
import { PlanetWithSatellitesIcon, CodeMonitorIcon, MagicWandIcon, BagCheckIcon } from "../animated-icons";


const services = [
    { id: 'webSites', Icon: PlanetWithSatellitesIcon },
    { id: 'webApps', Icon: CodeMonitorIcon },
    { id: 'eCommerce', Icon: BagCheckIcon },
    { id: 'visualIdentity', Icon: MagicWandIcon },
];


export const Services = () => {
    const { t } = useTranslation();

    return (
        <div className='intro-scroll-wrapper light-section'>
            <div className='intro-sticky-box'>
                <section className="min-vh-100 d-flex justify-content-md-center position-relative px-3 vw-100 align-self-start" style={{ backgroundColor: "var(--bs-gray-100)" }}>

                    {/* Section Inner Container */}
                    <div className="container py-md-5 my-md-4 z-0 align-content-center" style={{ paddingBlock: "5.7rem" }}>

                        {/* Section Header */}
                        <div className="home-services-upper d-flex flex-column text-center justify-content-center align-items-center mx-auto" style={{ maxWidth: "fit-content", paddingInline: "20px", marginBottom: 100, gap: 40 }}>

                            {/* Heading */}
                            <h2 className="home-services-title font-h1 position-relative" style={{ width: "fit-content", color: "var(--bs-accent-1)" }}>
                                <span className="d-none d-md-block position-absolute" style={{ backgroundColor: "var(--bs-gray-1000)", top: "-30%", left: "-17.5%", zIndex: -1, width: "135%", height: "160%" }} />
                                {t('services.sectionTitle')}
                            </h2>
                            
                            {/* Description */}
                            <p className="home-services-description font-p1" style={{ color: "var(--bs-gray-1000)", maxWidth: "580px" }}>
                                {t('services.sectionDescription')}
                            </p>
                            
                        </div>

                        {/* Services Icons Array */}
                        <div className="home-services-middle row my-3 justify-content-center justify-content-md-between mx-auto w-100" style={{ maxWidth: 960, color: "var(--bs-gray-1000)", gap: 30 }}>
                            {services.map(service => (
                                <div key={service.id} className="home-services-icon group col-6 col-md row flex-column align-items-center text-center g-0" style={{ gap: 30 }}>

                                    {/* Service Icon */}
                                    <service.Icon size="7x" className="service-icon" />

                                    {/* Service Label */}
                                    <h3 style={{ fontSize: 24, fontWeight: 700, lineHeight: "1", letterSpacing: "0.01rem" }}>{t(`services.kinds.${service.id}`)}</h3>

                                </div>
                            ))}
                        </div>

                        {/* Link to Services Button */}
                        <div id="services-outline-btn" className="d-flex flex-column justify-content-center flex-md-row gap-3 w-100">
                            <Link to="/services" className="btn btn-outline btn-lg rounded-pill border-4 px-5 py-2 fs-5 fw-bold" style={{ letterSpacing: 0 }}>
                                {t("services.exploreServicesButton")}
                            </Link>
                        </div>

                    </div>

                    {/* Component Styles */}
                    <style>{`
                        @media (width < 768px) {
                            .home-services-upper {
                                gap: 2.5rem !important;
                                margin-bottom: 2.5rem !important;

                                .home-services-title {
                                    background-color: var(--bs-gray-1000);
                                    padding: 4% 8%;
                                    margin: 0;                                                
                                    line-height: 1.2;
                                    white-space: nowrap;
                                }

                                .home-services-description {                                                
                                    letter-spacing: 0;
                                    margin: 0;                                                
                                }
                            }
                            .home-services-middle {
                                column-gap: 0 !important;
                                row-gap: 10px;
                                margin-bottom: 2.5rem !important;
                                .home-services-icon {
                                    gap: 10px !important;
                                    > svg, .service-icon { height: fit-content; width: 0.47em }
                                    h3 { font-size: 1.2rem !important }
                                }
                            }
                        }
                        #services-outline-btn {
                            @media (width > 768px) { margin-top: 100px }
                            a {
                                font-family: "Manrope", sans-serif !important;
                                color: var(--bs-gray-1000) !important;
                                border-color: var(--bs-gray-1000) !important;
                                &:hover {
                                    color: var(--bs-gray-100) !important;
                                    background-color: var(--bs-gray-1000) !important;
                                }
                            }
                        }
                        
                        .home-services-icon {
                            .service-icon { transition: scale 0.3s ease }
                            &:hover .service-icon { scale: 1.2 }
                            &:hover .service-icon { @media (width > 768px) { scale: 1.5 } }
                        }
                    `}</style>

                </section >
            </div>
        </div>
    )
}