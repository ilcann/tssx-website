import Header from "./components/Header";
import Hero from "./sections/Hero";
import Solutions from "./sections/Solutions";
import About from "./sections/About";
import DetailedSolutions from "./sections/DetailedSolutions";
import References from "./sections/References";
import FAQSection from "./sections/FAQSection";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>
          TSS-X | Enterprise IT Infrastructure & Automation Solutions
        </title>
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
          content="TSS-X | Enterprise IT Infrastructure & Automation Solutions"
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
          content="TSS-X | Enterprise IT Infrastructure & Automation Solutions"
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
        <meta name="language" content="English" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
      </Helmet>
      <Header />
      <main id="main">
        <Hero />
        <Solutions />
        <About />
        <DetailedSolutions />
        <References />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
