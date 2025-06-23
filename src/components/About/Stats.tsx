import AnimatedStat from "@/components/ui/AnimatedStat";
import { useTranslation } from "react-i18next";
import { Zap, Shield, Clock } from "lucide-react";

export default function Stats() {
    const { t } = useTranslation('about');

    return (
        <section id="stats" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedStat
                icon={<Zap size={20} />}
                value="2 Min."
                label={t("stats.faster")}
            />
            <AnimatedStat
                icon={<Shield size={20} />}
                value="100%"
                label={t("stats.compliance")}
            />
            <AnimatedStat
                icon={<Shield size={20} />}
                value="94%"
                label={t("stats.vulnerabilities")}
            />
            <AnimatedStat
                icon={<Clock size={20} />}
                value="1/999%"
                label={t("stats.patch")}
            />
        </section>
    );
}