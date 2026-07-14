import { Team } from "../components/Team/Team"
import { HeaderAbout } from "../components/HeaderAbout"
import { Values } from "../components/About/Values"
import { WorkSteps } from "../components/About/WorkSteps"
import { WhoWeAre } from "../components/About/WhoWeAre"
import { SEO } from "../utils/SEO"
import { Afterwards } from "../components/Contact/Afterwards"

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
                <Afterwards />
                <WhoWeAre />
                <Team />
                <WorkSteps />
                <Values />
            </main>
        </>

    )
}