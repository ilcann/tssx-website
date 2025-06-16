import { forwardRef } from "react";
import AnimatedStat from "../../ui/AnimatedStat";
import { CodeIcon, BotIcon, ServerIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroStats = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  
  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10 max-w-4xl mx-auto text-white mt-10"
    >
      <AnimatedStat
        value="100+"
        label={t("hero_stats_projects")}
        icon={<CodeIcon className="size-6" />}
      />
      <AnimatedStat
        value="98%"
        label={t("hero_stats_success")}
        icon={<BotIcon className="size-6" />}
      />
      <AnimatedStat
        value="24/7"
        label={t("hero_stats_support")}
        icon={<ServerIcon className="size-6" />}
      />
    </div>
  );
});

export default HeroStats;
