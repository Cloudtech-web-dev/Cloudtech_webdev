
import { Card } from "./Card"
import { useTranslation } from "react-i18next"

export const ProjectProcess = ({ phases }) => {
    const { t } = useTranslation();

    return (
        <div className="row">
            {phases.map((phase, index) => (
                <div key={index} className="col-12 col-md-12 col-lg-6 g-5">
                    <Card
                        icon={phase.icon}
                        title={t(phase.title)}
                        description={t(phase.description)}
                    />
                </div>
            ))}
        </div>
    )
}