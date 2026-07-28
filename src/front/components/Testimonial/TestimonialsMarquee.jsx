import styles from "../../styles/components/HomeTestimonials.module.css";

import { useTranslation } from "react-i18next";

import { TestimonialsCard as Card } from "./TestimonialsCard";


const duplicatesCount = 2;


export const TestimonialsMarquee = ({
  cardsArray = [],
  // minCards = 3,
  // gapBetweenCards = 20,
  // maxCardsWidth = 587,
  // minCardsWidth = 300,
  // cardsHeight = 474,
  className: propClassNames
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles["marquee-wrapper"] + (propClassNames || "")}>
      <div className={styles["marquee-track"]}>
        {Array.from({ length: duplicatesCount }).map( (_, groupId) => (
          <div className={styles["marquee-group"]} key={groupId}>
            {cardsArray.map( (card, itemId) => (
              <div className={styles["marquee-slide"]} key={`g${groupId}-${itemId}`}>
                <div className={styles["slide-contents"]}>
                  <Card
                    name={card.name}
                    position={t(card.position)}
                    review={t(card.review)}
                    profilePicture={card.profilePicture}
                    logo={card.logo} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsMarquee;