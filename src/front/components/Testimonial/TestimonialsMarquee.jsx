import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { TestimonialsCard as Card } from "./TestimonialsCard";

import styles from "../../styles/components/HomeTestimonials.module.css";


const scrollProgressCSSVar = '--marquee-scroll-progress-percentage';


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
  

  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentDragOffset = useRef(0);
  const currentProgress = useRef(0);
  const wheelTimeout = useRef();

  const startDrag = () => {
    if (!wrapperRef.current || !trackRef.current) return;

    isDragging.current = true;
    trackRef.current.classList.add(styles['is-dragging']);
  };
  const stopDrag = () => {
    if (!wrapperRef.current || !trackRef.current) return;

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
  const setUpdatedProgress = (progress) => {
    trackRef.current?.style.setProperty(scrollProgressCSSVar, String(progress))
  };

  const handlePointerDown = (e) => {
    if (!wrapperRef.current || !trackRef.current) return;

    startDrag();

    startX.current = e.clientX;
    getCurrentProgress();

    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const handlePointerMove = (e) => {
    if (!wrapperRef.current || !trackRef.current || !isDragging.current) return;

    currentDragOffset.current = e.clientX - startX.current;

    const
      progressData = -currentDragOffset.current/getCurrentGroupWidth(),
      newProgress = currentProgress.current + progressData
    ;

    setUpdatedProgress(newProgress);
  };
  const handlePointerEnd = (e) => {
    if (!wrapperRef.current || !trackRef.current) return;

    stopDrag();
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const handleTouchStart = (e) => {
    if (!wrapperRef.current || !trackRef.current) return;

    e.preventDefault();

    startDrag();
  };
  const handleTouchEnd = (e) => {
    if (!wrapperRef.current || !trackRef.current) return;

    stopDrag();
  };

  const handleHorizontalScroll = (e) => {
    if (!wrapperRef.current || !trackRef.current) return;

    // console.log({x: e.deltaX, y: e.deltaY})

    let deltaX, deltaY;
    if (e.shiftKey) {
      deltaX = e.deltaY ; deltaY = e.deltaX
    }
    else {
      deltaX = e.deltaX ; deltaY = e.deltaY
    }

    if (Math.abs(deltaX) < Math.abs(deltaY)) return;
    
    e.preventDefault();

    startDrag();

    const
      adjustedScrollDelta = deltaX * (e.shiftKey ? 0.2 : 0.8),
      progressDelta = adjustedScrollDelta / getCurrentGroupWidth(),
      newProgress = getCurrentProgress() + progressDelta
    ;

    console.table({ deltaX, adjustedScrollDelta, currentProgress: currentProgress.current, currentProgressMethod: getCurrentProgress(), progressDelta, newProgress })

    setUpdatedProgress(newProgress);

    clearTimeout(wheelTimeout.current);
    wheelTimeout.current = setTimeout(stopDrag, 250);
  };

  useEffect(() => {
    if (!wrapperRef.current || !trackRef.current) return;

    wrapperRef.current.addEventListener('wheel', handleHorizontalScroll, { passive: false });
    return () => wrapperRef.current?.removeEventListener('wheel', handleHorizontalScroll);

  }, [wrapperRef.current]);
  
  
  // const containerRef = useRef(null);
  // const trackRef = useRef(null);
  // const [isDown, setIsDown] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [scrollRight, setScrollRight] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);

  // const handleMouseDown = (e) => {
  //   setIsDown(true);
  //   setStartX(e.pageX - containerRef.current.offsetLeft);
  //   setScrollLeft(containerRef.current.scrollLeft);
  // };

  // const handleMouseLeaveOrUp = () => {
  //   setIsDown(false);
  // };

  // const handleMouseMove = (/**@type{MouseEvent}*/e) => {
    // if (!isDown) return;
    // e.preventDefault();

    // const x = e.pageX - containerRef.current.offsetLeft;
    // const walk = (x - startX);

    // containerRef.current.scrollLeft = scrollLeft - walk;
    // containerRef.current.scrollRight = scrollRight - walk;

    // console.log({scrollLeft, walk, curTrans: trackRef.current.style.transform})
    /**@type{HTMLElement}*/
    // const cur = trackRef.current;
    // const cur = document.querySelector(`.${styles["marquee-track"]}`);
    // cur.computedStyleMap()
    // console.log(window.getComputedStyle(cur).transform)
    // const transform = window.getComputedStyle(cur).transform;
    // const matrixValues = transform.match(/matrix.*\((.+)\)/)[1].split(', '); 
    // const translateX = parseFloat(matrixValues[4]);

    // console.log(translateX - walk)
    // cur.style.transform = `translateX(${translateX - 20}px)`;
    // trackRef.current.style.translate = trackRef.current.style.translate - walk;
  // };
  

  return (
    <div className={styles["marquee-wrapper"] + (propClassNames || "")}

      ref={wrapperRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}

      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}

      // ref={containerRef}
      // onMouseDown={handleMouseDown}
      // onMouseLeave={handleMouseLeaveOrUp}
      // onMouseUp={handleMouseLeaveOrUp}
      // onMouseMove={handleMouseMove}
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