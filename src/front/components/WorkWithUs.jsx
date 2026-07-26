import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const stats = [
    { number: "99", suffix: "%", label: "customerSatisfaction" },
    { prefix: "+", number: "10", label: "completedProjects" },
    { prefix: "+", number: "5", label: "yearsOfExperience" },
    { number: "18", suffix: "K", label: "activeUsers" },
];


export const WorkWithUS = () => {
    const { t } = useTranslation();

    return (
        <section className="py-5" style={{color: "var(--bs-gray-100)" }}>

            {/* Section Contents */}
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center">

                    {/* Section Header */}
                    <div className="home-workwithus-upper row" style={{ maxWidth: 1064, gap: 40, width: "100%" }}>

                        {/* Heading Part */}
                        <div className="col g-0">

                            {/* Heading */}
                            <h2 className="mb-4 font-h2" style={{ color: "var(--bs-accent-1)", fontSize: 56, lineHeight: 1, letterSpacing: "-1%", maxWidth: 527 }}>
                                {t('workWithUs.sectionTitle')}
                            </h2>

                        </div>

                        {/* Description Part */}
                        <div className="home-workwithus-description col g-0">
                            
                            {/* Description */}
                            <p className="font-p1" style={{ whiteSpace: 'pre-line' }}>
                                {t('workWithUs.sectionDescription')}
                            </p>
                            
                            {/* Navigate to contact Button (desktop) */}
                            <div className="mt-5 align-items-center justify-content-center">
                                <Link className="btn btn-outline btn-lg rounded-pill border-2 font-p1 fw-bold fs-6 d-none d-lg-block mx-auto " to="/contact" style={{ minWidth: "50%", width: "fit-content", maxWidth: "80%", padding: "18px 34px", lineHeight: "18px" }}>
                                    {t('workWithUs.workWithUsCTA')}
                                </Link>
                            </div>
                            
                        </div>
                        
                    </div>

                    {/* Stats Array */}
                    <div className="row mt-md-5 pt-3 text-center">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="col-12 col-lg-3 mb-4 mb-lg-0">
                                
                                {/* Stat */}
                                <p className="display-5 fw-bold mb-1 stat" style={{ "--upTo": stat.number, "--idx": idx }}>
                                    <span className="text-stat-number">{stat.prefix}</span>
                                    <span className={`text-stat-${stat.prefix ? "symbol" : "number"} counter`}>{stat.number}</span>
                                    <span className="text-stat-symbol">{stat.suffix}</span>
                                </p>

                                {/* Stat Label */}
                                <p className="title-sub fw-semibold">
                                    {t(`workWithUs.statistics.${stat?.label}`, "")}
                                </p>
                                
                            </div>
                        ))}
                    </div>
                    
                    {/* Navigate to Contact Button (mobile) */}
                    <div className="container mt-4 d-lg-none">
                        <Link className="btn btn-outline btn-lg rounded-pill px-4 mx-auto d-lg-none w-100 w-lg-auto" to="/contact">
                            {t('workWithUs.workWithUsCTA')}
                        </Link>
                    </div>

                </div>
            </div>

            {/* Component Styles */}
            <style>{`
                @media (width < 768px) {
                    .home-workwithus-upper {
                        display: flex;
                        flex-direction: column;
                        padding-inline: 10px;
                        gap: 10px !important;

                        &:first-child h2 {
                            font-size: calc(1.525rem + 3.3vw) !important;
                            line-height: 1.2 !important;
                            letter-spacing: -0.01em !important;
                            // text-align: center;
                        }
                            
                        .home-workwithus-description p {
                            // font-size: 1.5rem;
                            font-weight: 500;
                            letter-spacing: 0;
                        }
                    }
                }
                
                @supports (background: paint(houdini)) and (counter-reset: x 0) {
                    @property --counter-value {
                        syntax: "<integer>";
                        initial-value: 0;
                        inherits: false;
                    }
                    
                    .stat {
                        --stat-animation-stagger: calc(var(--idx, 0) * var(--stat-stagger-duration, 0.2s));
                        --stat-animation-parameters: 2s ease-out var(--stat-animation-stagger) forwards;
                        
                        opacity: 0;
                        translate: 0 30%;
                        animation: fadeIn var(--stat-animation-parameters);
                        timeline-trigger-name: --stat-trigger;
                        timeline-trigger-source: view();
                        animation-trigger: --stat-trigger play-once;
                        view-timeline-inset: 500px 500px;
                        
                        .counter { visibility: hidden }
                        .counter::before {
                            visibility: visible;
                            position: absolute;
                            content: counter(num);
                            counter-reset: num var(--counter-value);
                            animation: countUp var(--stat-animation-parameters);
                            animation-trigger: --stat-trigger play-once;
                            view-timeline-inset: 500px 500px;
                        }
                    }
                    
                    @keyframes countUp {
                        to { --counter-value: var(--upTo, 5000) }
                    }
                    @keyframes fadeIn {
                        to { opacity: 1; translate: none; }
                    }
                }
            `}</style>

        </section>
    );
};