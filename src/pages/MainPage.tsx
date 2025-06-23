import Hero from "@/components/MainPage/hero/Hero";
import LoadingPage from "@/components/ui/LoadingPage";
import { Suspense } from "react";
import LazySection from "@/components/LazySection";
import {
  LazyFAQSection,
  LazyContactSection,
  //LazyTestimonials,
} from "@/components/LazyComponents";
import IntersectionObserver from "@/components/IntersectionObserver";
import Solutions from "@/components/MainPage/solutions/Solutions";
import HomeMeta from "@/components/MainPage/Home.meta";
import { ClientSlider } from "@/components/Shared";

const MainPage = () => {
  return (
    <>
      <HomeMeta/>
      <main id="main">
        <Suspense fallback={<LoadingPage />}>
          <Hero />
          <ClientSlider />
          <Solutions />
          {/* <IntersectionObserver>
            <LazySection>
              <LazyTestimonials />
            </LazySection>
          </IntersectionObserver> */}
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
