import SpecialText from "@/components/ui/SpecialText";
import AnimatedText from "@/components/ui/AnimatedText";
import { useTranslation } from "react-i18next";

const SolutionsHeader = () => {
  const { t } = useTranslation();
  
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-bold mb-6 text-neutral-900">
        <SpecialText
          id="solutions-special-text"
          className="text-2xl font-bold text-center mb-2"
        >
          <AnimatedText text={t("solutions_header")} />
        </SpecialText>
      </h2>
      <div className="w-24 h-1 bg-amber-700 mx-auto mb-6 rounded-full"></div>
      <div className="text-lg text-neutral-700 leading-relaxed">
        {t("solutions_description")}
      </div>
    </div>
  );
};

export default SolutionsHeader;