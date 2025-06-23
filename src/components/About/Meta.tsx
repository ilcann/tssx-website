import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Meta = () => {
  const { t } = useTranslation('about');

  return (
    <Helmet>
        <title>{t("title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta name="keywords" content={t("meta.keywords")} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tssx.com/about" />
        <meta property="og:title" content="About TSS-X | IT Infrastructure & Automation Experts" />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:image" content="https://tssx.com/img/tssx/about-og.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://tssx.com/about" />
        <meta name="twitter:title" content="About TSS-X | IT Infrastructure & Automation Experts" />
        <meta name="twitter:description" content={t("meta.description")} />
        <meta name="twitter:image" content="https://tssx.com/img/tssx/about-og.png" />

        {/* Additional SEO */}
        <link rel="canonical" href="https://tssx.com/about" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TSS-X Information Technologies" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="Istanbul" />

        {/* Structured Data */}
        <script type="application/ld+json">
        {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
            "@type": "Organization",
            "name": "TSS-X Information Technologies",
            "url": "https://tssx.com",
            "logo": "https://tssx.com/img/tssx/tssx-light-logo.png",
            "foundingLocation": {
                "@type": "Place",
                "name": "Istanbul, Turkey"
            },
            "description":
                "IT Infrastructure management and automation services company offering best-fit automation solutions for specialized environments with end-to-end lifecycle management.",
            "expertise": [
                "IT Infrastructure Management",
                "Automation Solutions",
                "Cloud Provisioning",
                "Security Automation",
                "Compliance Management"
            ]
            }
        })}
        </script>
    </Helmet>
  );
};

export default Meta;