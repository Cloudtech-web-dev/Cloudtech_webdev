import { useRef, useEffect } from 'react';
import '../../styles/StickyLayout.css';

export const WhereToBegin = () => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const animationFrameRef = useRef(null);

    const phaseData = [
        { title: 'EMPEZAR DESDE CERO', desc: 'Ordenamos las ideas, definimos la estructura y construimos la web completa.' },
        { title: 'DISEÑO Y EXPERIENCIA', desc: 'No trabajamos con fórmulas genéricas. Cada decisión de diseño, contenido y desarrollo responde a la identidad y los objetivos del proyecto.' },
        { title: 'LLEVA TU DISEÑO A LA WEB', desc: 'Tomamos diseños existentes y los convertimos en sitios funcionales, responsivos y fáciles de usar.' },
        { title: 'OPTIMIZAR TU WEB', desc: 'Revisamos lo que ya tienes y proponemos mejoras en estructura, diseño, contenido, rendimiento o funcionalidad.' }
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

            const totalItems = phaseData.length;
            const itemWidth = window.innerWidth;

            const progress = scrollProgress * (totalItems - 1);
            const activeIndex = Math.floor(progress);
            const segmentProgress = progress - activeIndex;


            let interpolatedProgress = activeIndex;

            // Creamos un "suavizado/pausa": de 0.0 a 0.7 se queda quieto (pausa en el centro), 
            // y de 0.7 a 1.0 hace la transición rápida hacia el siguiente elemento.
            if (segmentProgress > 0.7) {
                const transitionFactor = (segmentProgress - 0.7) / 0.3;
                // Ajuste de aceleración (ease-in-out manual)
                interpolatedProgress += transitionFactor * transitionFactor * (3 - 2 * transitionFactor);
            }

            // Calculamos los píxeles reales de traslación
            const horizontalTranslate = interpolatedProgress * itemWidth;
            track.style.transform = `translateX(-${horizontalTranslate}px)`;
        };

        const onScroll = () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = requestAnimationFrame(updateAnimations);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', updateAnimations);
        updateAnimations();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', updateAnimations);
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, [phaseData.length]);

    return (
        <>
            {/* CONTENEDOR DE INTRODUCCIÓN */}
            <div className='intro-scroll-wrapper'>
                <div className='intro-sticky-box'>
                    <div className='intro-content'>
                        <h2 className='section-title'>No todos los <span className='bg-negative-title'>proyectos</span> empiezan en el mismo punto</h2>
                        <p className='intro-text'>
                            Puedes llegar con una idea, una marca ya creada, un diseño listo o una web que necesita mejorar. Nos adaptamos al punto en el que estás para ayudarte a avanzar, a lo que tu proyecto necesita hoy.
                        </p>
                    </div>
                </div>
            </div>
            {/* CONTENEDOR DE VALUES */}
            <div ref={containerRef} className='scroll-container'>
                <div className='sticky-view'>
                    <div ref={trackRef} className='horizontal-track'>
                        {phaseData.map((item, index) => (
                            <div key={index} className='card-content-section'>
                                <div className='phase-text-wrapper wtb-wrapper'>
                                    <div className='d-flex gap-4 align-items-center phase-title-number'>
                                        <span className="phase-number">[{index + 1 < 10 ? `0${index + 1}` : index + 1}]</span>
                                        <span className="phase-title">{item.title}</span>
                                    </div>
                                    <div className='phase-description'>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}