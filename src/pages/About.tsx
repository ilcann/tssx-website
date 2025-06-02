import { Helmet } from "react-helmet-async";
import About from "@/components/About/AboutPage";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About TSS-X | IT Infrastructure & Automation Experts</title>
        <meta
          name="description"
          content="Learn about TSS-X Information Technologies - Your trusted IT infrastructure management partner. Discover our team of experts from Istanbul Technical University with proven track record in enterprise automation solutions."
        />
        <meta
          name="keywords"
          content="about TSS-X, IT infrastructure experts, automation specialists, enterprise IT, Istanbul Technical University, system engineers, principal consultants, IT management team, technology leadership"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tssx.com/about" />
        <meta
          property="og:title"
          content="About TSS-X | IT Infrastructure & Automation Experts"
        />
        <meta
          property="og:description"
          content="Discover TSS-X's legacy of excellence in IT infrastructure management. Meet our dynamic team of professionals with expertise from prominent companies and ITU background."
        />
        <meta property="og:image" content="https://tssx.com/img/tssx/about-og.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tssx.com/about" />
        <meta
          property="twitter:title"
          content="About TSS-X | IT Infrastructure & Automation Experts"
        />
        <meta
          property="twitter:description"
          content="Learn about our team's expertise in IT infrastructure management and automation solutions for enterprise clients."
        />
        <meta property="twitter:image" content="https://tssx.com/img/tssx/about-og.png" />

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
              "description": "IT Infrastructure management and automation services company offering best-fit automation solutions for specialized environments with end-to-end lifecycle management.",
              "expertise": ["IT Infrastructure Management", "Automation Solutions", "Cloud Provisioning", "Security Automation", "Compliance Management"]
            }
          })}
        </script>
      </Helmet>
      <About />
    </>
  );
};

export default AboutPage;
