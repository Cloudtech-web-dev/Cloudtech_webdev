import { useRef, useEffect } from 'react';
import '../../styles/StickyLayout.css';

export const Values = () => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const animationFrameRef = useRef(null);

    const valuesData = [
        { title: 'CLARIDAD', desc: 'Ordenamos ideas, contenidos y recorridos para que cada sitio sea fácil de entender, usar y explorar.' },
        { title: 'CRITERIO', desc: 'No trabajamos con fórmulas genéricas. Cada decisión de diseño, contenido y desarrollo responde a la identidad y los objetivos del proyecto.' },
        { title: 'SOLIDEZ TÉCNICA', desc: 'Cuidamos que cada sitio funcione bien: que sea estable, adaptable, fácil de usar y preparado para crecer y escalar.' },
        { title: 'COLABORACIÓN', desc: 'Trabajamos cerca de cada cliente para entender sus necesidades, resolver dudas y avanzar con comunicación clara durante todo el proceso.' },
        { title: 'INNOVACIÓN', desc: 'Exploramos nuevas herramientas y formas de trabajo cuando el proyecto lo necesita, sin perder de vista lo esencial: construir soluciones útiles y bien pensadas.' },
        { title: 'TRANSPARENCIA', desc: 'Mantenemos procesos claros, decisiones explicadas y expectativas realistas para que cada etapa del proyecto avance con confianza.' }
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
        <>
            {/* CONTENEDOR DE INTRODUCCIÓN */}
            <div className='intro-scroll-wrapper'>
                <div className='intro-sticky-box'>
                    <div className='intro-content'>
                        <h2 className='section-title'>Lo que guía nuestro <span className='bg-negative-title'>trabajo</span></h2>
                        <p className='intro-text'>
                            Cada proyecto necesita algo distinto, pero nuestra forma de trabajar se sostiene en principios claros: entender antes de construir, diseñar con intención y desarrollar soluciones que funcionen para personas reales.
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
        </>


    );
};