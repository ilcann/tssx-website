import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Users, Award, Code, BarChart4 } from "lucide-react";
import { StatCard, SubSection } from "../Shared";

const Team = () => {
  const [activeTab, setActiveTab] = useState<"vision" | "mission" | "values">(
    "vision"
  );
  const { t } = useTranslation('about');

  return (
    <section id="team" className="px-6">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-200">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="">
            <SubSection
              id="about-our-team"
              title={t("team.title")}
              description={t("team.description")}
            />
            <div className="flex border-b border-neutral-200 mb-6">
              <button
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === "vision"
                    ? "text-amber-700 border-b-2 border-amber-500"
                    : "text-neutral-500"
                }`}
                onClick={() => setActiveTab("vision")}
              >
                {t("team.tabs.vision.label")}
              </button>
              <button
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === "mission"
                    ? "text-amber-700 border-b-2 border-amber-500"
                    : "text-neutral-500"
                }`}
                onClick={() => setActiveTab("mission")}
              >
                {t("team.tabs.mission.label")}
              </button>
              <button
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === "values"
                    ? "text-amber-700 border-b-2 border-amber-500"
                    : "text-neutral-500"
                }`}
                onClick={() => setActiveTab("values")}
              >
                {t("team.tabs.values.label")}
              </button>
            </div>
            <div className="min-h-32">
              {activeTab === "vision" && (
                <div className="animate-fadeIn">
                  <h4 className="text-neutral-900 font-bold mb-2">
                    {t("team.tabs.vision.title")}
                  </h4>
                  <p className="text-neutral-600 leading-relaxed">
                    {t("team.tabs.vision.description")}
                  </p>
                </div>
              )}

              {activeTab === "mission" && (
                <div className="animate-fadeIn">
                  <h4 className="text-neutral-900 font-bold mb-2">
                    {t("team.tabs.mission.title")}
                  </h4>
                  <p className="text-neutral-600 leading-relaxed">
                    {t("team.tabs.mission.description")}
                  </p>
                </div>
              )}

              {activeTab === "values" && (
                <div className="animate-fadeIn">
                  <h4 className="text-neutral-900 font-bold mb-2">
                    {t("team.tabs.values.title")}
                  </h4>
                  <ul className="text-neutral-600 leading-relaxed space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                      {t("team.tabs.values.list.excellence")}
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                      {t("team.tabs.values.list.innovation")}
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                      {t("team.tabs.values.list.client")}
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                      {t("team.tabs.values.list.integrity")}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <StatCard
                icon= {<Users className="text-amber-700 size-6" />}
                value= "15+"
                title= {t("team.stats.members")}
            />
            <StatCard
                icon={<Award className="text-amber-700 size-6" />}
                value= "10+"
                title= {t("team.stats.experience")}
            />
            <StatCard
                icon={<Code className="text-amber-700 size-6" />}
                value= "100+"
                title= {t("team.stats.projects")}
            />
            <StatCard
                icon={<BarChart4 className="text-amber-700 size-6" />}
                value= "98%"
                title= {t("team.stats.satisfaction")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
