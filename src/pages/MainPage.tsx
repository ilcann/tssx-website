import { LazyReferences } from "@/components/LazyComponents";
import IntersectionObserver from "@/components/IntersectionObserver";
import LazySection from "@/components/LazySection";
import FAQSection from "@/sections/FAQSection";
import Hero from "@/sections/Hero";
import Solutions from "@/sections/Solutions";

const MainPage = () => {
  return (
    <main id="main">
      <Hero />
      <Solutions />
      <IntersectionObserver>
        <LazySection>
          <LazyReferences />
        </LazySection>
      </IntersectionObserver>
      <FAQSection />
    </main>
  );
};

export default MainPage;
