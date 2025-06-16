import PartnersGrid from "./PartnersGrid";
import SpecialText from "../ui/SpecialText";
import AnimatedText from "../ui/AnimatedText";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full min-h-[80vh] bg-white py-12 px-4 md:px-12 flex flex-col items-center justify-center gap-8">
      <div className="w-full max-w-2xl flex flex-col items-center text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-2">
          <SpecialText>
            <AnimatedText text={t("partners_title")} />
          </SpecialText>
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 mb-4">
          {t("partners_description")}
        </p>
      </div>
      <PartnersGrid />
    </section>
  );
};

export default Partners;
