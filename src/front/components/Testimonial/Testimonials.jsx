import { Card } from "./Card";
import { testimonialsContent } from "../../utils/testimonialsContent";
import { useTranslation, Trans } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, FreeMode } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from "react";

const gapBetweenCards = 20; // In `px`
const maxCardsWidth = 587; // In `px`
const minCardsWidth = 300; // In `px`
const cardsHeight = 474; // In `px`

const CardsMarquee = ({ cardsArray = [], repeats = 2, minCards = 3, className: propClassNames }) => {
    const { t } = useTranslation();

    return (
        <div className={"marquee-wrapper" + (propClassNames ? ` ${propClassNames}` : "")} style={{ overflow: "hidden", width: "100%", display: "flex" }}>
            <div className="marquee-track" style={{ justifyContent: "center", width: "max-content", display: "flex" }}>
                {Array.from({ length: repeats }).map((_, groupId) => (
                    <div key={groupId} className="marquee-group" aria-hidden={groupId > 0 && true} style={{ height: cardsHeight, display: "flex", gap: gapBetweenCards, paddingRight: gapBetweenCards }}>
                        {cardsArray.map((card, itemId) => (
                            <div key={`g${groupId}-${itemId}`} className="marquee-slide" style={{ minWidth: minCardsWidth, width: "80vw", maxWidth: maxCardsWidth, height: cardsHeight }}>
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

    return (
        <section className="py-5">
            <div className="container g-0 m-0 mw-100 pb-5">
                <div className="d-flex flex-column text-center justify-content-center" style={{ marginBottom: 77 }}>
                    <h2 className="font-h1" style={{ color: "var(--bs-accent-1)" }}>
                        <Trans i18nKey='testimonials.sectionTitle' components={[<span className="highlighted-text" />]} />
                    </h2>
                    <style>{`
                        @media (width < 768px) {
                            .home-testimonials-title {
                                margin-bottom: 3rem !important;
                                h2 {
                                    font-size: calc(1.525rem + 3.3vw);
                                    line-height: 1.2;
                                }
                            }
                        }
                    `}</style>
                </div>

                <CardsMarquee cardsArray={testimonialsContent} />
            </div>
        </section>
    )
}

