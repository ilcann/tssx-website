import { Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./components/header/Header";
import About from "./pages/About";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer/Footer";
import Solution from "./pages/Solution";
import Contact from "./pages/Contact";
import BackToTop from "./components/ui/BackToTop";
import References from "./pages/References";
import PartnersPage from "./pages/Partners";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const location = useLocation();
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>{t("app_title")}</title>
        <meta
          name="description"
          content="TSS-X Information Technologies provides enterprise IT infrastructure management and automation solutions. Our services include hybrid cloud provisioning, AIOps, compliance management, and security."
        />
        <meta
          name="keywords"
          content="IT automation, enterprise IT, hybrid cloud, AIOps observability, compliance management, patch management, security, business process automation, vulnerability management, Istanbul, IT infrastructure"
        />
        <meta name="author" content="TSS-X Information Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tssx.com/" />
        <meta
          property="og:title"
          content={t("app_title")}
        />
        <meta
          property="og:description"
          content="Specializing in intelligent automation & IT infrastructure management with expertise in cloud, security, and compliance solutions."
        />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tssx.com/" />
        <meta
          property="twitter:title"
          content={t("app_title")}
        />
        <meta
          property="twitter:description"
          content="Specializing in intelligent automation & IT infrastructure management with expertise in cloud, security, and compliance solutions."
        />
        <meta property="twitter:image" content="/logo.png" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://tssx.com/" />
        {/* Additional SEO tags */}
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="Istanbul" />
        <meta name="language" content={t("language")} />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        {/* Performance and accessibility */}
        <meta name="theme-color" content="#f59e0b" />
        <meta name="color-scheme" content="light" />
        {/* Preconnect to external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />
        {/* Resource hints */}
        <link rel="prefetch" href="/world-110m.json" />
      </Helmet>

      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/solutions/:slug" element={<Solution />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/references" element={<References />} />
        <Route path="/partners" element={<PartnersPage />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
