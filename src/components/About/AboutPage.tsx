import { Code, BarChart4, Zap, Shield, Clock } from "lucide-react";

import AnimatedStat from "../ui/AnimatedStat";
import CaseStudy from "./CaseStudy";
import TeamSection from "./Team";
import Timeline from "./Timeline";
import DecorativeBackground from "../ui/DecorativeBackground";
import { getCaseStudies } from "@/staticComponents/about";
import SpecialText from "../ui/SpecialText";
import AnimatedText from "../ui/AnimatedText";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const caseStudies = getCaseStudies(t);

  return (
    <DecorativeBackground
      variant="neutral"
      className="py-24 bg-gradient-to-b from-neutral-50 to-white"
      elements={[
        { position: "top-left", size: "lg", opacity: "high", intensity: "medium" },
        { position: "bottom-right", size: "lg", opacity: "high", intensity: "medium" },
        { position: "center-left", size: "lg", opacity: "high", intensity: "medium" },
        { position: "bottom-center", size: "lg", opacity: "high", intensity: "medium" },
        { position: "top-center", size: "lg", opacity: "high", intensity: "light" },
        { position: "bottom-left", size: "xl", opacity: "high", intensity: "light" },
        { position: "top-right", size: "lg", opacity: "high", intensity: "light" },
        { position: "center-right", size: "lg", opacity: "high", intensity: "light" },
        { position: "bottom-center", size: "lg", opacity: "high", intensity: "dark" },
        { position: "center-left", size: "xl", opacity: "high", intensity: "dark" },
        { position: "center-right", size: "lg", opacity: "high", intensity: "dark" },
        { position: "bottom-center", size: "lg", opacity: "high", intensity: "dark" },
        { position: "center-left", size: "lg", opacity: "high", intensity: "dark" },
        { position: "center-right", size: "lg", opacity: "high", intensity: "dark" },
        { position: "bottom-center", size: "xl", opacity: "high", intensity: "dark" },
      ]}
    >
      <main id="about">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SpecialText
              id="about-special-text"
              className="text-4xl font-bold mb-2 text-neutral-900"
            >
              <AnimatedText text={t("about_title")} />
            </SpecialText>

            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6 rounded-full"></div>
            <span className="text-lg text-neutral-700 leading-relaxed">
              {t("about_tagline")}
            </span>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <AnimatedStat
              icon={<Zap size={20} />}
              value="2 Min."
              label={t("about_stats_faster")}
            />
            <AnimatedStat
              icon={<Shield size={20} />}
              value="100%"
              label={t("about_stats_compliance")}
            />
            <AnimatedStat
              icon={<Shield size={20} />}
              value="94%"
              label={t("about_stats_vulnerabilities")}
            />
            <AnimatedStat
              icon={<Clock size={20} />}
              value="1/999%"
              label={t("about_stats_patch")}
            />
          </div>

          {/* Our expertise section */}
          <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8 mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="mb-10">
                <SpecialText
                  id="about-our-legacy"
                  className="text-2xl font-bold text-neutral-900 mb-6"
                >
                  <AnimatedText text={t("about_legacy_title")} />
                </SpecialText>
                <p className="text-neutral-700 leading-relaxed">
                  {t("about_legacy_description")}
                </p>
              </div>

              <div>
                <SpecialText
                  id="about-our-expertise"
                  className="text-2xl font-bold text-neutral-900 mb-6"
                >
                  <AnimatedText text={t("about_expertise_title")} />
                </SpecialText>
                <p className="text-neutral-700 leading-relaxed mb-8">
                  {t("about_expertise_description")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-100 flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mr-4 flex-shrink-0">
                      <Code size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 mb-1">
                        {t("about_automation_title")}
                      </h4>
                      <p className="text-sm text-neutral-600">
                        {t("about_automation_description")}
                      </p>
                    </div>
                  </div>

                  <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-100 flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mr-4 flex-shrink-0">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 mb-1">
                        {t("about_security_title")}
                      </h4>
                      <p className="text-sm text-neutral-600">
                        {t("about_security_description")}
                      </p>
                    </div>
                  </div>

                  <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-100 flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mr-4 flex-shrink-0">
                      <BarChart4 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 mb-1">
                        {t("about_analytics_title")}
                      </h4>
                      <p className="text-sm text-neutral-600">
                        {t("about_analytics_description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team section */}
          <TeamSection />

          {/* Timeline */}
          <Timeline />

          {/* Case studies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-full">
            {caseStudies.map((study, index) => (
              <CaseStudy
                key={index}
                title={study.title}
                subtitle={study.subtitle}
                description={study.description}
                points={study.points}
              />
            ))}
          </div>
        </div>
      </main>
    </DecorativeBackground>
  );
};

export default About;
