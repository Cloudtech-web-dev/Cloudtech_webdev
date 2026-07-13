import { Card } from "./Card"
import { servicesContent } from "../../utils/servicesContent"
import serviceBg from "../../assets/img/servicesBackground.jpg"
import { useTranslation, Trans } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCode, faHexagonNodes, faPenRuler } from "@fortawesome/free-solid-svg-icons";
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
            icon: faHexagonNodes,
            label: "Sitios web"
        },
        {
            id: 'web-apps',
            icon: faCode,
            label: "Aplicaciones web"
        },
        {
            id: 'e-commerce',
            icon: faCartShopping,
            label: "E-commerce"
        },
        {
            id: 'visual-identity',
            icon: faPenRuler,
            label: "Identidad y contenido visual"
        },
    ];

    return (
        <section className="d-flex justify-content-center position-relative" style={{ backgroundColor: "var(--bs-gray-100)" }}>
            {/* <img src={serviceBg} alt="CloudTech services background image" className="z-n1 mx-auto ct-services-bg position-absolute w-100 h-100 object-fit-cover d-none d-sm-block" /> */}

            <div className="container py-5 my-4 z-0">
                <div className="d-flex flex-column text-center justify-content-center align-items-center mx-auto" style={{ width: 574, marginBottom: 100 }}>
                    <h2 className="font-h1 position-relative" style={{ width: "fit-content", color: "var(--bs-accent-1)", marginBottom: 53 }}>
                        <div className="position-absolute" style={{ backgroundColor: "var(--bs-gray-1000)", top: "-30%", left: "-17.5%", zIndex: -1, width: "135%", height: "160%" }} />
                        {t('services.sectionTitle')}
                    </h2>
                    {/* <h2 className="font-h1 position-relative" style={{ "--highlighted-text-color": "var(--bs-accent-1)", "--highlighted-text-bg": "var(--bs-gray-1000)", marginBottom: 53 }}>
                        <Trans i18nKey='services.sectionTitle' components={[<span className="highlighted-text" />]} />
                    </h2> */}
                    <p className="font-p1" style={{ color: "var(--bs-gray-1000)" }}>
                        {t('services.sectionDescription')}
                    </p>
                </div>

                {/* {sections.map(section => (
                    <div className="row my-3" key={section.id}>
                        <h3 className="section-title mb-0 text-center text-md-start">{section.title}</h3>
                        <h5 className="text-white mb-4 fw-normal fst-italic text-center text-md-start">{section.subtitle}</h5>
                        {groupedServices[section.id] && groupedServices[section.id].map(service => (
                            <div key={service.title} className="col-md-6 col-lg-4 col-xl-3 mb-4">
                                <Card
                                    title={t(service.title)}
                                    icon={service.icon}
                                    description={t(service.description)}
                                    link={t(service.link)}
                                />
                            </div>
                        ))
                        }
                    </div>
                ))} */}

                <div className="row my-3 justify-content-between mx-auto" style={{ width: 960 }}>
                    {services.map(service => (
                        <div key={service.id} className="col-auto row flex-column align-items-center text-center g-0" style={{ width: 188, gap: 30 }}>
                            <FontAwesomeIcon icon={service.icon} size="5x" />
                            <h3>{service.label}</h3>
                        </div>
                    ))}
                </div>
                <div className="d-flex flex-column justify-content-center flex-md-row gap-3 w-100">
                    <Link to="/services" id="services-outline-btn" className="btn btn-outline btn-lg rounded-pill px-5 border-2">
                        Explorar servicios
                    </Link>
                    <style>{`
                        #services-outline-btn {
                            color: var(--bs-gray-1000) !important;
                            border-color: var(--bs-gray-1000) !important;
                            &:hover {
                                color: var(--bs-gray-100) !important;
                                background-color: var(--bs-gray-1000) !important;
                            }
                        }
                    `}</style>
                </div>

            </div>
        </section >
    )
}