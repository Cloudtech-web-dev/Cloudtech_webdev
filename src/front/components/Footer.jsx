import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

import customFormats from "../utils/customFormats";

import { RotatingLogo } from "./Footer/RotatingLogo";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const contactEmail = "dev@cloudtech.com.ec";
const whatsAppPhoneNo = "593978879838";
const currentYear = (new Date()).getFullYear();

const siteSections = ["about", "services", "projects", "contact"];
const socials = {
	facebook:  { url: "https://www.facebook.com/CloudTechEc/", icon: faFacebookSquare },
	instagram: { url: "https://www.instagram.com/cloudtechec/", icon: faInstagram },
	linkedin:  { url: "https://www.linkedin.com/company/cloudtech-ec/", icon: faLinkedin },
	whatsapp:  { url: `https://wa.me/${whatsAppPhoneNo}`, icon: faWhatsapp }
};


export const Footer = ({ withBrandCard = true }) => {
	const { t } = useTranslation();

	
	socials.whatsapp.url = `https://wa.me/${whatsAppPhoneNo}?text=${t('footer.socials.whatsapp.urlMessage')}`;


	return (
		<footer className="footer mt-auto d-flex flex-column justify-content-end" style={{ color: "var(--bs-gray-100)", scrollSnapAlign: "end", padding: "80px 90px", interpolateSize: "allow-keywords", transition: "height 0.5s 0.5s ease" }}>
			
			{/* Upper half => Brand Card & Main Links */}
			<div className="container g-0 flex-grow-1 d-flex flex-column justify-content-end">

				{/* (optional) Animated Brand Card */}
				{withBrandCard && (
					<div className="row flex-grow-1 justify-content-center align-content-center mx-auto" style={{ width: "fit-content", maxWidth: "100%", marginBottom: 80 }}>
						<Link to='/contact' style={{ textDecoration: 'none' }}>
							<div className="footer-card col-auto d-flex flex-column-reverse flex-md-row align-items-center border" style={{ maxWidth: 827, width: "auto", gap: 62, padding: "60px 70px", borderRadius: 12, userSelect: "none" }}>
								
								{/* Animated Logo */}
								<RotatingLogo text={t("footer.welcomingSentence")} duration="30s" style={{ maxWidth: 192 }} />
								
								{/* Slogan */}
								<p className="w-75 font-h1 text-center text-md-start" style={{ color: "var(--bs-secondary-2)", width: 429, lineHeight: "1.2" }}>
									<Trans i18nKey="footer.footerSlogan" components={[<span className="highlighted-text" style={{ "--highlighted-text-bg": "var(--bs-secondary-2)" }} />]} />
								</p>
								
							</div>
						</Link>
					</div>
				)}
				
				{/* Main Links Component */}
				<div className="footer-main-info d-flex flex-column flex-lg-row justify-content-between align-items-center fw-bold text-nowrap" style={{ width: "100%", maxWidth: "100vw", gap: 20, fontSize: 18, lineHeight: "1.8", letterSpacing: "5.5%" }}>

					{/* Site Sections */}
					<div className="d-none d-sm-flex align-items-center justify-content-start" style={{ gap: 40 }}>
						{siteSections.map((linkElement, idx) => (
							<Link key={linkElement} to={`/${linkElement}`} className="footerLink">
								{t(`footer.sections.${linkElement}`)}
							</Link>
						))}
					</div>

					{/* Socials */}
					<div className="d-flex justify-content-center align-items-center" style={{ gap: 15 }}>
						{Object.entries(socials).map(([elementId, socialLink], idx) => (
							<a key={idx} href={socialLink.url} target="_blank" className="link-custom-hover" rel="noopener noreferrer" aria-label={t(`footer.socials.${elementId}.ariaLabel`)}>
								<FontAwesomeIcon icon={socialLink.icon} style={{ width: 36, height: 36 }} />
							</a>
						))}
					</div>

					{/* Contact */}
					<div className="footer-contact-info d-flex flex-column flex-xxl-row align-items-center align-md-items-end align-xxl-items-center justify-xxl-content-end" style={{ gap: 30 }}>
						<Link to={`mailto:${contactEmail}`} className="footerLink">{contactEmail}</Link>
						<Link to={socials.whatsapp.url} className="footerLink">{customFormats.PhoneNumber(whatsAppPhoneNo)}</Link>
					</div>

				</div>
				
			</div>

			{/* Horizontal Rule */}
			<hr className="opacity-100" style={{ border: "1px solid var(--bs-gray-100)", marginTop: 40, marginBottom: 20 }} />

			{/* Copyright Statements */}
			<div className="text-center">
				<p>
					<span className="font-p1" style={{ color: "var(--bs-secondary-1)", fontSize: 14, lineHeight: "1.8" }}>
						© {currentYear} CloudTech
					</span>
					<span className="d-block d-md-inline text-ct-gray">
						<span className="d-none d-md-inline"> | </span>
						{t('footer.copywright')}
					</span>
					<span className="d-block d-md-inline text-ct-gray mt-2 mt-md-0">
						<span className="d-none d-md-inline"> | </span>
						<Link to="/terms-conditions" className="footer-legal-link">
							{t('footer.termsAndPrivacy')}
						</Link>
					</span>
				</p>
			</div>
			
			{/* Component Styles */}
			<style>{`
				.footer-legal-link {
					color: inherit;
					text-decoration: underline;
					text-underline-offset: 3px;
					transition: opacity 0.3s ease, color 0.3s ease;
				}
				.footer-legal-link:hover {
					opacity: 0.8;
					color: var(--bs-secondary-1);
				}
				@media (width < 1400px) {
					.footer-contact-info {
						gap: 0 !important;
					}
				}
				@media (width < 768px) {
					.footer-main-info {
						gap: 20px !important;
						.footer-contact-info {
							gap: 10px !important;
						}
					}
				}
				@media (width < 768px) {
					footer.footer {
						padding: 0 10px 20px 10px !important;
						margin-top: 50px !important;

						hr {
							width: calc(100% - 160px) !important;
							margin-inline: auto
						}

						.footer-card {
							gap: 20px !important;
							padding: 20px 30px !important;
							width: 100% !important;

							p {
								width: 100% !important;
								font-size: 2.5rem;
							}
						}
					}
				}
					
				${withBrandCard && `
					@media (width >= 768px) {
						@container scroller not scroll-state(scrollable: bottom) {
							footer {
								height: 100dvh;
							}
						}
					}
				`}
			`}</style>
		
		</footer>
	)
};
