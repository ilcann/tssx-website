import FAQ from "@/components/MainPage/FAQ";
import DecorativeBackground from "@/components/ui/DecorativeBackground";
import getFaqItems from "@/staticComponents/faqItems";
import { useTranslation } from "react-i18next";
import AnimatedText from "@/components/ui/AnimatedText";
import SpecialText from "@/components/ui/SpecialText";

const FAQSection = () => {
  const { t } = useTranslation();
  const faqItems = getFaqItems(t);

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
        <div className="container mx-auto flex flex-col px-6">
          <div className="w-full max-w-3xl flex flex-col gap-6 items-center mx-auto py-6 md:py-12">
            <SpecialText
              className={`text-3xl md:text-4xl font-extrabold text-neutral-900`}
            >
              <AnimatedText text={t("faq_title")} />
            </SpecialText>
            <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full"></div>
            <p className="text-lg text-neutral-700 leading-relaxed text-center">
              {t("faq_description_part1")}{" "}
              <span className="text-amber-700 font-semibold">
                {t("faq_description_part2")}
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto py-6 md:py-12">
            {/* FAQ Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/img/tssx/faq.png"
                alt={t("faq_alt_text")}
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
