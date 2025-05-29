import FAQ from "@/components/MainPage/FAQ";
import SpecialText from "@/components/ui/SpecialText";
import DecorativeBackground from "@/components/ui/DecorativeBackground";
import faqItems from "@/staticComponents/faqItems";

const FAQSection = () => {
  return (
    <DecorativeBackground
      variant="light"
      elements={[
        {
          position: "top-right",
          size: "lg",
          opacity: "high",
          intensity: "medium",
        },
        {
          position: "bottom-left",
          size: "lg",
          opacity: "medium",
          intensity: "medium",
        },
        {
          position: "center-right",
          size: "sm",
          opacity: "low",
          intensity: "medium",
        },
      ]}
      className="py-24 bg-gradient-to-b from-amber-50/50 to-white"
    >
      <section id="faq">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SpecialText>
              <h2 className="text-4xl font-bold mb-6 text-neutral-900">
                Frequently Asked Questions
              </h2>
            </SpecialText>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Get answers to the most common questions about our{" "}
              <span className="text-amber-600 font-semibold">
                IT infrastructure solutions
              </span>
            </p>
          </div>

          <div className="max-w-4xl shadow-none mx-auto">
            <FAQ items={faqItems} className="mb-8" />
          </div>
        </div>
      </section>
    </DecorativeBackground>
  );
};

export default FAQSection;
