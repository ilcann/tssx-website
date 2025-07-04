import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import { CTAButton } from "@/components/Shared";

const HeroCTA = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  
  return (
    <div ref={ref} className="flex justify-center">
      <CTAButton to="/contact" type="secondary" icon={<ChevronRight className="size-6 md:size-7 xl:size-8" />}>
        {t("hero_cta")}
      </CTAButton>
    </div>
  );
});

export default HeroCTA;