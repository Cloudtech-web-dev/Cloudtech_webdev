import { Team } from "../components/Team/Team"
import { Values } from "../components/About/Values"
import { WorkSteps } from "../components/About/WorkSteps"
import { WhoWeAre } from "../components/About/WhoWeAre"
import { SEO } from "../utils/SEO"
import { WhereToBegin } from "../components/Services/WhereToBegin"
import PageHeader from "../components/PageHeader"
import HomeAbout from "../assets/img/HomeAbout.jpg"

export const About = () => {
    return (
        <>
            <SEO
                title="Nosotros | Creatividad y Tecnología"
                description="En CloudTech unimos diseño de vanguardia y tecnología robusta. Creamos conexiones reales y crecimiento medible para tu negocio con soluciones digitales a medida."
                url={window.location.href}
            />
            <main>
                <PageHeader
                    title="headers.headerAbout.headLine"
                    description='headers.headerAbout.headerDescription'
                    backgroundImg={HomeAbout}
                />
                <WhoWeAre />
                <Team />
                <WorkSteps />
                <Values />
            </main>
        </>

    )
}