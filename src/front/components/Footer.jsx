import logoFooter from "../assets/img/logoFooterMin.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const whatsAppPhoneNo = "593978879838";
const whatsAppMessage = "Hola, tengo una idea y quisiera que le demos vida juntos.";

const RotatingLogo = ({ className, style: externalStyle }) => {
	return (
		<div className={className} style={{ width: '100%', maxWidth: '250px', margin: '0 auto', ...externalStyle }}>
			<svg
				className="animated-logo"
				viewBox="0 0 120 120"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{ display: 'block', width: '100%', height: 'auto' }}
			>
				<defs>
					<path id="text-circle" d="
            M 60, 60
            m 0, -28
            a 28,28 0 1,1 0,56
            a 28,28 0 1,1 0,-56
          " />
				</defs>

				<g>
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 60 60"
						to="360 60 60"
						dur="20s"
						repeatCount="indefinite"
					/>

					<text
						fill="#73BF9C"
						fontFamily="system-ui, sans-serif"
						fontSize="8"
						fontWeight="500"
						letterSpacing="-4.47"
					>
						<textPath href="#text-circle" startOffset="0" textLength="238" lengthAdjust="spacing">
							Hablemos de tu proyecto · Hablemos de tu proyecto ·
							{/* Let's talk about your project · Let's talk about your project · */}
						</textPath>
					</text>
				</g>

				<g transform="translate(38.5, 38.5)">
					<path d="M5.58627 6.7648C9.41738 2.65671 14.8692 0.0898438 20.9162 0.0898438C26.9631 0.0898438 32.0201 2.47571 35.8238 6.32876C32.7578 5.26746 29.9989 4.68333 26.3159 4.72172C22.419 4.76285 19.7534 5.96402 15.0475 7.88917C10.6844 9.6772 8.01602 7.53541 5.58627 6.76754V6.7648Z" fill="#73BF9C" />
					<path d="M0.106949 18.4169C0.447004 15.754 1.28617 13.2475 2.52573 10.9933C4.17116 11.7995 9.47218 14.775 13.3252 12.6058C18.4233 9.73725 19.7013 7.73531 25.6961 7.60368C29.4011 7.52141 34.4114 8.70063 38.6045 9.81404C40.0662 12.1067 41.0973 14.701 41.58 17.4817C40.9437 17.1718 39.6822 16.5548 38.2425 15.8144C35.8813 14.6022 30.8298 12.3288 26.2418 11.9229C14.5867 10.9686 21.4262 24.8889 8.67963 22.0204C6.33764 21.4938 2.78351 20.002 0.106949 18.4169Z" fill="#73BF9C" />
					<path d="M1.05581 27.9001C0.499106 26.2656 0.137119 24.5406 0 22.7526C1.54944 23.5259 6.59268 25.8844 11.3589 26.3725C17.0768 26.9567 19.0787 25.0946 20.4801 21.365C21.9829 17.3638 23.121 15.7129 27.5883 15.8171C30.0455 15.8967 33.5448 17.3693 37.3704 19.7579C39.238 20.9344 40.7737 21.7461 41.8652 22.1904C41.7747 23.9812 41.4593 25.7116 40.9492 27.3571C39.2325 26.8278 38.1191 26.1038 36.4051 24.8149C32.1379 21.6008 27.7529 20.1227 26.2555 23.792C24.7582 27.4613 21.1163 30.2832 15.6096 31.0812C10.4073 31.8354 4.39056 29.0848 1.05308 27.9028L1.05581 27.9001Z" fill="#73BF9C" />
					<path d="M39.5972 30.6752C36.1199 37.4736 29.0555 42.1302 20.9162 42.1302C12.7768 42.1302 6.10729 37.7314 2.53397 31.2402C5.06519 32.0684 9.26925 34.5173 17.1838 33.6836C25.7729 32.7786 27.4814 28.2071 29.1735 26.1805C30.9697 24.1127 33.2459 27.1705 35.533 28.8433C37.3211 30.1377 38.5359 30.4915 39.6 30.6725L39.5972 30.6752Z" fill="#73BF9C" />
				</g>
			</svg>
			<style>{`
				// .animated-logo {
				// 	width: 250px; 
				// 	height: 250px;
				// }
			`}</style>
		</div>
	);
};

export const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className="footer mt-auto py-3 mx-3">
			<div className="container">
				<div className="row justify-content-center" style={{ marginBottom: 80 }}>
					{/* Brand */}
					<div className="col-auto d-flex align-items-center border" style={{ width: 827, gap: 62, padding: "60px 70px", borderRadius: 12 }}>
						{/* <img src={logoFooter} alt="clooudTech logo" className="mb-3" style={{ width: 192 }} /> */}
						<RotatingLogo style={{ width: 192, scale: "2.4" }} />
						{/* <p className="text-white w-75 d-none d-sm-block">{t('footer.footerSlogan')}</p> */}
						<p className="w-75 d-none d-sm-block font-h1" style={{ color: "var(--bs-secondary-2)", width: 429, lineHeight: "1.2" }}>
							NOS ENCANTARÍA CONOCER TU&nbsp;
							<span className="position-relative" style={{ color: "var(--bs-gray-1000)" }}>
								<span className="position-absolute" style={{ zIndex: -1, top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "var(--bs-secondary-2)" }} />
								IDEA
							</span>
						</p>
					</div>
				</div>
				<div className="d-flex justify-content-between align-items-center">
					{/* <div className="col text-center text-sm-start"> */}

					{/* Site Sections */}
					<div className="text-white text-end d-flex d-none gap-3 d-sm-flex align-items-center">
						{/* <Link to={"/"} className="footerLink fs-5 fw-bold">CloudTech</Link> */}
						<Link to={"/about"} className="footerLink fs-5">{t('footer.sections.about')}</Link>
						<Link to={"/services"} className="footerLink fs-5">{t('footer.sections.services')}</Link>
						<Link to={"/projects"} className="footerLink fs-5">{t('footer.sections.projects')}</Link>
						<Link to={"/contact"} className="footerLink fs-5">{t('footer.sections.contact')}</Link>
					</div>

					{/* Socials */}
					<div className="fs-2 d-flex gap-3 text-white justify-content-center justify-content-sm-start align-items-center">
						<a
							href="https://www.facebook.com/CloudTechEc/"
							target="_blank"
							className="link-custom-hover"
							rel="noopener noreferrer"
							aria-label="Visitar nuestra página de Facebook"
						>
							<FontAwesomeIcon icon={faFacebookSquare} />
						</a>
						<a
							href="https://www.instagram.com/cloudtechec/"
							target="_blank"
							className="link-custom-hover"
							rel="noopener noreferrer"
							aria-label="Síguenos en Instagram"
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a
							href="https://www.linkedin.com/company/cloudtech-ec/"
							target="_blank"
							className="link-custom-hover"
							rel="noopener noreferrer"
							aria-label="Conócenos en LinkedIn"
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
						{/* <a
								href="https://www.facebook.com/CloudTechEc/"
								target="_blank"
								className="link-custom-hover"
							>
								<FontAwesomeIcon icon={faYoutube} />
							</a> */}
						<a
							href={`https://wa.me/${whatsAppPhoneNo}?text=${whatsAppMessage}`}
							target="_blank"
							className="link-custom-hover"
							rel="noopener noreferrer"
							aria-label="Habla con nosotros por WhatsApp"
						>
							<FontAwesomeIcon icon={faWhatsapp} />
						</a>
					</div>

					{/* Contact */}
					<div className="d-flex gap-4 align-items-center">
						<p className="text-white fw-bold m-0">dev@cloudtech.com.ec</p>
						<p className="text-white fw-bold m-0">+{whatsAppPhoneNo}</p>
					</div>

					{/* </div> */}
				</div>
			</div>
			<hr className="my-3 border border-white border-1 opacity-100" />
			<div className="text-center">
				<p> <span className="text-ct-secondary">© 2025 CloudTech</span> <span className="text-ct-gray"> | All Rights Reserved.</span> </p>
			</div>
		</footer>
	)

};
