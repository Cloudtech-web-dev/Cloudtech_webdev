import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import "../../styles/Accordion.css";
import { servicesList } from "../../utils/servicesList";
import PlusIcon from "../../assets/Icons/plus.svg"
import MinusIcon from "../../assets/Icons/minus.svg"

export const Accordion = () => {
    // const { t } = useTranslation();
    const [openItems, setOpenItems] = useState({
        // Item abierto por defecto
        "websites": "brand-sites",
        "web-apps": "custom-platforms",
        "ecommerce": "online-store",
        "visual-identity": "web-content"
    });

    const toggleAccordion = (categoryId, itemId) => {
        setOpenItems((prev) => ({
            ...prev,
            [categoryId]: prev[categoryId] === itemId ? null : itemId
        }));
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="services-accordion-section">
            <div className="custom-container">
                {servicesList.map((category) => (
                    <div key={category.id} className="service-category-wrapper">

                        {/* CABECERA DE CATEGORÍA CENTRADA */}
                        <div className="category-header-centered">
                            <h2 className="service-category-title-main">
                                {category.title}
                            </h2>
                            <p className="font-p1">
                                {category.description}
                            </p>
                        </div>

                        <div className="accordion-list-container">
                            {category.items.map((item) => {
                                const isOpen = openItems[category.id] === item.id;

                                return (
                                    <div key={item.id} className={`accordion-card ${isOpen ? "open" : ""}`}>

                                        {/* HEADER DEL ACORDEÓN */}
                                        <button
                                            type="button"
                                            className="accordion-header"
                                            onClick={() => toggleAccordion(category.id, item.id)}
                                        >
                                            <div className="accordion-header-left">
                                                <img src={item.icon} alt="" className="header-icon-svg" />
                                                <span className="accordion-header-title">{item.title}</span>
                                            </div>

                                            {/* Icono de + / - */}
                                            <div className="plus-minus-indicator">
                                                <img
                                                    src={isOpen ? MinusIcon : PlusIcon}
                                                    alt={isOpen ? "menos" : "más"}
                                                    className="accordion-toggle-icon"
                                                />
                                            </div>
                                        </button>

                                        {/* CUERPO DEL ACORDEÓN */}
                                        <div className={`accordion-body-collapse ${isOpen ? "show" : ""}`}>
                                            <div className="accordion-body-content">
                                                <div className="content-grid">
                                                    {/* Columna de Texto */}
                                                    <div className="text-side text-sm-center text-md-start text-lg-start">
                                                        <p className="item-description">{item.description}</p>
                                                        <Link to={item.link} className="btn-outline-accent w-lg-25 w-md-100 d-block d-md-inline-block">
                                                            {isMobile ? "Ver nuestro portafolio" : item.buttonText}
                                                        </Link>
                                                    </div>

                                                    {/* Columna de Imagen */}
                                                    <div className="image-side">
                                                        {item.image ? (
                                                            <img src={item.image} alt={item.title} className="preview-image" />
                                                        ) : (
                                                            <div className="image-placeholder">Imagen del proyecto</div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
                <div className="accordion-footer-cta">
                    <Link to="/contact" className="btn-outline-accent">
                        Agenda una llamada
                    </Link>
                </div>
            </div>
        </section>
    );
};