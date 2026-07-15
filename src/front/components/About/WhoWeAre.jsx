import { useTranslation } from "react-i18next"
import '../../styles/StickyLayout.css';

export const WhoWeAre = () => {
    const { t } = useTranslation();

    return (
        <div className='intro-scroll-wrapper-positive'>
            <div className='intro-sticky-box-positive'>
                <div className='intro-content-positive'>
                    <h2 className='section-title-positive'>{t('about.sectionTitle')}</h2>
                    <p className='intro-text-positive'>
                        {t('about.sectionDescription')}
                    </p>
                </div>
            </div>
        </div>
    );
};