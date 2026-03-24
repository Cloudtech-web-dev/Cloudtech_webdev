import HeaderContact from "../components/HeaderContact"
import { SEO } from "../utils/SEO"

export const Contact = () => {
    return (
        <>
            <SEO
                title="Contacto | Cotiza tu Proyecto Digital"
                description="¿Tienes una idea en mente? Contáctanos para materializar tu visión. Expertos en desarrollo, diseño y estrategia listos para llevar tu negocio al siguiente nivel."
                url={window.location.href}
            />
            <HeaderContact />
        </>
    )
}