import { useState } from "react";
import { CheckCircle, Cpu, Target, Zap } from "lucide-react";
import SpecialText from "@/components/ui/SpecialText";
import AnimatedText from "@/components/ui/AnimatedText";
import type { DetailedSolution } from "@/types/solution";
import { useTranslation } from "react-i18next";

interface SolutionUseCasesProps {
  solution: DetailedSolution;
}

const SolutionUseCases = ({ solution }: SolutionUseCasesProps) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const useCaseTabs = [
    {
      id: "overview",
      label: t("solution_details_overview"),
      icon: <Target className="w-4 h-4" />,
      content: solution.detailedDescription,
    },
    {
      id: "features",
      label: t("solution_details_features"),
      icon: <Zap className="w-4 h-4" />,
      content: solution.features,
    },
    {
      id: "benefits",
      label: t("solution_details_benefits"),
      icon: <CheckCircle className="w-4 h-4" />,
      content: solution.benefits,
    },
    {
      id: "technologies",
      label: t("solution_details_technologies"),
      icon: <Cpu className="w-4 h-4" />,
      content: solution.technologies,
    },
  ];

  return (
    <section className="py-20 animate-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <SpecialText
              id="use-cases-title"
              className="text-3xl font-bold mb-4 text-neutral-900"
            >
              <AnimatedText text={t("solution_details_title")} />
            </SpecialText>
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              {t("solution_details_comprehensive")}
            </p>
          </div>

          {/* Tabs */}
          <div className="border-b border-neutral-200 mb-8">
            <nav className="flex space-x-8 overflow-x-auto">
              {useCaseTabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === index
                      ? "border-amber-500 text-amber-600"
                      : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="min-h-[300px]">
            {/* Overview Tab */}
            {activeTab === 0 && (
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed text-lg">
                  {useCaseTabs[activeTab].content}
                </p>
              </div>
            )}

            {/* Features & Benefits Tabs */}
            {(activeTab === 1 || activeTab === 2) && (
              <div className="grid gap-4">
                {(useCaseTabs[activeTab].content as string[]).map(
                  (item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white border border-neutral-200 rounded-lg hover:shadow-sm transition-shadow"
                    >
                      <CheckCircle
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          activeTab === 1 ? "text-blue-500" : "text-green-500"
                        }`}
                      />
                      <span className="text-neutral-700">{item}</span>
                    </div>
                  )
                )}
              </div>
            )}

            {/* Technologies Tab */}
            {activeTab === 3 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {(useCaseTabs[activeTab].content as string[]).map(
                  (tech, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center p-3 bg-neutral-50 border border-neutral-200 rounded-lg text-center hover:bg-neutral-100 transition-colors"
                    >
                      <span className="text-sm font-medium text-neutral-800">
                        {tech}
                      </span>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionUseCases;
