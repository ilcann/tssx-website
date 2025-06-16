import AnimatedStat from "@/components/ui/AnimatedStat";
import { Users, Award, Code, BarChart4 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ReferencesStats() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      <div className="rounded-xl bg-white/80 shadow p-6 flex flex-col items-center transition hover:shadow-md hover:scale-[1.03]">
        <AnimatedStat icon={<Users className="size-6" />} value="15+" label={t("references_stats_team")} />
      </div>
      <div className="rounded-xl bg-white/80 shadow p-6 flex flex-col items-center transition hover:shadow-md hover:scale-[1.03]">
        <AnimatedStat icon={<Award className="size-6" />} value="10+" label={t("references_stats_experience")} />
      </div>
      <div className="rounded-xl bg-white/80 shadow p-6 flex flex-col items-center transition hover:shadow-md hover:scale-[1.03]">
        <AnimatedStat icon={<Code className="size-6" />} value="100+" label={t("references_stats_projects")} />
      </div>
      <div className="rounded-xl bg-white/80 shadow p-6 flex flex-col items-center transition hover:shadow-md hover:scale-[1.03]">
        <AnimatedStat icon={<BarChart4 className="size-6" />} value="98%" label={t("references_stats_satisfaction")} />
      </div>
    </div>
  );
}