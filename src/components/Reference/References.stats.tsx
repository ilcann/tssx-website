import AnimatedStat from "@/components/ui/AnimatedStat";
import { Users, Award, Code, BarChart4 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ReferencesStats() {
  const { t } = useTranslation();

  return (
    <section id="stats" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <AnimatedStat icon={<Users className="size-6" />} value="15+" label={t("references_stats_team")} />
        <AnimatedStat icon={<Award className="size-6" />} value="10+" label={t("references_stats_experience")} />
        <AnimatedStat icon={<Code className="size-6" />} value="100+" label={t("references_stats_projects")} />
        <AnimatedStat icon={<BarChart4 className="size-6" />} value="98%" label={t("references_stats_satisfaction")} />
    </section>
  );
}