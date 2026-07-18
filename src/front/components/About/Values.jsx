import { useRef, useEffect } from 'react';
import { Trans, useTranslation } from "react-i18next";
import '../../styles/StickyLayout.css';

export const Values = () => {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const animationFrameRef = useRef(null);

    const valuesData = [
        { title: t('about.values.valueContent.value1.title'), desc: t('about.values.valueContent.value1.description') },
        { title: t('about.values.valueContent.value2.title'), desc: t('about.values.valueContent.value2.description') },
        { title: t('about.values.valueContent.value3.title'), desc: t('about.values.valueContent.value3.description') },
        { title: t('about.values.valueContent.value4.title'), desc: t('about.values.valueContent.value4.description') },
        { title: t('about.values.valueContent.value5.title'), desc: t('about.values.valueContent.value5.description') },
        { title: t('about.values.valueContent.value6.title'), desc: t('about.values.valueContent.value6.description') }
    ];

    useEffect(() => {
        const updateAnimations = () => {
            if (!containerRef.current || !trackRef.current) return;

            const container = containerRef.current;
            const track = trackRef.current;

            const containerHeight = container.offsetHeight;
            const windowHeight = window.innerHeight;
            const containerTop = container.getBoundingClientRect().top;

            const totalScrollable = Math.max(1, containerHeight - windowHeight);
            const scrollProgress = Math.max(0, Math.min(-containerTop / totalScrollable, 1));

            const totalItems = valuesData.length;
            const progress = scrollProgress * totalItems;
            const activeIndex = Math.min(Math.max(Math.floor(progress), 0), totalItems - 1);
            const segmentProgress = progress - activeIndex;

            const OPEN_START = 0.40;
            const OPEN_END = 0.60;
            const EXIT_START = 0.80;

            const width = window.innerWidth;
            let openProgress = 0;
            let horizontalTranslate = activeIndex * width;

            if (segmentProgress < OPEN_START) {
                horizontalTranslate = activeIndex * width;
                openProgress = 0;
            } else if (segmentProgress < OPEN_END) {
                horizontalTranslate = activeIndex * width;
                openProgress = (segmentProgress - OPEN_START) / (OPEN_END - OPEN_START);
            } else if (segmentProgress < EXIT_START) {
                horizontalTranslate = activeIndex * width;
                openProgress = 1;
            } else {
                const exitFactor = (segmentProgress - EXIT_START) / (1 - EXIT_START);
                horizontalTranslate = activeIndex * width + exitFactor * width;
                openProgress = 1;
            }

            horizontalTranslate = Math.max(0, Math.min(horizontalTranslate, (totalItems - 1) * width));
            track.style.transform = `translateX(-${horizontalTranslate}px)`;

            const sections = track.querySelectorAll('.card-content-section');
            sections.forEach((section, index) => {
                const topHalf = section.querySelector('.text-top');
                const bottomHalf = section.querySelector('.text-bottom');
                const description = section.querySelector('.content-description');

                if (index === activeIndex) {
                    if (topHalf) topHalf.style.transform = `translateY(-${openProgress * 80}px)`;
                    if (bottomHalf) bottomHalf.style.transform = `translateY(${openProgress * 80}px)`;
                    if (description) {
                        description.style.opacity = openProgress;
                        description.style.transform = `translate(-50%, -50%) scale(${0.9 + openProgress * 0.1})`;
                    }
                } else if (index < activeIndex) {
                    if (topHalf) topHalf.style.transform = 'translateY(-80px)';
                    if (bottomHalf) bottomHalf.style.transform = 'translateY(80px)';
                    if (description) description.style.opacity = 1;
                } else {
                    if (topHalf) topHalf.style.transform = 'translateY(0px)';
                    if (bottomHalf) bottomHalf.style.transform = 'translateY(0px)';
                    if (description) description.style.opacity = 0;
                }
            });
        };

        const onScroll = () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = requestAnimationFrame(updateAnimations);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        updateAnimations();

        return () => {
            window.removeEventListener('scroll', onScroll);
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, [valuesData.length]);

    return (
        <div className='light-section'>
            {/* CONTENEDOR DE INTRODUCCIÓN */}
            <div className='intro-scroll-wrapper'>
                <div className='intro-sticky-box'>
                    <div className='intro-content'>
                        <h2 className='section-title'>
                            <Trans i18nKey={'about.values.opening.openingTitle'} components={[<span className='highlighted-text' style={{ "--highlighted-text-color": "var(--bs-accent-1)", "--highlighted-text-bg": "var(--bs-gray-1000)" }} />]} />
                        </h2>
                        <p className='intro-text'>
                            {t('about.values.opening.openingDescription')}
                        </p>
                    </div>
                </div>
            </div>
            {/* CONTENEDOR DE VALUES */}
            <div ref={containerRef} className='scroll-container'>
                <div className='sticky-view'>
                    <div ref={trackRef} className='horizontal-track'>
                        {valuesData.map((item, index) => (
                            <div key={index} className='card-content-section'>
                                <div className='split-text-wrapper'>
                                    <span className='content-text text-top'>{item.title}</span>
                                    <div className='content-description'>
                                        <p>{item.desc}</p>
                                    </div>
                                    <span className='content-text text-bottom'>{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    );
};