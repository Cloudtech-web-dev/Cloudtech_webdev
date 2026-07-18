import Catalog from "../assets/Icons/Services/Ecommerce/catalog.svg";
import Coding from "../assets/Icons/Services/Apps/coding.svg";
import Dashboard from "../assets/Icons/Services/Apps/dashboard.svg";
import Edition from "../assets/Icons/Services/Websites/edition.svg";
import Fingerprint from "../assets/Icons/Services/Websites/fingerprint.svg";
import Folder from "../assets/Icons/Services/Websites/folder.svg";
import Gear from "../assets/Icons/Services/Apps/gear.svg";
import Grid from "../assets/Icons/Services/Branding/grid.svg";
import Payment from "../assets/Icons/Services/Ecommerce/payment.svg";
import Pen from "../assets/Icons/Services/Branding/pen.svg";
import Player from "../assets/Icons/Services/Branding/player.svg";
import Presentation from "../assets/Icons/Services/Branding/presentation.svg";
import Puzzle from "../assets/Icons/Services/Websites/puzzle.svg";
import Shoppingcart from "../assets/Icons/Services/Ecommerce/shoppingcart.svg";
import Shoppingbag from "../assets/Icons/Services/Ecommerce/shoppingbag.svg";
import Star from "../assets/Icons/Services/Apps/star.svg";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import CoverBusquedas from "../assets/img/ProjectHeaders/busquedascover.jpg";
// import CoverPiedraNegra from "../assets/img/ProjectHeaaders/piedranegraCover.jpg";
// import CoverCosmonauta from "../assets/img/ProjectHeaaders/cosmonautaCover.jpg";

export const servicesList = [

    // =======================================================
    // SITIOS WEB
    // =======================================================

    {
        id: "websites",
        title: "Sitios web",
        // title: "services.websites.title",
        description: "Para marcas, creativos y proyectos que necesitan mostrar mejor su trabajo, sus productos o sus servicios.",
        // description: "services.websites.description",

        items: [
            {
                id: "brand-sites",
                title: "Sitios para marcas",
                // title: "services.websites.brandSites.title",
                description: "Creamos sitios claros, atractivos y fáciles de usar para presentar tu proyecto, tus servicios o tu marca con identidad.",
                // description: "services.websites.brandSites.description",
                icon: Fingerprint,
                image: CoverBusquedas,
                buttonText: "Descubre nuestro portafolio",
                // buttonText: "services.portfolioButton",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "creative-portfolios",
                title: "Portafolios creativos",
                // title: "services.websites.creativePortfolios.title",
                description: "Diseñamos webs para mostrar trabajo visual, audiovisual o editorial de forma clara, profesional y fácil de recorrer.",
                // description: "services.websites.creativePortfolios.description",
                icon: Folder,
                image: CoverBusquedas,
                buttonText: "Descubre nuestro portafolio",
                // buttonText: "services.portfolioButton",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "editorial-sites",
                title: "Sitios editoriales",
                // title: "services.websites.editorialSites.title",
                description: "Construimos plataformas para revistas, contenidos y proyectos culturales que necesitan ordenar publicaciones, autores y experiencias de lectura.",
                // description: "services.websites.editorialSites.description",
                icon: Edition,
                image: CoverBusquedas,
                buttonText: "Descubre nuestro portafolio",
                // buttonText: "services.portfolioButton",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "implementation",
                title: "Implementación",
                // title: "services.websites.implementation.title",
                description: "Adaptamos la tecnología a tu proyecto: WordPress, Webflow o desarrollo web.",
                // description: "services.websites.implementation.description",
                icon: Puzzle,
                image: CoverBusquedas,
                buttonText: "Descubre nuestro portafolio",
                // buttonText: "services.portfolioButton",
                iconButton: faPlus,
                link: "/projects"
            }
        ]
    },

    // =======================================================
    // APLICACIONES WEB
    // =======================================================

    {
        id: "web-apps",

        title: "Aplicaciones web",
        // title: "services.webApps.title",
        description: "Para proyectos que necesitan herramientas, plataformas o funcionalidades hechas a medida.",
        // description: "services.webApps.description",

        items: [
            {
                id: "custom-platforms",
                title: "Plataformas a medida",
                // title: "services.webApps.customPlatforms.title",
                description: "Desarrollamos herramientas digitales con funcionalidades específicas para resolver necesidades concretas de tu proyecto.",
                // description: "services.webApps.customPlatforms.description",
                icon: Coding,
                image: CoverBusquedas,
                buttonText: "Descubre nuestro portafolio",
                // buttonText: "services.portfolioButton",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "dashboards",
                title: "Dashboards y gestión",
                // title: "services.webApps.dashboards.title",
                description: "Creamos sistemas para administrar contenidos, productos, usuarios o información de forma clara y ordenada.",
                // description: "services.webApps.dashboards.description",
                icon: Dashboard,
                image: CoverBusquedas,
                buttonText: "Descubre nuestro portafolio",
                // buttonText: "services.portfolioButton",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "special-features",
                title: "Funcionalidades especiales",
                // title: "services.webApps.specialFeatures.title",
                description: "Desarrollamos filtros, buscadores, formularios avanzados, áreas privadas e interacciones personalizadas.",
                // description: "services.webApps.specialFeatures.description",
                icon: Star,
                image: CoverBusquedas,
                buttonText: "Descubre nuestro portafolio",
                // buttonText: "services.portfolioButton",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "integrations",
                title: "Integraciones",
                // title: "services.webApps.integrations.title",
                description: "Conectamos tu plataforma con herramientas externas como formularios, analítica, pagos, agendas o sistemas de gestión.",
                // description: "services.webApps.integrations.description",
                icon: Gear,
                image: CoverBusquedas,
                buttonText: "Descubre nuestro portafolio",
                // buttonText: "services.portfolioButton",
                iconButton: faPlus,
                link: "/projects"
            }
        ]
    },

    // =======================================================
    // E-COMMERCE
    // =======================================================

    {
        id: "ecommerce",

        title: "E-commerce",
        // title: "services.ecommerce.title",
        description: "Para marcas que quieren vender productos online con una experiencia clara y confiable.",
        // description: "services.ecommerce.description",

        items: [
            {
                id: "online-store",
                title: "Tiendas online",
                // title: "services.ecommerce.onlineStore.title",
                description: "Construimos tiendas pensadas para presentar productos con claridad y facilitar una experiencia de compra confiable.",
                // description: "services.ecommerce.onlineStore.description",
                icon: Shoppingcart,
                image: CoverBusquedas,
                buttonText: "Descubre nuestro portafolio",
                // buttonText: "services.portfolioButton",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "catalogues",
                title: "Catálogos digitales",
                // title: "services.ecommerce.catalogues.title",
                description: "Organizamos productos, categorías, fichas e información clave para que tus clientes encuentren lo que necesitan.",
                // description: "services.ecommerce.catalogues.description",
                icon: Catalog,
                image: CoverBusquedas,
                buttonText: "Descubre nuestro portafolio",
                // buttonText: "services.portfolioButton",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "payments",
                title: "Pagos e integraciones",
                // title: "services.ecommerce.payments.title",
                description: "Integramos pasarelas de pago, formularios, sistemas de gestión o herramientas externas según el alcance del proyecto.",
                // description: "services.ecommerce.payments.description",
                icon: Payment,
                image: CoverBusquedas,
                buttonText: "Descubre nuestro portafolio",
                // buttonText: "services.portfolioButton",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "shopping-experience",
                title: "Experiencia de compra",
                // title: "services.ecommerce.shoppingExperience.title",
                description: "Cuidamos el recorrido del usuario para que explorar, elegir y comprar sea claro, simple y seguro.",
                // description: "services.ecommerce.shoppingExperience.description",
                icon: Shoppingbag,
                image: CoverBusquedas,
                buttonText: "Descubre nuestro portafolio",
                // buttonText: "services.portfolioButton",
                iconButton: faPlus,
                link: "/projects"
            }
        ]
    },

    // =======================================================
    // IDENTIDAD Y CONTENIDO VISUAL
    // =======================================================

    {
        id: "visual-identity",

        title: "Identidad y contenido visual",
        // title: "services.visualIdentity.title",
        description: "Para proyectos que necesitan alinear su imagen y preparar materiales visuales que acompañen mejor su presencia digital.",
        // description: "services.visualIdentity.description",

        items: [
            {
                id: "web-content",
                title: "Contenido para web",
                // title: "services.visualIdentity.webContent.title",
                description: "Te ayudamos a ordenar textos, imágenes y materiales clave para que cada sección comunique con claridad.",
                // description: "services.visualIdentity.webContent.description",
                icon: Pen,
                image: CoverBusquedas,
                buttonText: "Descubre nuestro portafolio",
                // buttonText: "services.portfolioButton",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "visual-direction",
                title: "Dirección visual",
                // title: "services.visualIdentity.visualDirection.title",
                description: "Alineamos la estética del sitio con la identidad del proyecto para que todo se vea coherente y cuidado.",
                // description: "services.visualIdentity.visualDirection.description",
                icon: Grid,
                image: CoverBusquedas,
                buttonText: "Descubre nuestro portafolio",
                // buttonText: "services.portfolioButton",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "photo-video",
                title: "Fotografía y video",
                // title: "services.visualIdentity.photoVideo.title",
                description: "Cuando el proyecto lo requiere, articulamos producción visual con equipos especializados para fortalecer tu presencia digital.",
                // description: "services.visualIdentity.photoVideo.description",
                icon: Player,
                image: CoverBusquedas,
                buttonText: "Descubre nuestro portafolio",
                // buttonText: "services.portfolioButton",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "presentation",
                title: "Presentaciones y materiales",
                // title: "services.visualIdentity.presentation.title",
                description: "Preparamos piezas complementarias para explicar, lanzar o presentar mejor tu proyecto.",
                // description: "services.visualIdentity.presentation.description",
                icon: Presentation,
                image: CoverBusquedas,
                buttonText: "Descubre nuestro portafolio",
                // buttonText: "services.portfolioButton",
                iconButton: faPlus,
                link: "/projects"
            }
        ]
    }
];