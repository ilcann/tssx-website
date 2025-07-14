import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import { CTAButton } from "@/components/Shared";
import { buildPath } from "@/lib";

const HeroCTA = forwardRef<HTMLDivElement>((_, ref) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("tr") ? "tr" : "en";

  return (
    <div ref={ref} className="flex justify-center">
      <CTAButton
        to={buildPath(lang, "contact")}
        type="secondary"
        icon={<ChevronRight className="size-6 md:size-7 xl:size-8" />}
      >
        {t("hero_cta")}
      </CTAButton>
    </div>
  );
});

export default HeroCTA;
