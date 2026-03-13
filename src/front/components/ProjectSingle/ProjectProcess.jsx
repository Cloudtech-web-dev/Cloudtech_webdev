import { howToCardContent } from "../../utils/howToCardContent"
import { Card } from "./Card"
import { useTranslation } from "react-i18next"

export const ProjectProcess = () => {
    const { t } = useTranslation();

    return (
        <div className="row">
            {howToCardContent.map(cardContent => (
                <div key={cardContent.id} className="col-12 col-md-12 col-lg-6 g-5">
                    <Card
                        icon={cardContent.icon}
                        title={t(cardContent.title)}
                        description={t(cardContent.description)}
                    />
                </div>
            ))}
        </div>
    )
}