import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next";

export const SEO = ({
    title,
    description,
    name = "CloudTech",
    type = "website",
    image = "https://cloudtech.com.ec/assets/LogoNavbar-Cw3ty4Sl.svg",
    url = "https://cloudtech.com.ec/"
}) => {
    const { t } = useTranslation();
    return (
        <Helmet>
            {/* Etiquetas Estándar */}
            <title>{t(title)} | {name}</title>
            <meta name='description' content={description} />

            {/* Etiquetas Open Graph (Facebook, LinkedIn, WhatsApp) */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={t(title)} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />

            {/* Etiquetas Twitter */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    )
};