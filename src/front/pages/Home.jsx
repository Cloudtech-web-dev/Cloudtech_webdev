import { SEO } from "../utils/SEO.jsx";

import { PageHeader } from "../components/PageHeader";
import { Introduction } from "../components/Introduction.jsx";
import { Services } from "../components/Services/Services.jsx";
import { ProjectsHome } from "../components/ProjectsHome.jsx";
import { Testimonials } from "../components/Testimonial/Testimonials.jsx";
import { WorkWithUS } from "../components/WorkWithUs.jsx";


export const Home = () => (<>
	<SEO
		title="Desarrollo Web y Comunicación Estratégica"
		description="Transformamos tu presencia digital con diseño web de alto impacto y comunicación estratégica. Conoce nuestro portafolio y por qué nuestros clientes nos recomiendan."
		url={window.location.href} />
	<main>
		<PageHeader
			title={'headers.headerHome.headLine'}
			description={'headers.headerHome.headerDescription'}
			backgroundImgURL={"src/front/assets/img/HomeOne.jpg"}
			withoutBackgroundFilter={'desktop'} />
		<Introduction />
		<Services />
		<ProjectsHome />
		<Testimonials />
		<WorkWithUS />
	</main>
</>);