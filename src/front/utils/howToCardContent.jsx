import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faWandMagic } from "@fortawesome/free-solid-svg-icons";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { faHammer } from "@fortawesome/free-solid-svg-icons";

export const howToCardContent = [
    {
        id: 'analisis',
        icon: <FontAwesomeIcon icon={faSearchengin} size="5x" />,
        title: 'projects.projectProcess1.phase1Title',
        description: 'projects.projectProcess1.phase1'
    },
    {
        id: 'propuesta-inicial',
        icon: <FontAwesomeIcon icon={faWandMagic} size="5x" />,
        title: 'projects.projectProcess1.phase2Title',
        description: 'projects.projectProcess1.phase2'
    },
    {
        id: 'acabado-final',
        icon: <FontAwesomeIcon icon={faWandMagicSparkles} size="5x" />,
        title: 'projects.projectProcess1.phase3Title',
        description: 'projects.projectProcess1.phase3'
    },
    {
        id: 'desarrollo',
        icon: <FontAwesomeIcon icon={faHammer} size="5x" />,
        title: 'projects.projectProcess1.phase4Title',
        description: 'projects.projectProcess1.phase4'
    }
];