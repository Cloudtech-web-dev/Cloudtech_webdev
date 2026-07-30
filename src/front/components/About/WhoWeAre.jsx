import { Trans, useTranslation } from "react-i18next"
import '../../styles/StickyLayout.css';

export const WhoWeAre = () => {
    const { t } = useTranslation();

    return (
        <div className='intro-scroll-wrapper-positive'>
            <div className='intro-sticky-box-positive'>
                <div className='intro-content-positive'>
                    <h2 className='section-title-positive'>
                        <Trans i18nKey={'about.sectionTitle'} components={[<span className="highlighted-text" />]} />
                    </h2>
                    <p className='font-p1 text-white'>
                        {t('about.sectionDescription')}
                    </p>
                </div>
            </div>
        </div>
    );
};