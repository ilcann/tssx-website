import { Helmet } from "react-helmet-async";
import Hero from "@/components/MainPage/hero/Hero";
import LoadingPage from "@/components/ui/LoadingPage";
import { Suspense } from "react";
import LazySection from "@/components/LazySection";
import {
  LazyReferences,
  LazyFAQSection,
  LazyContactSection,
  LazyTestimonials,
} from "@/components/LazyComponents";
import IntersectionObserver from "@/components/IntersectionObserver";
import Solutions from "@/components/MainPage/solutions/Solutions";
import Partners from "@/components/MainPage/PartnersSection";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>TSS-X | Enterprise IT Infrastructure & Automation Solutions</title>
        <meta
          name="description"
          content="TSS-X Information Technologies provides enterprise IT infrastructure management and automation solutions. Specializing in hybrid cloud provisioning, AIOps observability, compliance management, and security automation in Istanbul, Turkey."
        />
        <meta
          name="keywords"
          content="TSS-X, IT automation, enterprise IT infrastructure, hybrid cloud provisioning, AIOps observability, compliance management, patch management automation, security automation, business process automation, vulnerability management, Istanbul IT company, BMC Software, HashiCorp"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tssx.com/" />
        <meta
          property="og:title"
          content="TSS-X | Enterprise IT Infrastructure & Automation Solutions"
        />
        <meta
          property="og:description"
          content="Transform your IT infrastructure with TSS-X's intelligent automation solutions. Expert consultation, rapid implementation, and 24/7 support for enterprise clients."
        />
        <meta property="og:image" content="https://tssx.com/img/tssx/homepage-og.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tssx.com/" />
        <meta
          property="twitter:title"
          content="TSS-X | Enterprise IT Infrastructure & Automation Solutions"
        />
        <meta
          property="twitter:description"
          content="Leading IT infrastructure management and automation services with expertise in cloud, security, and compliance solutions."
        />
        <meta property="twitter:image" content="https://tssx.com/img/tssx/homepage-og.png" />

        {/* Additional SEO */}
        <link rel="canonical" href="https://tssx.com/" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="TSS-X Information Technologies" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="Istanbul" />
        <meta name="language" content="English" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />

        {/* Structured Data for Homepage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TSS-X Information Technologies",
            "alternateName": "TSS-X",
            "url": "https://tssx.com",
            "logo": "https://tssx.com/img/tssx/tssx-light-logo.png",
            "description": "IT Infrastructure management and automation services company offering best-fit automation solutions for specialized environments with end-to-end lifecycle management.",
            "foundingDate": "2020",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "İçerenköy, Umut Sk. No:10 D:12",
              "addressLocality": "Ataşehir",
              "addressRegion": "Istanbul",
              "postalCode": "34752",
              "addressCountry": "TR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+90-545-852-2713",
              "contactType": "customer service",
              "email": "info@tss-x.com",
              "availableLanguage": ["Turkish", "English"],
              "areaServed": "TR"
            },
            "sameAs": [
              "https://www.linkedin.com/company/tss-x/"
            ],
            "serviceArea": {
              "@type": "Country",
              "name": "Turkey"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "IT Infrastructure Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hybrid Cloud Provisioning",
                    "description": "Automated cloud infrastructure provisioning and management solutions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AIOps Observability Platform",
                    "description": "AI-powered monitoring and observability solutions for IT operations"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Compliance Automation",
                    "description": "Automated compliance management and regulatory adherence solutions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Security Automation",
                    "description": "Automated security monitoring and threat response solutions"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <main id="main">
        <Suspense fallback={<LoadingPage />}>
          <Hero />
          <Partners />
          <Solutions />
          <IntersectionObserver>
            <LazySection>
              <LazyReferences />
            </LazySection>
          </IntersectionObserver>
          <IntersectionObserver>
            <LazySection>
              <LazyTestimonials />
            </LazySection>
          </IntersectionObserver>
          <IntersectionObserver>
            <LazySection>
              <LazyFAQSection />
            </LazySection>
          </IntersectionObserver>
          <IntersectionObserver>
            <LazySection>
              <LazyContactSection />
            </LazySection>
          </IntersectionObserver>
        </Suspense>
      </main>
    </>
  );
};

export default MainPage;
