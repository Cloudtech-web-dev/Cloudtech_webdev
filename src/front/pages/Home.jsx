import { Services } from "../components/Services/Services.jsx";
import { Process } from "../components/Process.jsx";
import { Testimonials } from "../components/Testimonial/Testimonials.jsx";
import { HeaderHome } from "../components/HeaderHome.jsx";
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
				<HeaderHome />
				<Services />
				<Process />
				<ProjectsHome />
				<Testimonials />
				<Benefits />
				<WorkWithUS />
			</main>
		</>
	);
}; 