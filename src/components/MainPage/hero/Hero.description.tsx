import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const HeroDescription = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  
  return (
    <div
      ref={ref}
      className="text-base md:text-lg text-white mt-6 mb-8 max-w-3xl mx-auto"
    >
      {t("hero_description")}
    </div>
  );
});

export default HeroDescription;
