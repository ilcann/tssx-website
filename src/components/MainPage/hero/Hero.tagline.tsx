import { CodeIcon } from "lucide-react";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const HeroTagline = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  
  return (
    <div
      ref={ref}
      className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6 border border-white/30"
    >
      <CodeIcon className="text-white mr-2 size-4" />
      <h1 className="text-white font-medium text-sm">
        {t("hero_tagline")}
      </h1>
    </div>
  );
});

export default HeroTagline;