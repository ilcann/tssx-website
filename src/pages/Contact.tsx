import { Helmet } from "react-helmet-async";
import ContactPage from "@/components/Contact/ContactPage"
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>Contact TSS-X | Get Expert IT Infrastructure Consultation</title>
        <meta
          name="description"
          content={t("meta_contact_description")}
        />
        <meta
          name="keywords"
          content={t("meta_contact_keywords")}
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tssx.com/contact" />
        <meta
          property="og:title"
          content="Contact TSS-X | Get Expert IT Infrastructure Consultation"
        />
        <meta
          property="og:description"
          content={t("meta_contact_description")}
        />
        <meta property="og:image" content="https://tssx.com/img/tssx/contact-og.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tssx.com/contact" />
        <meta
          property="twitter:title"
          content="Contact TSS-X | Get Expert IT Infrastructure Consultation"
        />
        <meta
          property="twitter:description"
          content={t("meta_contact_description")}
        />
        <meta property="twitter:image" content="https://tssx.com/img/tssx/contact-og.png" />

        {/* Additional SEO */}
        <link rel="canonical" href="https://tssx.com/contact" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TSS-X Information Technologies" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="Istanbul" />
        
        {/* Structured Data for Contact */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "TSS-X Information Technologies",
              "url": "https://tssx.com",
              "logo": "https://tssx.com/img/tssx/tssx-light-logo.png",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+90-545-852-2713",
                  "contactType": "customer service",
                  "availableLanguage": ["Turkish", "English"],
                  "areaServed": "TR"
                },
                {
                  "@type": "ContactPoint",
                  "email": "info@tss-x.com",
                  "contactType": "customer service",
                  "availableLanguage": ["Turkish", "English"]
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "İçerenköy, Umut Sk. No:10 D:12",
                "addressLocality": "Ataşehir",
                "addressRegion": "Istanbul",
                "postalCode": "34752",
                "addressCountry": "TR"
              }
            }
          })}
        </script>
      </Helmet>
      <ContactPage />
    </>
  )
}

export default Contact
