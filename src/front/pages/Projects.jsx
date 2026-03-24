import { HeaderProjects } from "../components/HeaderProjects";
import { Projects } from "../components/Projects";
import { SEO } from "../utils/SEO";

export const Portfolio = () => {
    return (
        <>
            <SEO
                title="Proyectos y Portafolio Digital"
                description="Explora nuestros universos digitales únicos. Desde e-commerce para librerías hasta plataformas multilingües y revistas digitales. Soluciones reales para desafíos reales."
                url={window.location.href}
            />
            <main>
                <HeaderProjects />
                <Projects />
            </main>
        </>
    )
}