import { useTranslation } from "react-i18next"
import Request from '../../assets/img/Contact/solicitud.svg'
import ContactYou from '../../assets/img/Contact/contactyou.svg'
import RoadMap from '../../assets/img/Contact/roadmap.svg'

export const Afterwards = () => {
    const { t } = useTranslation();

    const afterwardsData = [
        { title: t('contact.afterwards.steps.step1.title'), description: t('contact.afterwards.steps.step1.description'), icon: Request },
        { title: t('contact.afterwards.steps.step2.title'), description: t('contact.afterwards.steps.step2.description'), icon: ContactYou },
        { title: t('contact.afterwards.steps.step3.title'), description: t('contact.afterwards.steps.step3.description'), icon: RoadMap }
    ]

    return (
        <div className="afterwards-wrapper">
            <h2 className='afterwards-title'>{t('contact.afterwards.opening.title')}</h2>
            <div className='afterwards-steps px-4 px-md-5 px-lg-5'>
                {afterwardsData.map((item, index) => (
                    <div key={index} className={`row align-items-center mb-5 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                        <div className="col-md-6 d-flex flex-column text-center text-md-start gap-3">
                            <h3 className="afterwards-step-title">{item.title}</h3>
                            <p className="afterwards-step-description">{item.description}</p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center py-3">
                            <img src={item.icon} alt={item.name} style={{ maxWidth: '100%', height: 'auto', maxHeight: '150px' }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}