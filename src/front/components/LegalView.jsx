import { useTranslation } from "react-i18next";
import "../styles/Accordion.css";

export const LegalView = () => {
    const { t } = useTranslation();

    // 1. Obtenemos el objeto "legal" completo de tu JSON
    const allLegalData = t("legal", { returnObjects: true });

    // 2. Si el JSON no carga a tiempo, evitamos que la página se rompa
    if (!allLegalData) return null;

    // 3. Convertimos el objeto en un array (para poder hacerle .map)
    // Esto creará un array con dos objetos: [terms, privacy]
    const legalDocuments = Object.values(allLegalData);

    return (
        <section className="services-accordion-section w-100">
            {/* container-fluid hace que ocupe el 100% del ancho de la pantalla */}
            <div className="container-fluid py-5 px-3 px-md-5">
                
                {/* Recorremos el array para imprimir Términos y luego Privacidad */}
                {legalDocuments.map((doc, docIndex) => (
                    
                    <div key={docIndex} className="mb-5 pb-4">
                        
                        {/* Título Principal (Ej: "Términos y Condiciones de Uso") */}
                        <div className="category-header-centered mb-4">
                            <h1 className="service-category-title-main">
                                {doc.title}
                            </h1>
                        </div>

                        {/* Cuadro gris/transparente que ocupa el 100% */}
                        <div className="p-4 p-md-5 border border-white border-opacity-10 rounded-4 w-100" 
                             style={{ backgroundColor: "rgba(255,255,255, 0.02)" }}>
                            
                            {/* Recorremos las secciones de cada documento (1. Introducción..., 2. Propiedad...) */}
                            {doc.sections && doc.sections.map((section, secIndex) => (
                                <div key={secIndex} className="mb-5">
                                    <h2 className="afterwards-step-title mb-3 fs-4">
                                        {section.heading}
                                    </h2>
                                    <p className="ct-paragraph text-white-50 lh-lg">
                                        {section.text}
                                    </p>
                                </div>
                            ))}

                            {/* Fecha de actualización */}
                            <hr className="border-white border-opacity-10 mt-5 mb-3" />
                            <p className="text-white-50 opacity-50 small fst-italic mb-0">
                                {doc.lastUpdate}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};