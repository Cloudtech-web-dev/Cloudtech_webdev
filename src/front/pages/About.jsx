import { Team } from "../components/Team/Team"
import { HeaderAbout } from "../components/HeaderAbout"
import { Values } from "../components/About/Values"
import { WorkSteps } from "../components/About/WorkSteps"
import { SEO } from "../utils/SEO"

export const About = () => {
    return (
        <>
            <SEO
                title="Nosotros | Creatividad y Tecnología"
                description="En CloudTech unimos diseño de vanguardia y tecnología robusta. Creamos conexiones reales y crecimiento medible para tu negocio con soluciones digitales a medida."
                url={window.location.href}
            />
            <main>
                <HeaderAbout />
                <Team />
                <WorkSteps />
                <Values />
            </main>
        </>

    )
}