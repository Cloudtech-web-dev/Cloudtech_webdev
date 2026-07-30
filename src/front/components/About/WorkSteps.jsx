import { useRef, useEffect } from 'react';
import '../../styles/StickyLayout.css';
import { Trans, useTranslation } from "react-i18next";

export const WorkSteps = () => {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const animationFrameRef = useRef(null);

    const workStepsData = [
        { title: <Trans i18nKey={'about.workSteps.steps.step1.title'} components={[<span className='highlighted-text' />]} />, desc: t('about.workSteps.steps.step1.description') },
        { title: <Trans i18nKey={'about.workSteps.steps.step2.title'} components={[<span className='highlighted-text' />]} />, desc: t('about.workSteps.steps.step2.description') },
        { title: <Trans i18nKey={'about.workSteps.steps.step3.title'} components={[<span className='highlighted-text' />]} />, desc: t('about.workSteps.steps.step3.description') },
        { title: <Trans i18nKey={'about.workSteps.steps.step4.title'} components={[<span className='highlighted-text' />]} />, desc: t('about.workSteps.steps.step4.description') },
        { title: <Trans i18nKey={'about.workSteps.steps.step5.title'} components={[<span className='highlighted-text' />]} />, desc: t('about.workSteps.steps.step5.description') }
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

            const totalItems = workStepsData.length;
            const steps = track.querySelectorAll('.work-steps-layout');

            steps.forEach((step, index) => {
                const stepStart = index / totalItems;
                const stepEnd = (index + 1) / totalItems;

                let opacity = 0;
                let translateY = 60;
                let pointerEvents = 'none';
                let currentProgress = 0;

                const isFirstItem = index === 0;
                const isLastItem = index === totalItems - 1;

                if (scrollProgress >= stepStart && scrollProgress < stepEnd) {
                    pointerEvents = 'auto';
                    const stepProgress = (scrollProgress - stepStart) / (stepEnd - stepStart);
                    currentProgress = stepProgress;

                    if (stepProgress < 0.30) {
                        // Si es el primer paso, anulamos el desvanecimiento de entrada (ya arranca al 100%)
                        opacity = isFirstItem ? 1 : stepProgress / 0.30;
                        translateY = isFirstItem ? 0 : 60 * (1 - (stepProgress / 0.30));
                    } else if (stepProgress > 0.70) {
                        // Si es el último paso, anulamos el desvanecimiento de salida
                        opacity = isLastItem ? 1 : (1 - stepProgress) / 0.30;
                        translateY = isLastItem ? 0 : -60 * ((stepProgress - 0.70) / 0.30);
                    } else {
                        opacity = 1;
                        translateY = 0;
                    }
                } else if (scrollProgress >= stepEnd) {
                    // Si ya pasó el límite pero es el último paso, lo dejamos clavado
                    opacity = isLastItem ? 1 : 0;
                    translateY = isLastItem ? 0 : -60;
                    pointerEvents = isLastItem ? 'auto' : 'none';
                    currentProgress = 1;
                } else {
                    // Si el scroll no ha llegado a este paso pero es el primero, lo dejamos listo y visible
                    opacity = isFirstItem ? 1 : 0;
                    translateY = isFirstItem ? 0 : 60;
                    pointerEvents = isFirstItem ? 'auto' : 'none';
                    currentProgress = 0;
                }

                // 1. EL CONTENEDOR PADRE: Ahora se queda 100% fijo y solo maneja los eventos del puntero
                step.style.pointerEvents = pointerEvents;
                step.style.visibility = pointerEvents === 'auto' ? 'visible' : 'hidden';

                // 2. LA COLUMNA DE TEXTO (IZQUIERDA): Ella absorbe toda la animación de barrido y fade
                const textContent = step.querySelector('.work-steps-content');
                if (textContent) {
                    textContent.style.opacity = opacity;
                    textContent.style.transform = `translateY(${translateY}px)`;
                    textContent.style.transition = 'none'; // El scroll manda en tiempo real
                }

                // 3. LA COLUMNA DEL CONTADOR (DERECHA): Ahora es 100% sólida y estática
                const counterColumn = step.querySelector('.counter-wrapper')?.parentElement;
                if (counterColumn) {
                    // Forzamos a que esté siempre visible al 100% cuando el paso esté activo
                    counterColumn.style.opacity = pointerEvents === 'auto' ? '1' : '0';
                    counterColumn.style.transition = 'none'; // Cambio numérico instantáneo tipo marcador
                }

                // 4. LA BARRA DE PROGRESO (SALTO FIJO)
                const progressBar = step.querySelector('.progress-bar');
                if (progressBar) {
                    let widthValue = '0%';
                    if (scrollProgress >= stepStart && scrollProgress < stepEnd) {
                        widthValue = `${((index + 1) / totalItems) * 100}%`;
                    } else if (scrollProgress >= stepEnd) {
                        widthValue = `${((index + 1) / totalItems) * 100}%`;
                    } else {
                        widthValue = `${(index / totalItems) * 100}%`;
                    }
                    progressBar.style.setProperty('width', widthValue, 'important');
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
    }, [workStepsData.length]);

    return (
        <>
            {/* INTRODUCCIÓN */}
            <div className='intro-scroll-wrapper-positive'>
                <div className='intro-sticky-box-positive'>
                    <div className='intro-content-positive'>
                        <h2 className='section-title-positive'>
                            <Trans i18nKey={'about.workSteps.opening.openingTitle'} components={[<span className='highlighted-text' />]} />
                        </h2>
                        <p className='font-p1 text-white'>
                            {t('about.workSteps.opening.openingDescription')}
                        </p>
                    </div>
                </div>
            </div >
            {/* CONTENEDOR PRINCIPAL DE PASOS */}
            < div className="work-steps-scroll-container" ref={containerRef} >
                <div className="intro-sticky-box-positive">
                    <div ref={trackRef} className="work-steps-track">
                        {workStepsData.map((item, index) => (
                            <div className="work-steps-layout" key={index}>
                                <div className="work-steps-content">
                                    <h3 className="work-steps-title">{item.title}</h3>
                                    <p className="work-steps-description">
                                        {item.desc}
                                    </p>
                                </div>
                                <div>
                                    <div className="counter-wrapper">
                                        <span className="work-steps-counter">[{index + 1}]</span>
                                        <span className="work-steps-total">/{workStepsData.length}</span>
                                    </div>
                                    <div className='container-bar'>
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}