import { CheckCircle } from "lucide-react";
import SpecialText from "@/components/ui/SpecialText";
import AnimatedText from "@/components/ui/AnimatedText";
import type { DetailedSolution } from "@/types/solution";
import { useTranslation } from "react-i18next";

interface SolutionOverviewProps {
  solution: DetailedSolution;
}

const SolutionOverview = ({ solution }: SolutionOverviewProps) => {
  const { t } = useTranslation();
  // Get top 6 benefits for display
  const topBenefits = solution.benefits.slice(0, 6);

  return (
    <section id="overview" className="py-16 animate-section">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <SpecialText
              id="overview-title"
              className="text-3xl font-bold mb-4 text-neutral-900"
            >
              <AnimatedText text={t("solution_overview_why_choose")} />
            </SpecialText>
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              {solution.detailedDescription}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <p className="text-neutral-700 leading-relaxed group-hover:text-neutral-800 transition-colors">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-amber-700 font-medium text-sm">
                {t("solution_cta_transform")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
