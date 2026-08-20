import { projectsList } from "../../utils/projectsList"
import { ProjectCard } from "./ProjectCard"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import '../../styles/StickyLayout.css';

import 'swiper/css';
import 'swiper/css/navigation';

export const OtherProjects = () => {
    const { t } = useTranslation();
    const { projectId } = useParams();

    const filteredProjects = projectsList.filter(project => project.id !== projectId);

    return (
        <section id="otros-proyectos" className="my-5">
            <h1 className="section-title-positive text-center">{t('projects.otherProjects')}</h1>

           <div className="position-relative px-4 px-md-5">

                {/* Flecha Prev Nativa de Swiper */}
                <div className="swiper-button-prev custom-swiper-arrow d-none d-md-block"></div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2 }
                    }}
                    className="custom-projects-swiper my-3 py-3"
                >
                    {filteredProjects.map(project => (
                        <SwiperSlide key={project.id} className="h-auto">
                            <ProjectCard
                                id={project.id}
                                cover={project.cover}
                                name={t(project.name)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Flecha Next Nativa de Swiper */}
                <div className="swiper-button-next custom-swiper-arrow d-none d-md-block"></div>

            </div>

        </section>
    )
}