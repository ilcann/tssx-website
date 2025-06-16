import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Users, Award, Code, BarChart4 } from "lucide-react";
import StatCounter from "../ui/StatCounter";
import SpecialText from "../ui/SpecialText";
import AnimatedText from "../ui/AnimatedText";

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState<"vision" | "mission" | "values">(
    "vision"
  );
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-200">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <SpecialText
            id="about-our-team"
            className="text-2xl font-bold text-neutral-900 mb-6"
          >
            <AnimatedText text={t("about_team_title")} />
          </SpecialText>
          <p className="text-neutral-700 mb-6 leading-relaxed">
            {t("about_team_description")}
          </p>

          <div className="flex border-b border-neutral-200 mb-6">
            <button
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === "vision"
                  ? "text-amber-700 border-b-2 border-amber-500"
                  : "text-neutral-500"
              }`}
              onClick={() => setActiveTab("vision")}
            >
              {t("about_vision_tab")}
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === "mission"
                  ? "text-amber-700 border-b-2 border-amber-500"
                  : "text-neutral-500"
              }`}
              onClick={() => setActiveTab("mission")}
            >
              {t("about_mission_tab")}
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === "values"
                  ? "text-amber-700 border-b-2 border-amber-500"
                  : "text-neutral-500"
              }`}
              onClick={() => setActiveTab("values")}
            >
              {t("about_values_tab")}
            </button>
          </div>

          <div className="min-h-32">
            {activeTab === "vision" && (
              <div className="animate-fadeIn">
                <h4 className="text-neutral-900 font-bold mb-2">
                  {t("about_vision_title")}
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {t("about_vision_description")}
                </p>
              </div>
            )}

            {activeTab === "mission" && (
              <div className="animate-fadeIn">
                <h4 className="text-neutral-900 font-bold mb-2">
                  {t("about_mission_title")}
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {t("about_mission_description")}
                </p>
              </div>
            )}

            {activeTab === "values" && (
              <div className="animate-fadeIn">
                <h4 className="text-neutral-900 font-bold mb-2">
                  {t("about_values_title")}
                </h4>
                <ul className="text-neutral-600 leading-relaxed space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                    {t("about_values_excellence")}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                    {t("about_values_innovation")}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                    {t("about_values_client")}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                    {t("about_values_integrity")}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="md:w-1/2 bg-neutral-100 rounded-xl p-6 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-neutral-50 rounded-lg p-4 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-2">
                <Users className="text-amber-700 size-6" />
              </div>
              <div className="text-2xl font-bold text-neutral-900">
                <StatCounter value="15+" enableScrollSpy={true} />
              </div>
              <div className="text-neutral-600 text-sm">{t("about_team_members")}</div>
            </div>

            <div className="bg-neutral-50 rounded-lg p-4 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-2">
                <Award className="text-amber-700 size-6" />
              </div>
              <div className="text-2xl font-bold text-neutral-900">
                <StatCounter value="10+" enableScrollSpy={true} />
              </div>
              <div className="text-neutral-600 text-sm">{t("about_team_experience")}</div>
            </div>

            <div className="bg-neutral-50 rounded-lg p-4 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-2">
                <Code className="text-amber-700 size-6" />
              </div>
              <div className="text-2xl font-bold text-neutral-900">
                <StatCounter value="100+" enableScrollSpy={true} />
              </div>
              <div className="text-neutral-600 text-sm">{t("about_team_projects")}</div>
            </div>

            <div className="bg-neutral-50 rounded-lg p-4 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-2">
                <BarChart4 className="text-amber-700 size-6" />
              </div>
              <div className="text-2xl font-bold text-neutral-900">
                <StatCounter value="98%" enableScrollSpy={true} />
              </div>
              <div className="text-neutral-600 text-sm">
                {t("references_stats_satisfaction")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
