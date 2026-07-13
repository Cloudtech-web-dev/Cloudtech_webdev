import { Card } from "./Card";
import { testimonialsContent } from "../../utils/testimonialsContent";
import { useTranslation, Trans } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, FreeMode } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from "react";

const gapBetweenCards = 30; // In `px`
const cardsWidth = 587; // In `px`
const cardsHeight = 473; // In `px`

const CardsMarquee = ({ cardsArray = [], repeats = 2, minCards = 3, className: propClassNames }) => {
    const { t } = useTranslation();

    return (
        <div className={"marquee-wrapper" + (propClassNames ? ` ${propClassNames}` : "")} style={{ overflow: "hidden", width: "100%", display: "flex" }}>
            <div className="marquee-track" style={{ justifyContent: "center", width: "max-content", display: "flex" }}>
                {Array.from({ length: repeats }).map((_, groupId) => (
                    <div key={groupId} className="marquee-group" aria-hidden={groupId > 0 && true} style={{ height: cardsHeight, display: "flex", gap: gapBetweenCards, paddingRight: gapBetweenCards }}>
                        {cardsArray.map((card, itemId) => (
                            <div key={`g${groupId}-${itemId}`} className="marquee-slide" style={{ width: cardsWidth, height: cardsHeight }}>
                                <div className="h-100" style={{ paddingBlock: 1 }}>
                                    <Card
                                        name={card.name}
                                        position={t(card.position)}
                                        review={t(card.review)}
                                        profilePicture={card.profilePicture}
                                        logo={card.logo}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {cardsArray.length >= minCards && <style>{`
                .marquee-wrapper {
                    .marquee-track { animation: continuousScroll ${15 * repeats}s linear infinite }
                    &:hover .marquee-track { animation-play-state: paused }
                }
                @keyframes continuousScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-${100 / repeats}%); }
                }
            `}</style>}
        </div>
    );
};

export const Testimonials = () => {
    const { t } = useTranslation();

    // const swiperRef = useRef(null);
    // const frozenTranslate = useRef(null);

    // const handleHoverOn = () => {
    //     console.log(swiperRef.current?.autoplay.running);
    // }

    // const handleMouseEnter = () => {
    //     const swiper = swiperRef.current;
    //     if (!swiper) return;

    //     // const currentTranslate = swiper.getTranslate();
    //     // frozenTranslate.current = currentTranslate;
    //     // swiper.setTranslate(currentTranslate);

    //     swiper.autoplay.stop();
    // }
    // const handleMouseLeave = () => {
    //     const swiper = swiperRef.current;
    //     if (!swiper) return;

    //     // if (frozenTranslate) swiper.setTranslate(frozenTranslate);

    //     swiper.autoplay.start();
    // }

    // return (
    //     <section className="py-5">
    //         <div className="container g-0 m-0 mw-100 pb-5" onMouseOver={handleHoverOn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    //             <div className="d-flex flex-column text-center justify-content-center mb-5">
    //                 <h2 className="section-title">{t('testimonials.sectionTitle')}</h2>
    //             </div>

    //             <Swiper
    //                 modules={[Autoplay]}
    //                 // modules={[Autoplay, FreeMode]}
    //                 loop={true}
    //                 // freeMode={true}
    //                 slidesPerView="auto"
    //                 // centeredSlides={true}
    //                 spaceBetween={gapBetweenCards}
    //                 speed={20000}
    //                 autoplay={{
    //                     delay: 0,
    //                     waitForTransition: false,
    //                     // delay: 1,
    //                     // disableOnInteraction: false,
    //                     pauseOnMouseEnter: true
    //                 }}
    //                 allowTouchMove={false}

    //                 onSwiper={swiper => swiperRef.current = swiper}


    //                 className="testimonial-swiper p-0"
    //                 style={{ height: cardsHeight }}
    //             >
    //                 {testimonialsContent.map(card =>
    //                     <SwiperSlide key={card.id}>
    //                         <div className="h-100">
    //                             <Card
    //                                 name={card.name}
    //                                 position={t(card.position)}
    //                                 review={t(card.review)}
    //                                 profilePicture={card.profilePicture}
    //                                 logo={card.logo}
    //                             />
    //                         </div>
    //                     </SwiperSlide>
    //                 )}
    //             </Swiper>
    //             <style>{`
    //                 .testimonial-swiper {
    //                     --swiper-wrapper-transition-timing-function: linear !important;
    //                     --swiper-slides-offset-before: 0 !important;
    //                     --swiper-slides-offset-after: 0 !important;
    //                     --swiper-centered-offset-before: 0 !important;
    //                     --swiper-centered-offset-after: 0 !important;
    //                     .swiper-wrapper {
    //                         // transform: translate3d(-${cardsWidth}px, 0px, 0px);
    //                     }
    //                     .swiper-slide {
    //                         width: calc(50% - ${gapBetweenCards / 2}px) !important;
    //                         max-width: ${cardsWidth}px !important
    //                     }
    //                 }
    //             `}</style>
    //         </div>
    //     </section>
    // )

    return (
        <section className="py-5">
            <div className="container g-0 m-0 mw-100 pb-5">
                <div className="d-flex flex-column text-center justify-content-center mb-5">
                    <h2 className="font-h1" style={{ color: "var(--bs-accent-1)" }}>
                        {/* {t('testimonials.sectionTitle')} */}
                        <Trans i18nKey='testimonials.sectionTitle' components={[<span className="highlighted-text" />]} />
                    </h2>
                </div>

                <CardsMarquee cardsArray={testimonialsContent} />
            </div>
        </section>
    )
}



// const swiper = new Swiper('.swiper', {
//     slidesPerView: 2,
//     spaceBetween: 14,
//     speed: 3000,
//     centeredSlides: true,
//     loop: true,
//     loopAddBlankSlides: false,
//     autoplay: {
//         delay: 500,
//         pauseOnMouseEnter: true
//     }
// });