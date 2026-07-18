import logoFooter from "../assets/img/logoFooterMin.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link, Navigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

const contactEmail = "dev@cloudtech.com.ec";
const whatsAppPhoneNo = "593978879838";
const whatsAppMessage = "Hola, tengo una idea y quisiera que le demos vida juntos.";
const currentYear = (new Date()).getFullYear();

const formatPhoneNo = (rawNoString) => `+${rawNoString.slice(0, 3)} ${rawNoString.slice(3, 5)} ${rawNoString.slice(5, 8)} ${rawNoString.slice(8, 12)}`;


// const size = 43, radius = 23;
// const size = 100, radius = 50, originalSize = 43, sizesRatio = 0.7;
const size = 100, radius = 50, originalSize = 43, sizesRatio = 0.63;
const textProp = "Hablemos de tu proyecto";

const RotatingLogo = ({ className, style: externalStyle, text: textProp = "Ingresa tu texto", duration = "20s" }) => {
	return (
		<div className={className} style={{ color: "var(--bs-secondary-2)", ...externalStyle }}>
			<svg
				viewBox={`0 0 ${size} ${size}`}
				xmlns="http://www.w3.org/2000/svg"
				style={{ width: '100%' }}
			>
				<defs>
					<path id="text-circle" d={`
            M ${size / 2}, ${size / 2}
            m 0, -${radius}
            a ${radius},${radius} 0 1,1 0,${radius * 2}
            a ${radius},${radius} 0 1,1 0,-${radius * 2}
          `} />
				</defs>

				<g>
					<animateTransform
						attributeName="transform"
						type="rotate"
						from={`0 ${size / 2} ${size / 2}`}
						to={`360 ${size / 2} ${size / 2}`}
						dur={duration}
						repeatCount="indefinite"
					/>

					<text
						fill="currentColor"
						fontFamily="system-ui, sans-serif"
						fontSize="9.5"
						fontWeight="600"
					// letterSpacing="-4.47"
					// letterSpacing={5}
					>
						<textPath
							href="#text-circle"
							// startOffset="0"
							// textLength="238"
							textLength={2 * Math.PI * radius - 2}
							// textLength="238"
							// lengthAdjust="spacing"
							// lengthAdjust="spacingAndGlyphs"
							// method="align"
							// method="stretch"
							// spacing="exact"
							// spacing="auto"
							// side="left"
							// side="right"
							alignmentBaseline="before-edge"
						>
							{/* {`Hablemos de tu proyecto · Hablemos de tu proyecto · `} */}
							{textProp} · {textProp} ·&nbsp;
							{/* Let's talk about your project · Let's talk about your project · */}
						</textPath>
					</text>
				</g>

				{/* <g transform={`translate(${size / 2}, ${size / 2}) scale(1)`}> */}
				<g transform={`translate(${size / 2 - (originalSize / 2) * (sizesRatio * radius / (originalSize / 2)) + 1} ${size / 2 - (originalSize / 2) * (sizesRatio * radius / (originalSize / 2)) + 0.5}) scale(${sizesRatio * radius / (originalSize / 2)})`}>
					<path d="M50 50 M5.58627 6.7648C9.41738 2.65671 14.8692 0.0898438 20.9162 0.0898438C26.9631 0.0898438 32.0201 2.47571 35.8238 6.32876C32.7578 5.26746 29.9989 4.68333 26.3159 4.72172C22.419 4.76285 19.7534 5.96402 15.0475 7.88917C10.6844 9.6772 8.01602 7.53541 5.58627 6.76754V6.7648Z" fill="currentColor" />
					<path d="M50 50 M0.106949 18.4169C0.447004 15.754 1.28617 13.2475 2.52573 10.9933C4.17116 11.7995 9.47218 14.775 13.3252 12.6058C18.4233 9.73725 19.7013 7.73531 25.6961 7.60368C29.4011 7.52141 34.4114 8.70063 38.6045 9.81404C40.0662 12.1067 41.0973 14.701 41.58 17.4817C40.9437 17.1718 39.6822 16.5548 38.2425 15.8144C35.8813 14.6022 30.8298 12.3288 26.2418 11.9229C14.5867 10.9686 21.4262 24.8889 8.67963 22.0204C6.33764 21.4938 2.78351 20.002 0.106949 18.4169Z" fill="currentColor" />
					<path d="M50 50 M1.05581 27.9001C0.499106 26.2656 0.137119 24.5406 0 22.7526C1.54944 23.5259 6.59268 25.8844 11.3589 26.3725C17.0768 26.9567 19.0787 25.0946 20.4801 21.365C21.9829 17.3638 23.121 15.7129 27.5883 15.8171C30.0455 15.8967 33.5448 17.3693 37.3704 19.7579C39.238 20.9344 40.7737 21.7461 41.8652 22.1904C41.7747 23.9812 41.4593 25.7116 40.9492 27.3571C39.2325 26.8278 38.1191 26.1038 36.4051 24.8149C32.1379 21.6008 27.7529 20.1227 26.2555 23.792C24.7582 27.4613 21.1163 30.2832 15.6096 31.0812C10.4073 31.8354 4.39056 29.0848 1.05308 27.9028L1.05581 27.9001Z" fill="currentColor" />
					<path d="M50 50 M39.5972 30.6752C36.1199 37.4736 29.0555 42.1302 20.9162 42.1302C12.7768 42.1302 6.10729 37.7314 2.53397 31.2402C5.06519 32.0684 9.26925 34.5173 17.1838 33.6836C25.7729 32.7786 27.4814 28.2071 29.1735 26.1805C30.9697 24.1127 33.2459 27.1705 35.533 28.8433C37.3211 30.1377 38.5359 30.4915 39.6 30.6725L39.5972 30.6752Z" fill="currentColor" />
				</g>
			</svg>
		</div>
	);
};

export const Footer = ({ withBrandCard = true }) => {
	const { t } = useTranslation();

	return (
		<footer className="footer mt-auto" style={{ color: "var(--bs-gray-100)", /* scrollSnapAlign: "end", */ padding: "80px 90px" }}>
			<div className="container g-0">
				{/* Optional Animated Brand Card */}
				{withBrandCard && (
					<div className="row justify-content-center mx-auto" style={{ width: "fit-content", maxWidth: "100%", marginBottom: 80 }}>
						<Link to='/contact' style={{ textDecoration: 'none' }}>
							<div className="col-auto d-none d-md-flex align-items-center border" style={{ maxWidth: 827, gap: 62, padding: "60px 70px", borderRadius: 12, userSelect: "none" }}>
								{/* <img src={logoFooter} alt="clooudTech logo" className="mb-3" style={{ width: 192 }} /> */}
								{/* <RotatingLogo style={{ width: 192, scale: "2.4" }} /> */}
								{/* <RotatingLogo style={{ width: 43 }} /> */}
								<RotatingLogo text={t("footer.welcomingSentence")} duration="30s" style={{ maxWidth: 192 }} />
								{/* <p className="text-white w-75 d-none d-sm-block">{t('footer.footerSlogan')}</p> */}
								<p className="w-75 d-none d-sm-block font-h1" style={{ color: "var(--bs-secondary-2)", width: 429, lineHeight: "1.2" }}>
									<Trans i18nKey="footer.footerSlogan" components={[<span className="highlighted-text" style={{ "--highlighted-text-bg": "var(--bs-secondary-2)" }} />]} />
									{/* NOS ENCANTARÍA CONOCER TU <span className="highlighted-text" style={{"--highlighted-text-bg": "var(--bs-secondary-2)"}}>IDEA</span> */}
								</p>
							</div>
							<div className="footer-card col-auto w-100 d-flex flex-column d-md-none align-items-center border" style={{ maxWidth: 827, gap: 62, borderRadius: 12, userSelect: "none" }}>
								<p className="w-75 font-h1" style={{ color: "var(--bs-secondary-2)", width: 429, lineHeight: "1.2" }}>
									<Trans i18nKey="footer.footerSlogan" components={[<span className="highlighted-text" style={{ "--highlighted-text-bg": "var(--bs-secondary-2)" }} />]} />
									{/* NOS ENCANTARÍA CONOCER TU <span className="highlighted-text" style={{"--highlighted-text-bg": "var(--bs-secondary-2)"}}>IDEA</span> */}
								</p>
								<RotatingLogo text={t("footer.welcomingSentence")} duration="30s" style={{ maxWidth: 192 }} />
							</div>
						</Link>
					</div>
				)}
				<div className="footer-main-info d-flex flex-column flex-md-row justify-content-between align-items-center font-p1 fw-bold text-nowrap" style={{ width: "100%", maxWidth: "100vw", gap: 80, fontSize: 18, lineHeight: "1.8", letterSpacing: "5.5%" }}>

					{/* Site Sections */}
					<div className="d-none d-sm-flex align-items-center justify-content-start" style={{ gap: 40 }}>
						{/* <Link to={"/"} className="footerLink fs-5 fw-bold">CloudTech</Link> */}
						{[
							{ path: "/about", label: t('footer.sections.about') },
							{ path: "/services", label: t('footer.sections.services') },
							{ path: "/projects", label: t('footer.sections.projects') },
							{ path: "/contact", label: t('footer.sections.contact') },
						].map((linkElement, idx) => <Link key={idx} to={linkElement.path} className="footerLink">{linkElement.label}</Link>)}
					</div>

					{/* Socials */}
					<div className="d-flex justify-content-center align-items-center" style={{ gap: 15 }}>
						{[
							{ url: "https://www.facebook.com/CloudTechEc/", ariaLabel: "Visitar nuestra página de Facebook", icon: faFacebookSquare },
							{ url: "https://www.instagram.com/cloudtechec/", ariaLabel: "Síguenos en Instagram", icon: faInstagram },
							{ url: "https://www.linkedin.com/company/cloudtech-ec/", ariaLabel: "Conócenos en LinkedIn", icon: faLinkedin },
							{ url: `https://wa.me/${whatsAppPhoneNo}?text=${whatsAppMessage}`, ariaLabel: "Habla con nosotros por WhatsApp", icon: faWhatsapp },
						].map((socialLink, idx) => (
							<a
								key={idx}
								href={socialLink.url}
								target="_blank"
								className="link-custom-hover"
								rel="noopener noreferrer"
								aria-label={socialLink.ariaLabel}
								style={{ display: "contents", color: "var(--bs-gray-100)" }}
							>
								<FontAwesomeIcon icon={socialLink.icon} style={{ width: 36, height: 36 }} />
							</a>
						))}
					</div>

					{/* Contact */}
					<div className="footer-contact-info d-flex flex-column flex-xxl-row align-items-center align-md-items-end align-xxl-items-center justify-xxl-content-end" style={{ gap: 30 }}>
						<Link to={`mailto:${contactEmail}`} className="footerLink">{contactEmail}</Link>
						<Link to={`https://wa.me/${whatsAppPhoneNo}?text=${whatsAppMessage}`} className="footerLink">{formatPhoneNo(whatsAppPhoneNo)}</Link>
					</div>
					<style>{`
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
					`}</style>

				</div>
			</div>
			<hr className="opacity-100" style={{ border: "1px solid var(--bs-gray-100)", marginTop: 40, marginBottom: 20 }} />
			<div className="d-none d-md-block text-center">
				<p> <span className="font-p1" style={{ color: "var(--bs-secondary-1)", fontSize: 14, lineHeight: "1.8" }}>© {currentYear} CloudTech</span> <span className="text-ct-gray"> | {t('footer.copywright')}</span> </p>
			</div>
			<div className="d-md-none text-center">
				<p> <span className="font-p1" style={{ color: "var(--bs-secondary-1)", fontSize: 14, lineHeight: "1.8" }}>© {currentYear} CloudTech</span> <span className="text-ct-gray"> <br /> {t('footer.copywright')}</span> </p>
			</div>
			<style>{`
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
							p {
								width: 100% !important;
								font-size: 2.5rem;
							}
						}
					}
				}
			`}</style>
		</footer>
	)

};
