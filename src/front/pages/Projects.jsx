
import { Projects } from "../components/Projects";
import { CallToAction } from "../components/Projects/CallToAction";
import { SEO } from "../utils/SEO";
import HomeProjects from "../assets/img/HomeProjects.jpg"
import PageHeader from "../components/PageHeader";

export const Portfolio = () => {
    return (
        <>
            <SEO
                title="Proyectos y Portafolio Digital"
                description="Explora nuestros universos digitales únicos. Desde e-commerce para librerías hasta plataformas multilingües y revistas digitales. Soluciones reales para desafíos reales."
                url={window.location.href}
            />
            <main>
                <PageHeader
                    title="headers.headerProjects.headLine"
                    description='headers.headerProjects.headerDescription'
                    backgroundImg={HomeProjects}
                />
                <Projects />
                <CallToAction />
            </main>
        </>
    )
}