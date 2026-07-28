import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { TestimonialsCard as Card } from "./TestimonialsCard";

import styles from "../../styles/components/HomeTestimonials.module.css";


export const TestimonialsMarquee = ({ cardsArray = [], className: propClassNames, rollDuration = '30s' }) => {
  const { t } = useTranslation();

  const [duplicatesCount, setDuplicatesCount] = useState(2);


  useEffect(() => {

    const adjustMarqueeDuplication = () => {
      const
        groupCardsCount = cardsArray.length,
        totalGroupWidth = groupCardsCount * ( parseFloat(styles.maxCardWidth) + parseFloat(styles.gapBetweenCards) ),
        totalGroupsNeeded = Math.ceil(window.innerWidth / totalGroupWidth) + 1
      ;
      setDuplicatesCount(Math.max(totalGroupsNeeded, 2));
    };

    adjustMarqueeDuplication();

    window.addEventListener('resize', adjustMarqueeDuplication);
    return () => {
      window.removeEventListener('resize', adjustMarqueeDuplication);
    };

  }, []);
  

  return (
    <div className={styles["marquee-wrapper"] + (propClassNames || "")}>
      <div className={styles["marquee-track"]} style={{
        '--marquee-translate-delta': duplicatesCount,
        '--roll-duration': rollDuration
      }}>
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