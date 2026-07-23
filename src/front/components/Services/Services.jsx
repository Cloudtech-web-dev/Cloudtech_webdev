import { Card } from "./Card"
import { servicesContent } from "../../utils/servicesContent"
import { useTranslation, Trans } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCode, faHexagonNodes, faPenRuler } from "@fortawesome/free-solid-svg-icons";
import { faCustomBagCheck, faCustomMagicWand, faCustomPlanetWithSatellites, faCustomCodeMonitor } from "../../utils/customIcons";
import React from "react";
import { Link } from "react-router-dom";

export const Services = () => {
    const { t } = useTranslation();

    const groupedServices = servicesContent.reduce((acc, service) => {
        if (!acc[service.id]) {
            acc[service.id] = [];
        }
        acc[service.id].push(service);
        return acc;
    }, {})

    const sections = [
        {
            id: 'web',
            title: t('services.webDevelopmentTitle'),
            subtitle: t('services.webDevelopmentSubtitle')
        },
        {
            id: 'communication',
            title: t('services.communicationTitle'),
            subtitle: t('services.communicationSubtitle')
        },
        {
            id: 'software',
            title: t('services.softwareSolutionsTitle'),
            subtitle: t('services.softwareSolutionsSubtitle')
        }
    ]

    const services = [
        {
            id: 'web-sites',
            icon: faCustomPlanetWithSatellites,
            label: t('services.kinds.webSites')
        },
        {
            id: 'web-apps',
            icon: faCustomCodeMonitor,
            label: t('services.kinds.webApps')
        },
        {
            id: 'e-commerce',
            icon: faCustomBagCheck,
            label: t('services.kinds.eCommerce')
        },
        {
            id: 'visual-identity',
            icon: faCustomMagicWand,
            label: t('services.kinds.visualIdentity')
        },
    ];

    return (
        <div className='intro-scroll-wrapper light-section'>
            <div className='intro-sticky-box'>
                <section className="min-vh-100 d-flex justify-content-md-center position-relative px-3 vw-100 align-self-start" style={{ backgroundColor: "var(--bs-gray-100)" }}>

                    <div className="container py-md-5 my-md-4 z-0 align-content-center" style={{ paddingTop: "5.7rem" }}>
                        <div className="home-services-upper d-flex flex-column text-center justify-content-center align-items-center mx-auto" style={{ maxWidth: 574, paddingInline: "20px", marginBottom: 100, gap: 40 }}>
                            <h2 className="home-services-title font-h1 position-relative" style={{ width: "fit-content", color: "var(--bs-accent-1)" }}>
                                <span className="d-none d-md-block position-absolute" style={{ backgroundColor: "var(--bs-gray-1000)", top: "-30%", left: "-17.5%", zIndex: -1, width: "135%", height: "160%" }} />
                                {t('services.sectionTitle')}
                                <style>{`
                                    @media (width < 768px) {
                                        .home-services-upper {
                                            gap: 2.5rem !important;
                                            margin-bottom: 2.5rem !important;

                                            .home-services-title {
                                                background-color: var(--bs-gray-1000);
                                                padding: 4% 8%;
                                                margin: 0;
                                                font-size: 2rem;
                                                font-weight: 800;
                                                line-height: 1.2;
                                            }

                                            .home-services-description {
                                                font-size: 1.2rem;
                                                font-weight: 500;
                                                letter-spacing: 0;
                                                margin: 0;
                                            }
                                        }
                                    }
                                `}</style>
                            </h2>

                            <p className="home-services-description font-p1" style={{ color: "var(--bs-gray-1000)" }}>
                                {t('services.sectionDescription')}
                            </p>
                        </div>


                        <div className="home-services-middle row my-3 justify-content-center justify-content-md-between mx-auto w-100" style={{ maxWidth: 960, color: "var(--bs-gray-1000)", gap: 30 }}>
                            {services.map(service => (
                                <div key={service.id} className="home-services-icon col-6 col-md row flex-column align-items-center text-center g-0" style={{ gap: 30 }}>
                                    <FontAwesomeIcon icon={service.icon} size="7x" />
                                    <h3 style={{ fontSize: 24, fontWeight: 700, lineHeight: "1", letterSpacing: "0.01rem" }}>{service.label}</h3>
                                </div>
                            ))}
                            <style>{`
                                @media (width < 768px) {
                                    .home-services-middle {
                                        column-gap: 0 !important;
                                        row-gap: 10px;
                                        margin-bottom: 2.5rem !important;
                                        .home-services-icon {
                                            gap: 10px !important;
                                            svg { height: fit-content; width: 40% }
                                            h3 { font-size: 1.2rem !important }
                                        }
                                    }
                                }
                            `}</style>
                        </div>
                        <div id="services-outline-btn" className="d-flex flex-column justify-content-center flex-md-row gap-3 w-100">
                            <Link to="/services" className="btn btn-outline btn-lg rounded-pill border-4 py-3" style={{ fontWeight: 900, fontSize: 16, letterSpacing: 0, lineHeight: "1.125" }}>
                                {t("services.exploreServicesButton")}
                            </Link>
                            <style>{`
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
                            `}</style>
                        </div>

                    </div>
                </section >
            </div>
        </div>
    )
}