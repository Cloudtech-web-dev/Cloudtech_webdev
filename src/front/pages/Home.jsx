import { Services } from "../components/Services/Services.jsx";
import { Process } from "../components/Process.jsx";
import { Testimonials } from "../components/Testimonial/Testimonials.jsx";
import { PageHeader } from  "../components/PageHeader";
import { Introduction } from "../components/Introduction.jsx";
import { Benefits } from "../components/Benefits/Benefits.jsx";
import { WorkWithUS } from "../components/WorkWithUs.jsx";
import { ProjectsHome } from "../components/ProjectsHome.jsx";
import { SEO } from "../utils/SEO.jsx";

export const Home = () => {
	return (
		<>
			<SEO
				title="Desarrollo Web y Comunicación Estratégica"
				description="Transformamos tu presencia digital con diseño web de alto impacto y comunicación estratégica. Conoce nuestro portafolio y por qué nuestros clientes nos recomiendan."
				url={window.location.href}
			/>
			<main>
				<PageHeader
					title={'headers.headerHome.headLine'}
					description={'headers.headerHome.headerDescription'}
					backgroundImg={"src/front/assets/img/HomeOne.jpg"}
					withoutBackgroundFilter
				/>
				<Introduction />
				<Services />
				<ProjectsHome />
				<Testimonials />
				<WorkWithUS />
			</main>
		</>
	);
};