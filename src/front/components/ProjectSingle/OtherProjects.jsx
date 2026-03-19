import { projectsList } from "../../utils/projectsList"
import { ProjectCard } from "./ProjectCard"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/navigation';

export const OtherProjects = () => {
    const { t } = useTranslation();
    const { projectId } = useParams();

    const filteredProjects = projectsList.filter(project => project.id !== projectId);

    return (
        <section id="otros-proyectos" className="my-5">
            <h1 className="section-title text-center">{t('projects.otherProjects')}</h1>

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                className="my-5"
            >
                {filteredProjects.map(project => (
                    <SwiperSlide key={project.id}>
                        <div className="h-100">
                            <ProjectCard
                                id={project.id}
                                cover={project.cover}
                                name={t(project.name)}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    )
}