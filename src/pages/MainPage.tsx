import Hero from "@/components/MainPage/Hero";
import LoadingPage from "@/components/ui/LoadingPage";
import { Suspense } from "react";
import LazySection from "@/components/LazySection";
import { LazyReferences } from "@/components/LazyComponents";
import { LazyFAQSection } from "@/components/LazyComponents";
import IntersectionObserver from "@/components/IntersectionObserver";
import Solutions from "@/components/MainPage/Solutions";

const MainPage = () => {
  return (
    <main id="main">
      <Suspense fallback={<LoadingPage />}>
        <Hero />
        <Solutions />
        <IntersectionObserver>
          <LazySection>
            <LazyReferences />
          </LazySection>
        </IntersectionObserver>
        <IntersectionObserver>
          <LazySection>
            <LazyFAQSection />
          </LazySection>
        </IntersectionObserver>
      </Suspense>
    </main>
  );
};

export default MainPage;
