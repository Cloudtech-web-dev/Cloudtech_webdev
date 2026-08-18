import CoverCosmo from '../assets/img/ProjectHeaders/Cosmocover.jpg'
import LogoCosmo from '../assets/img/Portfolio/Cosmonauta/logo.svg'
import CoverFlora from '../assets/img/ProjectHeaders/floracover.jpg'
import CoverFlotilla from '../assets/img/ProjectHeaders/flotillacover.jpg'
import CoverLibreras from '../assets/img/ProjectHeaders/librerascover.jpg'
import LogoLibreras from '../assets/img/Portfolio/Libreras/logo.png'
import CoverAsocove from '../assets/img/ProjectHeaders/asocovecover.jpg'
import CoverBusquedas from '../assets/img/ProjectHeaders/busquedascover.jpg'
import LogoBusquedas from '../assets/img/Portfolio/Busquedas/logo.png'
import CoverMura from '../assets/img/ProjectHeaders/muracover.jpg'
import LogoMura from '../assets/img/Portfolio/Mura/logo.png'
import CoverPiedraNegra from '../assets/img/ProjectHeaders/piedranegraCover.jpg'
import LogoPiedraNegra from '../assets/img/Portfolio/PiedraNegra/logo.png'
import LogoJPPortafolio from '../assets/img/Portfolio/JPPortfolio/logo.svg'
import CoverJPPortafolio from '../assets/img/ProjectHeaders/jpportafoliocover.jpg'

import { galleryCosmo, galleryFlotilla, galleryFlora, galleryLibreras, galleryAsocove, galleryBusquedas, galleryMura, galleryPiedra, galleryJPPortafolio } from './galleryContent'
import { needsCover } from './needsCoverGallery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faWandMagicSparkles, faHammer, faUser, faSitemap,
    faLanguage, faLock, faCreditCard, faArrowsSplitUpAndLeft,
    faCode, faSignsPost, faMicroscope, faRobot,
    faFingerprint, faFlask
} from "@fortawesome/free-solid-svg-icons";
import { faLeanpub, faWix } from "@fortawesome/free-brands-svg-icons";


export const projectsList = [
    {
        id: 'libreria-cosmonauta',
        logo: LogoCosmo,
        cover: CoverCosmo,
        name: 'projects.projectName1',
        preview: 'projects.projectPreview1',
        summary: 'projects.projectSummary1',
        need: 'projects.projectNeed1',
        needsArt: needsCover[0],
        process: 'projects.projectProcess1.description',
        phase: [
            {
                icon: <FontAwesomeIcon icon={faArrowsSplitUpAndLeft} size="5x" />,
                title: 'projects.projectProcess1.phase1Title',
                description: 'projects.projectProcess1.phase1'
            },
            {
                icon: <FontAwesomeIcon icon={faWandMagicSparkles} size="5x" />,
                title: 'projects.projectProcess1.phase2Title',
                description: 'projects.projectProcess1.phase2'
            },
            {
                icon: <FontAwesomeIcon icon={faCode} size="5x" />,
                title: 'projects.projectProcess1.phase3Title',
                description: 'projects.projectProcess1.phase3'
            },
            {
                icon: <FontAwesomeIcon icon={faCreditCard} size="5x" />,
                title: 'projects.projectProcess1.phase4Title',
                description: 'projects.projectProcess1.phase4'
            }
        ],
        solution: 'projects.projectSolution1',
        gallery: galleryCosmo,
        credits: [
            {
                name: 'David Pinto',
                position: 'projects.credits.post4'
            },
            {
                name: 'Marcelo Placencia',
                position: 'projects.credits.post3'
            },
            {
                name: 'Diego Figueroa',
                position: 'projects.credits.post2'
            },
            {
                name: 'José Miguel Pinto',
                position: 'projects.credits.post1'
            },
            {
                name: 'Santiago Montoya',
                position: 'projects.credits.post3'
            },
            {
                name: 'Santiago Montoya',
                position: 'projects.credits.post5'
            },
        ],
        tech: ['Figma', 'React', 'Javascript', 'Tailwind', 'FastAPI', 'Python', 'PostgreSQL']
    },
    {
        id: 'piedra-negra',
        logo: LogoPiedraNegra,
        cover: CoverPiedraNegra,
        name: 'projects.projectName8',
        preview: 'projects.projectPreview8',
        summary: 'projects.projectSummary8',
        need: 'projects.projectNeed8',
        needsArt: needsCover[1],
        process: 'projects.projectProcess8.description',
        phase: [
            {
                icon: <FontAwesomeIcon icon={faArrowsSplitUpAndLeft} size="5x" />,
                title: 'projects.projectProcess8.phase1Title',
                description: 'projects.projectProcess8.phase1'
            },
            {
                icon: <FontAwesomeIcon icon={faWandMagicSparkles} size="5x" />,
                title: 'projects.projectProcess8.phase2Title',
                description: 'projects.projectProcess8.phase2'
            },
            {
                icon: <FontAwesomeIcon icon={faCode} size="5x" />,
                title: 'projects.projectProcess8.phase3Title',
                description: 'projects.projectProcess8.phase3'
            },
            {
                icon: <FontAwesomeIcon icon={faCreditCard} size="5x" />,
                title: 'projects.projectProcess8.phase4Title',
                description: 'projects.projectProcess8.phase4'
            }
        ],
        solution: 'projects.projectSolution8',
        gallery: galleryPiedra,
        credits: [
            {
                name: 'David Pinto',
                position: 'projects.credits.post4'
            },
            {
                name: 'Daniela Torres',
                position: 'projects.credits.post8'
            },
            {
                name: 'projects.credits.team',
                position: 'projects.credits.post9'
            },
            // {
            //     name: 'José Miguel Pinto',
            //     position: 'projects.credits.post1'
            // },
            // {
            //     name: 'Santiago Montoya',
            //     position: 'projects.credits.post3'
            // },
            // {
            //     name: 'Santiago Montoya',
            //     position: 'projects.credits.post5'
            // },
        ],
        tech: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Affinity', 'Canva']
    },    
    {
        id: 'busquedas',
        logo: LogoBusquedas,
        cover: CoverBusquedas,
        name: 'projects.projectName6',
        preview: 'projects.projectPreview6',
        summary: 'projects.projectSummary6',
        need: 'projects.projectNeed6',
        needsArt: needsCover[2],
        process: 'projects.projectProcess6.description',
        phase: [
            {
                icon: <FontAwesomeIcon icon={faFingerprint} size="5x" />,
                title: 'projects.projectProcess6.phase1Title',
                description: 'projects.projectProcess6.phase1'
            },
            {
                icon: <FontAwesomeIcon icon={faLanguage} size="5x" />,
                title: 'projects.projectProcess6.phase2Title',
                description: 'projects.projectProcess6.phase2'
            },
            {
                icon: <FontAwesomeIcon icon={faWandMagicSparkles} size="5x" />,
                title: 'projects.projectProcess6.phase3Title',
                description: 'projects.projectProcess6.phase3'
            },
            {
                icon: <FontAwesomeIcon icon={faRobot} size="5x" />,
                title: 'projects.projectProcess6.phase4Title',
                description: 'projects.projectProcess6.phase4'
            }
        ],
        solution: 'projects.projectSolution6',
        gallery: galleryBusquedas,
        credits: [
            {
                name: 'David Pinto',
                position: 'projects.credits.post4'
            },
            {
                name: 'Gabriel Pinto',
                position: 'projects.credits.post7'
            },
            {
                name: 'José Miguel Pinto',
                position: 'projects.credits.post6'
            },
            {
                name: 'Santiago Montoya',
                position: 'projects.credits.post6'
            },
            {
                name: 'David Pinto',
                position: 'projects.credits.post5'
            },
        ],
        tech: ['Figma', 'Wordpress', 'CSS', 'MailChimp', 'Yoast SEO']
    },
    {
        id: 'mura',
        logo: LogoMura,
        cover: CoverMura,
        name: 'projects.projectName7',
        preview: 'projects.projectPreview7',
        summary: 'projects.projectSummary7',
        need: 'projects.projectNeed7',
        needsArt: needsCover[3],
        process: 'projects.projectProcess7.description',
        phase: [
            {
                icon: <FontAwesomeIcon icon={faFingerprint} size="5x" />,
                title: 'projects.projectProcess7.phase1Title',
                description: 'projects.projectProcess7.phase1'
            },
            {
                icon: <FontAwesomeIcon icon={faFlask} size="5x" />,
                title: 'projects.projectProcess7.phase2Title',
                description: 'projects.projectProcess7.phase2'
            },
            {
                icon: <FontAwesomeIcon icon={faWandMagicSparkles} size="5x" />,
                title: 'projects.projectProcess7.phase3Title',
                description: 'projects.projectProcess7.phase3'
            },
            {
                icon: <FontAwesomeIcon icon={faHammer} size="5x" />,
                title: 'projects.projectProcess7.phase4Title',
                description: 'projects.projectProcess7.phase4'
            }
        ],
        solution: 'projects.projectSolution7',
        gallery: galleryMura,
        credits: [
            {
                name: 'David Pinto',
                position: 'projects.credits.post4'
            },
            {
                name: 'Gabriel Pinto',
                position: 'projects.credits.post7'
            },
            {
                name: 'José Miguel Pinto',
                position: 'projects.credits.post6'
            },
            {
                name: 'Santiago Montoya',
                position: 'projects.credits.post6'
            },
            {
                name: 'David Pinto',
                position: 'projects.credits.post5'
            },
        ],
        tech: ['Figma', 'Wordpress', 'CSS', 'MailChimp', 'Yoast SEO']
    },
    {
        id: 'jpportafolio',
        logo: LogoJPPortafolio,
        cover: CoverJPPortafolio,
        name: 'projects.projectName9',
        preview: 'projects.projectPreview9',
        summary: 'projects.projectSummary9',
        need: 'projects.projectNeed9',
        needsArt: needsCover[4],
        process: 'projects.projectProcess9.description',
        phase: [
            {
                icon: <FontAwesomeIcon icon={faFingerprint} size="5x" />,
                title: 'projects.projectProcess9.phase1Title',
                description: 'projects.projectProcess9.phase1'
            },
            {
                icon: <FontAwesomeIcon icon={faLanguage} size="5x" />,
                title: 'projects.projectProcess9.phase2Title',
                description: 'projects.projectProcess9.phase2'
            },
            {
                icon: <FontAwesomeIcon icon={faWandMagicSparkles} size="5x" />,
                title: 'projects.projectProcess9.phase3Title',
                description: 'projects.projectProcess9.phase3'
            },
            {
                icon: <FontAwesomeIcon icon={faRobot} size="5x" />,
                title: 'projects.projectProcess9.phase4Title',
                description: 'projects.projectProcess9.phase4'
            }
        ],
        solution: 'projects.projectSolution9',
        gallery: galleryJPPortafolio,
        credits: [
            {
                name: 'David Pinto',
                position: 'projects.credits.post4'
            },
            {
                name: 'Santiago Montoya',
                position: 'projects.credits.post5'
            },
            {
                name: 'Marcelo Placencia',
                position: 'projects.credits.post6'
            },
            {
                name: 'Santiago Montoya',
                position: 'projects.credits.post6'
            },
            {
                name: 'Marcelo Placencia',
                position: 'projects.credits.post10'
            },
            {
                name: 'Santiago Montoya',
                position: 'projects.credits.post10'
            },
        ],
        tech: ['Figma', 'Astro', 'Astro i18n', 'Javascript', 'Tailwind', 'Sanity']
    },
    {
        id: 'las-libreras-leen',
        logo: LogoLibreras,
        cover: CoverLibreras,
        name: 'projects.projectName4',
        preview: 'projects.projectPreview4',
        summary: 'projects.projectSummary4',
        need: 'projects.projectNeed4',
        needsArt: needsCover[5],
        process: 'projects.projectProcess4.description',
        phase: [
            {
                icon: <FontAwesomeIcon icon={faSitemap} size="5x" />,
                title: 'projects.projectProcess4.phase1Title',
                description: 'projects.projectProcess4.phase1'
            },
            {
                icon: <FontAwesomeIcon icon={faWandMagicSparkles} size="5x" />,
                title: 'projects.projectProcess4.phase2Title',
                description: 'projects.projectProcess4.phase2'
            },
            {
                icon: <FontAwesomeIcon icon={faHammer} size="5x" />,
                title: 'projects.projectProcess4.phase3Title',
                description: 'projects.projectProcess4.phase3'
            },
            {
                icon: <FontAwesomeIcon icon={faUser} size="5x" />,
                title: 'projects.projectProcess4.phase4Title',
                description: 'projects.projectProcess4.phase4'
            }
        ],
        solution: 'projects.projectSolution4',
        gallery: galleryLibreras,
        credits: [
            {
                name: 'David Pinto',
                position: 'projects.credits.post4'
            },
            {
                name: 'Gabriel Pinto',
                position: 'projects.credits.post7'
            },
            {
                name: 'José Miguel Pinto',
                position: 'projects.credits.post6'
            },
            {
                name: 'Santiago Montoya',
                position: 'projects.credits.post6'
            },
            {
                name: 'David Pinto',
                position: 'projects.credits.post5'
            },
        ],
        tech: ['Figma', 'Wordpress', 'CSS', 'MailChimp', 'Yoast SEO']
    },
    // {
    //     id: 'asocove',
    //     cover: CoverAsocove,
    //     name: 'projects.projectName5',
    //     preview: 'projects.projectPreview5',
    //     summary: 'projects.projectSummary5',
    //     need: 'projects.projectNeed5',
    //     needsArt: needsCover[4],
    //     process: 'projects.projectProcess5.description',
    //     phase: [
    //         {
    //             icon: <FontAwesomeIcon icon={faSignsPost} size="5x" />,
    //             title: 'projects.projectProcess5.phase1Title',
    //             description: 'projects.projectProcess5.phase1'
    //         },
    //         {
    //             icon: <FontAwesomeIcon icon={faWandMagicSparkles} size="5x" />,
    //             title: 'projects.projectProcess5.phase2Title',
    //             description: 'projects.projectProcess5.phase2'
    //         },
    //         {
    //             icon: <FontAwesomeIcon icon={faWix} size="5x" />,
    //             title: 'projects.projectProcess5.phase3Title',
    //             description: 'projects.projectProcess5.phase3'
    //         },
    //         {
    //             icon: <FontAwesomeIcon icon={faMicroscope} size="5x" />,
    //             title: 'projects.projectProcess5.phase4Title',
    //             description: 'projects.projectProcess5.phase4'
    //         }
    //     ],
    //     solution: 'projects.projectSolution5',
    //     gallery: galleryAsocove,
    //     credits: [
    //         {
    //             name: 'David Pinto',
    //             position: 'projects.credits.post4'
    //         },
    //         {
    //             name: 'José Miguel Pinto',
    //             position: 'projects.credits.post6'
    //         },
    //         {
    //             name: 'Santiago Montoya',
    //             position: 'projects.credits.post6'
    //         },
    //         {
    //             name: 'Santiago Montoya',
    //             position: 'projects.credits.post5'
    //         },
    //     ],
    //     tech: ['Figma', 'WixStudio', 'CSS', 'Wix Forms'],
    //     collab: 'projects.collab'
    // },


];