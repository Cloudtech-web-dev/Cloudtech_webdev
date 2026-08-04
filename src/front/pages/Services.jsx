import { Process } from "../components/Process"
import { HeaderServices } from "../components/HeaderServices"
import { SEO } from "../utils/SEO"
import { Accordion } from "../components/Services/Accordion"
import { WhereToBegin } from "../components/Services/WhereToBegin"
import PageHeader from "../components/PageHeader"
import HomeServices from "../assets/img/HomeServices.jpg"

export const ServicesPage = () => {
    return (
        <>
            <SEO
                title="Servicios de Desarrollo Web y Comunicación"
                description="Soluciones digitales potentes: Desarrollo en WordPress, Webflow y a medida, estrategias de comunicación, copywriting y licencias de software AutoCAD. ¡Impulsa tu marca hoy!"
                url={window.location.href}
            />
            <main>
                <PageHeader
                    title="headers.headerServices.headLine"
                    description='headers.headerServices.headerDescription'
                    backgroundImgURL={HomeServices}
                />
                <Accordion />
                <WhereToBegin />
                <Process />
            </main>
        </>
    )
}