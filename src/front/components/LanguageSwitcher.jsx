import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import flagES from '../assets/img/Flags/es.svg'
import flagEN from '../assets/img/Flags/us.svg'

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [activeFlag, setActiveFlag] = useState(i18n.language === 'es' ? flagES : flagEN);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setActiveFlag(i18n.language === 'es' ? flagES : flagEN);
    }, [i18n.language])

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <div className={`btn-group ${isOpen ? 'show' : ''}`}>
            <button
                type="button"
                className="btn btn-link dropdown-toggle p-0"
                aria-expanded={isOpen}
                onClick={toggleMenu}
            >
                <img src={activeFlag} alt="current language" className='flag-icon-main' />
            </button>
            <ul className={`dropdown-menu dropdown-menu-dark ${isOpen ? 'show' : ''}`}
                style={{
                    position: 'absolute',
                    inset: '0px auto auto 0px',
                    margin: '0px',
                    transform: isOpen ? 'translate(-10px, 40px)' : 'none',
                    display: isOpen ? 'block' : 'none',
                    minWidth: '0',
                    width: 'auto'
                }}
            >
                <li>
                    <button className='dropdown-item' onClick={() => changeLanguage('es')}>
                        <img src={flagES} alt="Español" className='flag-icon-dropdown' />
                    </button>
                </li>
                <li>
                    <button className='dropdown-item' onClick={() => changeLanguage('en')}>
                        <img src={flagEN} alt="English" className='flag-icon-dropdown' />
                    </button>
                </li>

            </ul>
        </div>

    );
}

export default LanguageSwitcher; 