import { useState } from "react";
import { Link } from "react-router-dom";
import LogoNavbar from "../assets/img/LogoNavbar.svg";
import LogoNavMovil from "../assets/img/LogoNavMovil.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import LanguageSwitcher from "./LanguageSwitcher";

import { useTranslation } from "react-i18next";


export const Navbar = () => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
	};

	const closeMenu = () => {
		setIsOpen(false);
		document.body.style.overflow = 'auto';
	};

	return (
		<>
			{/* --- NAVBAR DE ESCRITORIO --- */}
			{/* <div className="container w-100 mb-5"></div> */}
			<nav className="navbar sticky-top navbar-expand-md d-none d-lg-block py-3 justify-content-center">
				<div className="container bg-black rounded-pill px-5 py-1 d-flex justify-content-between align-items-center">
					<Link className="navbar-brand" to="/">
						<img src={LogoNavbar} alt="CloudTech Logo" className="h-auto w-auto" />
					</Link>

					{/* <div className="d-none d-lg-flex justify-content-end w-100"> */}
					<ul className="navbar-nav flex-row align-items-center gap-3">
						<li className="nav-item">
							<Link className="nav-link text-white" to="/">{t('navbar.home')}</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white" to="/about">{t('navbar.about')}</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white" to="/services">{t('navbar.services')}</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white" to="/projects">{t('navbar.projects')}</Link>
						</li>
						<li className="nav-item">
							<LanguageSwitcher />
						</li>
						<li className="nav-item">
							<Link className="btn btn-outline-custom-yellow rounded-pill py-2 px-4 fw-medium" to="/contact">{t('navbar.contact')}</Link>
						</li>
					</ul>
					{/* </div>	 */}
				</div>
			</nav>

			{/* --- NAVBAR MÓVIL (TRIGGER) --- */}
			<div className="d-lg-none fixed-top bg-black d-flex justify-content-between align-items-center mx-3 mt-3 py-3 px-5 rounded-pill">
				<Link className="navbar-brand" to="/" onClick={closeMenu}>
					<img src={LogoNavbar} alt="CloudTech Logo" className="h-auto w-auto" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					onClick={toggleMenu}
					aria-label="Abrir menú de navegación"
				>
					<FontAwesomeIcon icon={faBars} className="fa-icon-yellow" size="xl" />
				</button>

			</div>


			<div className={`custom-menu-overlay ${isOpen ? 'active' : ''}`}>
				<div className="d-flex justify-content-between align-items-center border border-2 border-white mx-3 my-4 p-3 rounded-pill">
					<img src={LogoNavMovil} alt="CloudTech Logo Movil" className="h-auto w-auto" />
					<button
						type="button"
						className="btn"
						onClick={toggleMenu}
						aria-label="Cerrar menú"
					>
						<FontAwesomeIcon icon={faXmark} className="text-white" size="xl" />
					</button>
				</div>

				<div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
					<ul className="navbar-nav gap-4">
						<li className="nav-item">
							<Link className="nav-link text-white fs-2 fw-medium" to="/" onClick={closeMenu}>{t('navbar.home')}</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white fs-2 fw-medium" to="/about" onClick={closeMenu}>{t('navbar.about')}</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white fs-2 fw-medium" to="/services" onClick={closeMenu}>{t('navbar.services')}</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white fs-2 fw-medium" to="/projects" onClick={closeMenu}>{t('navbar.projects')}</Link>
						</li>
						<li className="nav-item d-flex align-items-center gap-3">
							<span className="text-white fs-2 fw-medium">{t('navbar.language')}</span> <LanguageSwitcher />
						</li>
					</ul>
					<div className="mt-5 w-100 px-4">
						<Link className="btn btn-outline-custom-yellow rounded-pill w-100 py-2 fs-5 fw-bold" to="/contact" onClick={closeMenu}>{t('navbar.contact')}</Link>
					</div>
				</div>
			</div>

		</>
	);
};