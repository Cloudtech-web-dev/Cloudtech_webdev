import { Services } from "../components/Services/Services"
import { Process } from "../components/Process"
import { HeaderServices } from "../components/HeaderServices"
import { SEO } from "../utils/SEO"

export const ServicesPage = () => {
    return (
        <>
            <SEO
                title="Servicios de Desarrollo Web y Comunicación"
                description="Soluciones digitales potentes: Desarrollo en WordPress, Webflow y a medida, estrategias de comunicación, copywriting y licencias de software AutoCAD. ¡Impulsa tu marca hoy!"
                url={window.location.href}
            />
            <main>
                <HeaderServices />
                <Services />
                <Process />
            </main>
        </>
    )
}