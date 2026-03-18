import CoverCosmo from '../assets/img/ProjectHeaders/header-cosmonauta.jpg'
import CoverFlora from '../assets/img/ProjectHeaders/flora-nueva.jpg'
import CoverFlotilla from '../assets/img/ProjectHeaders/flotilla.jpg'
import CoverLibreras from '../assets/img/ProjectHeaders/libreras.jpg'
import { galleryCosmo } from './galleryContent'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFirstdraft, faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faWandMagic } from "@fortawesome/free-solid-svg-icons";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSitemap } from '@fortawesome/free-solid-svg-icons'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faLeanpub } from '@fortawesome/free-brands-svg-icons/faLeanpub'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faArrowsSplitUpAndLeft } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export const projectsList = [
    {
        id: 'libreria-cosmonauta',
        cover: CoverCosmo,
        name: 'projects.projectName1',
        preview: 'projects.projectPreview1',
        summary: 'projects.projectSummary1',
        need: 'projects.projectNeed1',
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
        id: 'flora-nueva',
        cover: CoverFlora,
        name: 'projects.projectName2',
        preview: 'projects.projectPreview2',
        summary: 'projects.projectSummary2',
        need: 'projects.projectNeed2',
        process: 'projects.projectProcess2.description',
        phase: [
            {
                icon: <FontAwesomeIcon icon={faLeanpub} size="5x" />,
                title: 'projects.projectProcess2.phase1Title',
                description: 'projects.projectProcess2.phase1'
            },
            {
                icon: <FontAwesomeIcon icon={faSitemap} size="5x" />,
                title: 'projects.projectProcess2.phase2Title',
                description: 'projects.projectProcess2.phase2'
            },
            {
                icon: <FontAwesomeIcon icon={faWandMagicSparkles} size="5x" />,
                title: 'projects.projectProcess2.phase3Title',
                description: 'projects.projectProcess2.phase3'
            },
            {
                icon: <FontAwesomeIcon icon={faHammer} size="5x" />,
                title: 'projects.projectProcess2.phase4Title',
                description: 'projects.projectProcess2.phase4'
            }
        ],
        solution: 'projects.projectSolution2',
        gallery: galleryCosmo,
        credits: [
            {
                name: 'David Pinto',
                position: 'projects.credits.post4'
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
                name: 'Santiago Montoya',
                position: 'projects.credits.post5'
            },
        ],
        tech: ['Figma', 'Wordpress', 'Elementor', 'Woocommerce', 'CSS', 'Forminator', 'Yoast SEO'],
        collab: 'projects.collab'
    },
    {
        id: 'flotilla-amazonica',
        cover: CoverFlotilla,
        name: 'projects.projectName3',
        preview: 'projects.projectPreview3',
        summary: 'projects.projectSummary3',
        need: 'projects.projectNeed3',
        process: 'projects.projectProcess3.description',
        phase: [
            {
                icon: <FontAwesomeIcon icon={faLanguage} size="5x" />,
                title: 'projects.projectProcess3.phase1Title',
                description: 'projects.projectProcess3.phase1'
            },
            {
                icon: <FontAwesomeIcon icon={faLock} size="5x" />,
                title: 'projects.projectProcess3.phase2Title',
                description: 'projects.projectProcess3.phase2'
            },
            {
                icon: <FontAwesomeIcon icon={faWandMagicSparkles} size="5x" />,
                title: 'projects.projectProcess3.phase3Title',
                description: 'projects.projectProcess3.phase3'
            },
            {
                icon: <FontAwesomeIcon icon={faHammer} size="5x" />,
                title: 'projects.projectProcess3.phase4Title',
                description: 'projects.projectProcess3.phase4'
            }
        ],
        solution: 'projects.projectSolution3',
        gallery: galleryCosmo,
        credits: [
            {
                name: 'David Pinto',
                position: 'projects.credits.post4'
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
                name: 'Santiago Montoya',
                position: 'projects.credits.post5'
            },
        ],
        tech: ['Figma', 'Wordpress', 'Elementor', 'CSS', 'Flickr API', 'Yoast SEO'],
        collab: 'projects.collab'
    },
    {
        id: 'las-libreras-leen',
        cover: CoverLibreras,
        name: 'projects.projectName4',
        preview: 'projects.projectPreview4',
        summary: 'projects.projectSummary4',
        need: 'projects.projectNeed4',
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
        gallery: galleryCosmo,
        credits: [
            {
                name: 'David Pinto',
                position: 'projects.credits.post6'
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
        id: 'asocove',
        cover: CoverLibreras,
        name: 'projects.projectName5',
        preview: 'projects.projectPreview5',
        summary: 'projects.projectSummary5',
        need: 'projects.projectNeed5',
        process: 'projects.projectProcess5.description',
        phase: [
            {
                icon: <FontAwesomeIcon icon={faSitemap} size="5x" />,
                title: 'projects.projectProcess5.phase1Title',
                description: 'projects.projectProcess5.phase1'
            },
            {
                icon: <FontAwesomeIcon icon={faWandMagicSparkles} size="5x" />,
                title: 'projects.projectProcess5.phase2Title',
                description: 'projects.projectProcess5.phase2'
            },
            {
                icon: <FontAwesomeIcon icon={faHammer} size="5x" />,
                title: 'projects.projectProcess5.phase3Title',
                description: 'projects.projectProcess5.phase3'
            },
            {
                icon: <FontAwesomeIcon icon={faUser} size="5x" />,
                title: 'projects.projectProcess5.phase4Title',
                description: 'projects.projectProcess5.phase4'
            }
        ],
        solution: 'projects.projectSolution5',
        gallery: galleryCosmo,
        credits: [
            {
                name: 'David Pinto',
                position: 'projects.credits.post6'
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
        tech: ['Figma', 'WixStudio', 'CSS'],
        collab: 'projects.collab'
    },
    {
        id: 'busquedas',
        cover: CoverLibreras,
        name: 'projects.projectName6',
        preview: 'projects.projectPreview6',
        summary: 'projects.projectSummary6',
        need: 'projects.projectNeed6',
        process: 'projects.projectProcess6.description',
        phase: [
            {
                icon: <FontAwesomeIcon icon={faSitemap} size="5x" />,
                title: 'projects.projectProcess6.phase1Title',
                description: 'projects.projectProcess6.phase1'
            },
            {
                icon: <FontAwesomeIcon icon={faWandMagicSparkles} size="5x" />,
                title: 'projects.projectProcess6.phase2Title',
                description: 'projects.projectProcess6.phase2'
            },
            {
                icon: <FontAwesomeIcon icon={faHammer} size="5x" />,
                title: 'projects.projectProcess6.phase3Title',
                description: 'projects.projectProcess6.phase3'
            },
            {
                icon: <FontAwesomeIcon icon={faUser} size="5x" />,
                title: 'projects.projectProcess6.phase4Title',
                description: 'projects.projectProcess6.phase4'
            }
        ],
        solution: 'projects.projectSolution6',
        gallery: galleryCosmo,
        credits: [
            {
                name: 'David Pinto',
                position: 'projects.credits.post6'
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
        cover: CoverLibreras,
        name: 'projects.projectName7',
        preview: 'projects.projectPreview7',
        summary: 'projects.projectSummary7',
        need: 'projects.projectNeed7',
        process: 'projects.projectProcess7.description',
        phase: [
            {
                icon: <FontAwesomeIcon icon={faSitemap} size="5x" />,
                title: 'projects.projectProcess7.phase1Title',
                description: 'projects.projectProcess7.phase1'
            },
            {
                icon: <FontAwesomeIcon icon={faWandMagicSparkles} size="5x" />,
                title: 'projects.projectProcess7.phase2Title',
                description: 'projects.projectProcess7.phase2'
            },
            {
                icon: <FontAwesomeIcon icon={faHammer} size="5x" />,
                title: 'projects.projectProcess7.phase3Title',
                description: 'projects.projectProcess7.phase3'
            },
            {
                icon: <FontAwesomeIcon icon={faUser} size="5x" />,
                title: 'projects.projectProcess7.phase4Title',
                description: 'projects.projectProcess7.phase4'
            }
        ],
        solution: 'projects.projectSolution7',
        gallery: galleryCosmo,
        credits: [
            {
                name: 'David Pinto',
                position: 'projects.credits.post6'
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
    }
];