import Hero from "@/components/MainPage/hero/Hero";
import LoadingPage from "@/components/ui/LoadingPage";
import { Suspense } from "react";
import LazySection from "@/components/LazySection";
import { LazyReferences, LazyFAQSection, LazyContactSection, LazyPartners, LazySolutions, LazyTestimonials } from "@/components/LazyComponents";
import IntersectionObserver from "@/components/IntersectionObserver";

const MainPage = () => {
  return (
    <main id="main">
      <Suspense fallback={<LoadingPage />}>
        <Hero />
        <IntersectionObserver>
          <LazySection>
            <LazyPartners />
          </LazySection>
        </IntersectionObserver>
        <IntersectionObserver>
          <LazySection>
            <LazySolutions />
          </LazySection>
        </IntersectionObserver>
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
  );
};

export default MainPage;
