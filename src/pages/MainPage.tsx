import FAQSection from "@/sections/FAQSection";
import Hero from "@/sections/Hero";
import Solutions from "@/sections/Solutions";
import References from "@/sections/References";
import LoadingPage from "@/components/ui/LoadingPage";
import { Suspense } from "react";

const MainPage = () => {
  return (
    <main id="main">
      <Suspense fallback={<LoadingPage />}>
        <Hero />
        <Solutions />
        <References />
        <FAQSection />
      </Suspense>
    </main>
  );
};

export default MainPage;
