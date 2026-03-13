import CoverCosmo from '../assets/img/ProjectHeaders/header-cosmonauta.jpg'
import CoverFlora from '../assets/img/ProjectHeaders/flora-nueva.jpg'
import CoverFlotilla from '../assets/img/ProjectHeaders/flotilla.jpg'
import CoverLibreras from '../assets/img/ProjectHeaders/libreras.jpg'
import { galleryCosmo } from './galleryContent'

export const projectsList = [
    {
        id: 'libreria-cosmonauta',
        cover: CoverCosmo,
        name: 'projects.projectName1',
        preview: 'projects.projectPreview1',
        summary: 'projects.projectSummary1',
        need: 'projects.projectNeed1',
        process: 'projects.projectProcess1.description',
        phase1: 'projects.projectProcess1.phase1',
        phase2: 'projects.projectProcess1.phase2',
        phase3: 'projects.projectProcess1.phase3',
        phase4: 'projects.projectProcess1.phase4',
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
        tech: ['React', 'Javascript', 'Tailwind', 'FastAPI', 'Python', 'PostgreSQL']
    },
    {
        id: 'flora-nueva',
        cover: CoverFlora,
        name: 'projects.projectName2',
        preview: 'projects.projectPreview2',
        summary: 'projects.projectSummary2',
        need: 'projects.projectNeed2',
        process: 'projects.projectProcess2.description',
        phase1: 'projects.projectProcess2.phase1',
        phase2: 'projects.projectProcess2.phase2',
        phase3: 'projects.projectProcess2.phase3',
        phase4: 'projects.projectProcess2.phase4',
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
        tech: ['Wordpress', 'Elementor', 'Woocommerce', 'CSS', 'Forminator', 'Yoast SEO']
    },
    {
        id: 'flotilla-amazonica',
        cover: CoverFlotilla,
        name: 'projects.projectName3',
        preview: 'projects.projectPreview3',
        summary: 'projects.projectSummary3',
        need: 'projects.projectNeed3',
        process: 'projects.projectProcess3.description',
        phase1: 'projects.projectProcess3.phase1',
        phase2: 'projects.projectProcess3.phase2',
        phase3: 'projects.projectProcess3.phase3',
        phase4: 'projects.projectProcess3.phase4',
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
        tech: ['Wordpress', 'Elementor', 'CSS', 'Flickr API', 'Yoast SEO']
    },
    {
        id: 'las-libreras-leen',
        cover: CoverLibreras,
        name: 'projects.projectName4',
        preview: 'projects.projectPreview4',
        summary: 'projects.projectSummary4',
        need: 'projects.projectNeed4',
        process: 'projects.projectProcess4.description',
        phase1: 'projects.projectProcess4.phase1',
        phase2: 'projects.projectProcess4.phase2',
        phase3: 'projects.projectProcess4.phase3',
        phase4: 'projects.projectProcess4.phase4',
        solution: 'projects.projectSolution4',
        gallery: galleryCosmo,
        credits: [
            {
                name: 'David Pinto',
                position: 'projects.credits.post6'
            },
        ],
        tech: ['Wordpress', 'CSS', 'MailChimp', 'Yoast SEO']
    }
];