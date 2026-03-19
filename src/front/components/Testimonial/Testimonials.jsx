import { Card } from "./Card";
import { testimonialsContent } from "../../utils/testimonialsContent";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/navigation';

export const Testimonials = () => {
    const { t } = useTranslation();

    return (
        <section className="py-5">
            <div className="container">
                <div className="d-flex flex-column text-center justify-content-center">
                    <h2 className="section-title">{t('testimonials.sectionTitle')}</h2>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}

                    className="my-5 testimonial-swiper"
                >
                    {testimonialsContent.map(card =>
                        <SwiperSlide key={card.id}>
                            <div className="h-100">
                                <Card
                                    name={card.name}
                                    position={t(card.position)}
                                    review={t(card.review)}
                                    profilePicture={card.profilePicture}
                                    logo={card.logo}
                                />
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </section>
    )
}