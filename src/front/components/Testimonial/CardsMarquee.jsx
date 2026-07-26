import { useTranslation } from "react-i18next";

import { Card } from "./Card";


const gapBetweenCards = 20; // In `px`
const maxCardsWidth = 587; // In `px`
const minCardsWidth = 300; // In `px`
const cardsHeight = 474; // In `px`


export const CardsMarquee = ({ cardsArray = [], repeats = 2, minCards = 3, className: propClassNames }) => {
  const { t } = useTranslation();

  return (
    /* Wrapper */
    <div className={"marquee-wrapper" + (propClassNames ? ` ${propClassNames}` : "")} style={{ overflow: "hidden", width: "100%", display: "flex" }}>

      {/* Track */}
      <div className="marquee-track" style={{ justifyContent: "center", width: "max-content", display: "flex" }}>
        {Array.from({ length: repeats }).map((_, groupId) => (

          /* Group */
          <div key={groupId} className="marquee-group" aria-hidden={groupId > 0 && true} style={{ height: cardsHeight, display: "flex", gap: gapBetweenCards, paddingRight: gapBetweenCards }}>
            {cardsArray.map((card, itemId) => (

              /* Slide */
              <div key={`g${groupId}-${itemId}`} className="marquee-slide" style={{ minWidth: minCardsWidth, width: "80vw", maxWidth: maxCardsWidth, height: cardsHeight }}>

                {/* Slide Contents */}
                <div className="h-100" style={{ paddingBlock: 1 }}>
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

      {/* Component Styles */}
      <style>{`
        ${cardsArray.length >= minCards && `
          .marquee-wrapper {
            .marquee-track { animation: continuousScroll ${15 * repeats}s linear infinite }
            &:hover .marquee-track { animation-play-state: paused }
          }
          @keyframes continuousScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${100 / repeats}%); }
          }
      `}`}</style>
      
    </div>
  );
};

export default CardsMarquee;