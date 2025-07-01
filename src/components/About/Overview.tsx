import { useTranslation } from "react-i18next";
import { SubSection, StatCard } from "@/components/Shared";
import { BarChart4, Code, Shield } from "lucide-react";

const Overview = () => {
    const { t } = useTranslation('about');
    
    return (
        <section id="overview">
            <div className="section-content">
                <div className="content-box flex flex-col gap-y-6 p-8">
                    <SubSection 
                        id="legacy"
                        title={t("overview.legacy.title")}
                        description={t("overview.legacy.description")}
                    />
                    <SubSection
                        id="expertise"
                        title={t("overview.expertise.title")}
                        description={t("overview.expertise.description")}
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <StatCard
                            variant="inline"
                            icon={<Code size={20} />}
                            title={t("overview.stats.automation.title")}
                            description={t("overview.stats.automation.description")}
                        />
                        <StatCard
                            variant="inline"
                            icon={<Shield size={20} />}
                            title={t("overview.stats.security.title")}
                            description={t("overview.stats.security.description")}
                        />
                        <StatCard
                            variant="inline"
                            icon={<BarChart4 size={20} />}
                            title={t("overview.stats.analytics.title")}
                            description={t("overview.stats.analytics.description")}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Overview;