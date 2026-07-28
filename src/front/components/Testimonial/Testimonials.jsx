import { Trans } from "react-i18next";

import { TestimonialsMarquee as Marquee } from "./TestimonialsMarquee";

import { testimonialsContent as testimonials } from "../../utils/testimonialsContent";


export const Testimonials = () => (
    <section className="py-5">

        {/* Section Contents */}
        <div className="container g-0 m-0 mw-100 pb-5">
            
            {/* Section Header */}
            <div className="d-flex flex-column text-center justify-content-center" style={{ marginBottom: 77 }}>

                {/* Heading */}
                <h2 className="font-h1" style={{ color: "var(--bs-accent-1)" }}>
                    <Trans i18nKey='testimonials.sectionTitle' components={[<span className="highlighted-text" />]} />
                </h2>

            </div>

            {/* Section Body */}
            <Marquee cardsArray={testimonials} rollDuration="30s" />

        </div>
        
        {/* Component Styles */}
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
        
    </section>
);