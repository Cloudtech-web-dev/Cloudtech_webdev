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

import CoverBrandSites from "../assets/Icons/Services/Websites/Images/cover-brand-sites.jpg";
import CoverCreativePortfolios from "../assets/Icons/Services/Websites/Images/cover-creative-portfolios.jpg";
import CoverEditorialSites from "../assets/Icons/Services/Websites/Images/cover-editorial-sites.jpg";
import CoverImplementation from "../assets/Icons/Services/Websites/Images/cover-implementation.jpg";
import CoverCustomPlatforms from "../assets/Icons/Services/Apps/Images/cover-custom-platforms.jpg";
import CoverDashboards from "../assets/Icons/Services/Apps/Images/cover-dashboards-management.jpg";
import CoverSpecialFeatures from "../assets/Icons/Services/Apps/Images/cover-special-features.jpg";
import CoverIntegrations from "../assets/Icons/Services/Apps/Images/cover-integrations.jpg";
import CoverOnlineStore from "../assets/Icons/Services/Ecommerce/Images/cover-online-stores.jpg";
import CoverCatalogues from "../assets/Icons/Services/Ecommerce/Images/cover-digital-catalogues.jpg";
import CoverPayments from "../assets/Icons/Services/Ecommerce/Images/cover-payments-integrations.jpg";
import CoverShoppingExperience from "../assets/Icons/Services/Ecommerce/Images/cover-shopping-experience.jpg";
import CoverWebContent from "../assets/Icons/Services/Branding/Images/cover-web-content.jpg";
import CoverVisualDirection from "../assets/Icons/Services/Branding/Images/cover-visual-direction.jpg";
import CoverPhotoVideo from "../assets/Icons/Services/Branding/Images/cover-photography-video.jpg";
import CoverPresentation from "../assets/Icons/Services/Branding/Images/cover-presentations-materials.jpg";


export const servicesList = [

    // =======================================================
    // SITIOS WEB
    // =======================================================

    {
        id: "websites",
        // title: "Sitios web",
        title: "services.servicesList.websites.title",
        // description: "Para marcas, creativos y proyectos que necesitan mostrar mejor su trabajo, sus productos o sus servicios.",
        description: "services.servicesList.websites.description",

        items: [
            {
                id: "brand-sites",
                // title: "Sitios para marcas",
                title: "services.servicesList.websites.brandSites.title",
                // description: "Creamos sitios claros, atractivos y fáciles de usar para presentar tu proyecto, tus servicios o tu marca con identidad.",
                description: "services.servicesList.websites.brandSites.description",
                icon: Fingerprint,
                image: CoverBrandSites,
                // buttonText: "Descubre nuestro portafolio",
                buttonText: "services.servicesList.websites.brandSites.button",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "creative-portfolios",
                // title: "Portafolios creativos",
                title: "services.servicesList.websites.creativePortfolios.title",
                // description: "Diseñamos webs para mostrar trabajo visual, audiovisual o editorial de forma clara, profesional y fácil de recorrer.",
                description: "services.servicesList.websites.creativePortfolios.description",
                icon: Folder,
                image: CoverCreativePortfolios,
                // buttonText: "Descubre nuestro portafolio",
                buttonText: "services.servicesList.websites.creativePortfolios.button",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "editorial-sites",
                // title: "Sitios editoriales",
                title: "services.servicesList.websites.editorialSites.title",
                // description: "Construimos plataformas para revistas, contenidos y proyectos culturales que necesitan ordenar publicaciones, autores y experiencias de lectura.",
                description: "services.servicesList.websites.editorialSites.description",
                icon: Edition,
                image: CoverEditorialSites,
                // buttonText: "Descubre nuestro portafolio",
                buttonText: "services.servicesList.websites.editorialSites.button",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "implementation",
                // title: "Implementación",
                title: "services.servicesList.websites.implementation.title",
                // description: "Adaptamos la tecnología a tu proyecto: WordPress, Webflow o desarrollo web.",
                description: "services.servicesList.websites.implementation.description",
                icon: Puzzle,
                image: CoverImplementation,
                // buttonText: "Descubre nuestro portafolio",
                buttonText: "services.servicesList.websites.implementation.button",
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

        // title: "Aplicaciones web",
        title: "services.servicesList.webApps.title",
        // description: "Para proyectos que necesitan herramientas, plataformas o funcionalidades hechas a medida.",
        description: "services.servicesList.webApps.description",

        items: [
            {
                id: "custom-platforms",
                // title: "Plataformas a medida",
                title: "services.servicesList.webApps.customPlatforms.title",
                // description: "Desarrollamos herramientas digitales con funcionalidades específicas para resolver necesidades concretas de tu proyecto.",
                description: "services.servicesList.webApps.customPlatforms.description",
                icon: Coding,
                image: CoverCustomPlatforms,
                // buttonText: "Descubre nuestro portafolio",
                buttonText: "services.servicesList.webApps.customPlatforms.button",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "dashboards",
                // title: "Dashboards y gestión",
                title: "services.servicesList.webApps.dashboards.title",
                // description: "Creamos sistemas para administrar contenidos, productos, usuarios o información de forma clara y ordenada.",
                description: "services.servicesList.webApps.dashboards.description",
                icon: Dashboard,
                image: CoverDashboards,
                // buttonText: "Descubre nuestro portafolio",
                buttonText: "services.servicesList.webApps.dashboards.button",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "special-features",
                // title: "Funcionalidades especiales",
                title: "services.servicesList.webApps.specialFeatures.title",
                // description: "Desarrollamos filtros, buscadores, formularios avanzados, áreas privadas e interacciones personalizadas.",
                description: "services.servicesList.webApps.specialFeatures.description",
                icon: Star,
                image: CoverSpecialFeatures,
                // buttonText: "Descubre nuestro portafolio",
                buttonText: "services.servicesList.webApps.specialFeatures.button",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "integrations",
                // title: "Integraciones",
                title: "services.servicesList.webApps.integrations.title",
                // description: "Conectamos tu plataforma con herramientas externas como formularios, analítica, pagos, agendas o sistemas de gestión.",
                description: "services.servicesList.webApps.integrations.description",
                icon: Gear,
                image: CoverIntegrations,
                // buttonText: "Descubre nuestro portafolio",
                buttonText: "services.servicesList.webApps.integrations.button",
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

        // title: "E-commerce",
        title: "services.servicesList.ecommerce.title",
        // description: "Para marcas que quieren vender productos online con una experiencia clara y confiable.",
        description: "services.servicesList.ecommerce.description",

        items: [
            {
                id: "online-store",
                // title: "Tiendas online",
                title: "services.servicesList.ecommerce.onlineStore.title",
                // description: "Construimos tiendas pensadas para presentar productos con claridad y facilitar una experiencia de compra confiable.",
                description: "services.servicesList.ecommerce.onlineStore.description",
                icon: Shoppingcart,
                image: CoverOnlineStore,
                // buttonText: "Descubre nuestro portafolio",
                buttonText: "services.servicesList.ecommerce.onlineStore.button",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "catalogues",
                // title: "Catálogos digitales",
                title: "services.servicesList.ecommerce.catalogues.title",
                // description: "Organizamos productos, categorías, fichas e información clave para que tus clientes encuentren lo que necesitan.",
                description: "services.servicesList.ecommerce.catalogues.description",
                icon: Catalog,
                image: CoverCatalogues,
                // buttonText: "Descubre nuestro portafolio",
                buttonText: "services.servicesList.ecommerce.catalogues.button",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "payments",
                // title: "Pagos e integraciones",
                title: "services.servicesList.ecommerce.payments.title",
                // description: "Integramos pasarelas de pago, formularios, sistemas de gestión o herramientas externas según el alcance del proyecto.",
                description: "services.servicesList.ecommerce.payments.description",
                icon: Payment,
                image: CoverPayments,
                // buttonText: "Descubre nuestro portafolio",
                buttonText: "services.servicesList.ecommerce.payments.button",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "shopping-experience",
                // title: "Experiencia de compra",
                title: "services.servicesList.ecommerce.shoppingExperience.title",
                // description: "Cuidamos el recorrido del usuario para que explorar, elegir y comprar sea claro, simple y seguro.",
                description: "services.servicesList.ecommerce.shoppingExperience.description",
                icon: Shoppingbag,
                image: CoverShoppingExperience,
                // buttonText: "Descubre nuestro portafolio",
                buttonText: "services.servicesList.ecommerce.shoppingExperience.button",
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

        // title: "Identidad y contenido visual",
        title: "services.servicesList.visualIdentity.title",
        // description: "Para proyectos que necesitan alinear su imagen y preparar materiales visuales que acompañen mejor su presencia digital.",
        description: "services.servicesList.visualIdentity.description",

        items: [
            {
                id: "web-content",
                // title: "Contenido para web",
                title: "services.servicesList.visualIdentity.webContent.title",
                // description: "Te ayudamos a ordenar textos, imágenes y materiales clave para que cada sección comunique con claridad.",
                description: "services.servicesList.visualIdentity.webContent.description",
                icon: Pen,
                image: CoverWebContent,
                // buttonText: "Descubre nuestro portafolio",
                buttonText: "services.servicesList.visualIdentity.webContent.button",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "visual-direction",
                // title: "Dirección visual",
                title: "services.servicesList.visualIdentity.visualDirection.title",
                // description: "Alineamos la estética del sitio con la identidad del proyecto para que todo se vea coherente y cuidado.",
                description: "services.servicesList.visualIdentity.visualDirection.description",
                icon: Grid,
                image: CoverVisualDirection,
                // buttonText: "Descubre nuestro portafolio",
                buttonText: "services.servicesList.visualIdentity.visualDirection.button",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "photo-video",
                // title: "Fotografía y video",
                title: "services.servicesList.visualIdentity.photoVideo.title",
                // description: "Cuando el proyecto lo requiere, articulamos producción visual con equipos especializados para fortalecer tu presencia digital.",
                description: "services.servicesList.visualIdentity.photoVideo.description",
                icon: Player,
                image: CoverPhotoVideo,
                // buttonText: "Descubre nuestro portafolio",
                buttonText: "services.servicesList.visualIdentity.photoVideo.button",
                iconButton: faPlus,
                link: "/projects"
            },
            {
                id: "presentation",
                // title: "Presentaciones y materiales",
                title: "services.servicesList.visualIdentity.presentation.title",
                // description: "Preparamos piezas complementarias para explicar, lanzar o presentar mejor tu proyecto.",
                description: "services.servicesList.visualIdentity.presentation.description",
                icon: Presentation,
                image: CoverPresentation,
                // buttonText: "Descubre nuestro portafolio",
                buttonText: "services.servicesList.visualIdentity.presentation.button",
                iconButton: faPlus,
                link: "/projects"
            }
        ]
    }
];