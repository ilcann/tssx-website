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
          position: "top-left",
          size: "lg",
          opacity: "high",
          intensity: "medium",
        },
        {
          position: "bottom-left",
          size: "lg",
          opacity: "medium",
          intensity: "dark",
        },
        {
          position: "center-right",
          size: "xl",
          opacity: "medium",
          intensity: "medium",
        },
      ]}
      className="bg-gradient-to-b from-neutral-100 to-neutral-200"
    >
      <section id="faq">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SpecialText>
              <h2 className="text-4xl font-bold mb-6 text-neutral-900">
                Frequently Asked Questions
              </h2>
            </SpecialText>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Get answers to the most common questions about our{" "}
              <span className="text-amber-700 font-semibold">
                IT infrastructure solutions
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* FAQ Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/img/tssx/faq.png"
                alt="Frequently Asked Questions"
                width="512"
                height="512"
                className="h-auto w-full max-w-lg rounded-lg"
              />
            </div>
            
            {/* FAQ Content */}
            <div className="max-w-3xl">
              <FAQ items={faqItems} className="mb-8" />
            </div>
          </div>
        </div>
      </section>
    </DecorativeBackground>
  );
};

export default FAQSection;
