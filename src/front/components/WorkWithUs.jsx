import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const stats = [
    { number: "99", symbol: "%", label: "workWithUs.statistics.customerSatisfaction" },
    { number: "+", symbol: "10", label: "workWithUs.statistics.completedProjects" },
    { number: "+", symbol: "5", label: "workWithUs.statistics.yearsOfExperience" },
    { number: "18", symbol: "K", label: "workWithUs.statistics.activeUsers" },
];

export const WorkWithUS = () => {
    const { t } = useTranslation();

    return (

        <section className="text-white py-5">
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="row" style={{ maxWidth: 1064, gap: 70 }}>
                        <div className="col g-0">
                            <h2 className="mb-4 font-h2" style={{ color: "var(--bs-accent-1)", fontSize: 56, lineHeight: 1, letterSpacing: "-1%", width: 527 }}>
                                {t('workWithUs.sectionTitle')}
                            </h2>
                        </div>
                        <div className="col g-0">
                            <p className="font-p1" style={{ whiteSpace: 'pre-line' }}>
                                {t('workWithUs.sectionDescription')}
                            </p>
                            <div className="mt-5 align-items-center justify-content-center">
                                <Link className="btn btn-outline btn-lg rounded-pill border-2 font-p1 fw-bold fs-6 d-none d-lg-block mx-auto " to="/contact" style={{ minWidth: "50%", width: "fit-content", maxWidth: "80%", padding: "18px 34px", lineHeight: "18px" }}>
                                    {t('workWithUs.workWithUsCTA')}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 pt-3 text-center">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="col-12 col-lg-3 mb-4 mb-lg-0">
                                <p className="display-5 fw-bold mb-1">
                                    <span className="text-stat-number">{stat.number}</span>
                                    <span className="text-stat-symbol">{stat.symbol}</span>
                                </p>
                                <p className="title-sub text-white fw-semibold">{t(stat?.label, "")}</p>
                            </div>
                        ))}
                    </div>

                    <div className="container mt-4">
                        <Link className="btn btn-outline btn-lg rounded-pill px-4 mx-auto d-lg-none w-100 w-lg-auto" to="/contact">{t('workWithUs.workWithUsCTA')}</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};