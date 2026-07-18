import { HeaderProjects } from "../components/HeaderProjects";
import { Projects } from "../components/Projects";
import { SEO } from "../utils/SEO";
import PageHeader from "../components/PageHeader";
import HomeProjects from "../assets/img/HomeProjects.jpg"

export const Portfolio = () => {
    return (
        <>
            <SEO
                title="Proyectos y Portafolio Digital"
                description="Explora nuestros universos digitales únicos. Desde e-commerce para librerías hasta plataformas multilingües y revistas digitales. Soluciones reales para desafíos reales."
                url={window.location.href}
            />
            <main>
                {/* <HeaderProjects /> */}
                <PageHeader
                    title="headers.headerProjects.headLine"
                    description='headers.headerProjects.headerDescription'
                    backgroundImg={HomeProjects}
                />
                <Projects />
            </main>
        </>
    )
}