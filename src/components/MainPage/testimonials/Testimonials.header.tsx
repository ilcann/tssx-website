import AnimatedText from "@/components/ui/AnimatedText";
import SpecialText from "@/components/ui/SpecialText";
import { useTranslation } from "react-i18next";

const TestimonialHeader = () => {
  const { t } = useTranslation();
  
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      <SpecialText
        id="testimonials-special-text"
        className="text-4xl font-bold mb-6 text-neutral-900"
      >
        <AnimatedText text={t("testimonials_title")} />
      </SpecialText>
      <div className="w-24 h-1 bg-amber-700 mx-auto mb-6 rounded-full"></div>
      <span className="text-lg text-neutral-600 leading-relaxed">
        {t("testimonials_description")} <AnimatedText text={t("testimonials_trusted_partners")} />
      </span>
    </div>
  );
};

export default TestimonialHeader;