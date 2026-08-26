import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { TestimonialsCard as Card } from "./TestimonialsCard";

import styles from "../../styles/components/HomeTestimonials.module.css";


const scrollProgressCSSVar = '--marquee-scroll-progress-percentage';
const swipeMinDelta = 10;


/**
 * @typedef {`${number}${'ms' | 's' | 'm' | 'h'}`} stringTime
 * 
 * @typedef TestimonialsMarqueeProps
 * @prop {import('./TestimonialsCard').TestimonialsCard[]} cardsArray
 * @prop {string=} className
 * @prop {stringTime=} rollDuration @end
 * 
 * @type {(props:TestimonialsMarqueeProps)=>JSX.Element}
*/
export const TestimonialsMarquee = ({ cardsArray = [], className: propClassNames, rollDuration = '30s' }) => {
  const { t } = useTranslation();

  /* MARQUEE GROUP CLONES */
  
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
  

  /* MARQUEE INTERACTION HANDLING */

  /**
   * @type {React.MutableRefObject<HTMLDivElement?>}
   * */
  const wrapperRef = useRef(null);
  /**
   * @type {React.MutableRefObject<HTMLDivElement?>}
   * */
  const trackRef = useRef(null);

  const isDragging = useRef(false);
  const isGrabbing = useRef(false);
  const startX = useRef(0);
  const currentDragOffset = useRef(0);
  const currentProgress = useRef(0);

  const startDrag = (options={ grab: true }) => {
    if (!wrapperRef.current || !trackRef.current) return;

    isGrabbing.current = !(options?.grab==false);
    isDragging.current = true;
    trackRef.current.classList.add(styles['is-dragging']);
  };
  const stopDrag = () => {
    if (!wrapperRef.current || !trackRef.current) return;

    isGrabbing.current = false;
    isDragging.current = false;
    startX.current = 0;
    currentDragOffset.current = 0;
    currentProgress.current = 0;

    trackRef.current.classList.remove(styles['is-dragging']);
  };
  const getCurrentGroupWidth = () => (
    trackRef.current?.getElementsByClassName(styles['marquee-group'])[0]?.clientWidth ?? 1
  );
  const getCurrentProgress = () => (
    currentProgress.current = trackRef.current
      ? parseFloat(getComputedStyle(trackRef.current).getPropertyValue(scrollProgressCSSVar))
      : 0
  );
  const setUpdatedProgress = (/**@type{number}*/progress) => {
    trackRef.current?.style.setProperty(scrollProgressCSSVar, String(progress))
  };

  /* Pointer (e.g. mouse cursor) Interaction */
  
  const handlePointerDown = (/**@type{React.PointerEvent<HTMLDivElement>}*/e) => {
    if (!wrapperRef.current || !trackRef.current) return;

    startDrag();
    isGrabbing.current = true;

    startX.current = e.clientX;
    getCurrentProgress();

    e.currentTarget.setPointerCapture(e.pointerId);

    document.addEventListener('pointermove', handlePointerMove, {passive: true});
  };
  const handlePointerMove = (/**@type{React.PointerEvent<HTMLDivElement>}*/e) => {
    if (!wrapperRef.current || !trackRef.current || !isDragging.current) return;

    currentDragOffset.current = e.clientX - startX.current;

    const
      progressData = -currentDragOffset.current/getCurrentGroupWidth(),
      newProgress = currentProgress.current + progressData
    ;

    setUpdatedProgress(newProgress);
  };
  const handlePointerEnd = (/**@type{React.PointerEvent<HTMLDivElement>}*/e) => {
    if (!wrapperRef.current || !trackRef.current) return;

    isGrabbing.current = false;
    stopDrag();
    e.currentTarget.releasePointerCapture(e.pointerId);
    document.removeEventListener('pointermove', handlePointerMove);
  };

  /* Touch Interaction */
  
  /**
   * @type {React.MutableRefObject<Touch>}
   * */
  const touchStart = useRef();
  /**
   * @type {React.MutableRefObject<boolean?>}
   * */
  const isInitialTouch = useRef(null);
  const isHorizontallyLocked = useRef(false);

  const handleTouchStart = (/**@type{React.TouchEvent<HTMLDivElement>}*/e) => {
    if (!wrapperRef.current || !trackRef.current) return;

    touchStart.current = e.touches[0];
    isInitialTouch.current = true;

    // startDrag();
    wrapperRef.current.addEventListener('touchmove', handleTouchMove, { passive: false });
  };
  const handleTouchMove = (/**@type{React.TouchEvent<HTMLDivElement>}*/e) => {
    if (!wrapperRef.current || !trackRef.current) return;
    
    if (isInitialTouch.current) {
      isInitialTouch.current = false;
      
      const touchEnd = e.touches[0];
      const deltaX = Math.abs(touchEnd.clientX - touchStart.current.clientX);
      const deltaY = Math.abs(touchEnd.clientY - touchStart.current.clientY);
      
      if (deltaX > Math.max(swipeMinDelta, deltaY)) {
        // isGrabbing.current = true;
        startDrag();
        isHorizontallyLocked.current = true;
      }
    }
    
    isHorizontallyLocked.current && e.cancelable && e.preventDefault();
  }
  const handleTouchEnd = (/**@type{React.TouchEvent<HTMLDivElement>}*/e) => {
    if (!wrapperRef.current || !trackRef.current) return;
    
    isHorizontallyLocked.current = false;
    isInitialTouch.current = null;

    // isGrabbing.current = false;
    stopDrag();
    wrapperRef.current.removeEventListener('touchmove', handleTouchMove);
  };

  /* Scroll Interaction */

  /**
   * @type {React.MutableRefObject<NodeJS.Timeout|undefined>}
   * */
  const wheelTimeout = useRef();

  const handleHorizontalScroll = (/**@type{React.WheelEvent<HTMLDivElement>}*/e) => {
    if (!wrapperRef.current || !trackRef.current) return;

    let deltaX, deltaY;
    if (e.shiftKey) {
      deltaX = e.deltaY ; deltaY = e.deltaX
    }
    else {
      deltaX = e.deltaX ; deltaY = e.deltaY
    }

    if (Math.abs(deltaX) < Math.abs(deltaY)) return;
    
    e.preventDefault();

    if (isGrabbing.current) return clearTimeout(wheelTimeout.current);
    
    startDrag({ grab: false });

    const
      adjustedScrollDelta = deltaX * (e.shiftKey ? 0.2 : 0.8),
      progressDelta = adjustedScrollDelta / getCurrentGroupWidth(),
      newProgress = getCurrentProgress() + progressDelta
    ;

    // console.table({ deltaX, adjustedScrollDelta, currentProgress: currentProgress.current, currentProgressMethod: getCurrentProgress(), progressDelta, newProgress })

    setUpdatedProgress(newProgress);

    clearTimeout(wheelTimeout.current);
    wheelTimeout.current = setTimeout(stopDrag, 250);
  };

  /* Non-passive Event Listeners Mounting */

  useEffect(() => {
    if (!wrapperRef.current || !trackRef.current) return;

    console.log("hohohoooo");
    
    const wrapperElement = wrapperRef.current;
    if (typeof wrapperElement.addEventListener === 'function') {
      wrapperElement.addEventListener('pointerdown', handlePointerDown, { passive: false });
      wrapperElement.addEventListener('touchstart', handleTouchStart, { passive: false });
      wrapperElement.addEventListener('wheel', handleHorizontalScroll, { passive: false });
    }
    
    return () => {
      console.log("cloooooose");
      if (wrapperElement && typeof wrapperElement.removeEventListener === 'function') {
        wrapperElement.removeEventListener('pointerdown', handlePointerDown);
        wrapperElement.removeEventListener('touchstart', handleTouchStart);
        wrapperElement.removeEventListener('wheel', handleHorizontalScroll);
      }
    };
  }, [wrapperRef.current]);
  

  return (
    <div className={styles["marquee-wrapper"] + (propClassNames || "")}
      ref={wrapperRef}
      onPointerUp={handlePointerEnd} onPointerCancel={handlePointerEnd}
      onTouchEnd={handleTouchEnd} onTouchCancel={handleTouchEnd}
    >
      <div className={styles["marquee-track"]} ref={trackRef} style={{
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