import Hero from "@/components/MainPage/hero/Hero";
import LoadingPage from "@/components/ui/LoadingPage";
import { Suspense } from "react";
import Solutions from "@/components/MainPage/solutions/Solutions";
import HomeMeta from "@/components/MainPage/Home.meta";
import { ClientSlider, ContactBanner } from "@/components/Shared";
import FAQSection from "@/components/MainPage/FAQSection";

const MainPage = () => {
  return (
    <>
      <HomeMeta/>
      <main className="app-content">
        <Suspense fallback={<LoadingPage />}>
          <Hero />
          <ClientSlider />
          <Solutions />
          <FAQSection />
          <ContactBanner />
        </Suspense>
      </main>
    </>
  );
};

export default MainPage;
