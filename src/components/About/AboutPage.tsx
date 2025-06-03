import { Code, BarChart4, Zap, Shield, Clock } from "lucide-react";

import AnimatedStat from "../ui/AnimatedStat";
import CaseStudy from "./CaseStudy";
import TeamSection from "./Team";
import Timeline from "./Timeline";
import DecorativeBackground from "../ui/DecorativeBackground";
import { caseStudies } from "@/staticComponents/about";
import SpecialText from "../ui/SpecialText";
import AnimatedText from "../ui/AnimatedText";

const About = () => {
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
              <AnimatedText text="About TSSX" />
            </SpecialText>

            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6 rounded-full"></div>
            <span className="text-lg text-neutral-700 leading-relaxed">
              Your trusted <AnimatedText text="IT infrastructure management" />{" "}
              partner
            </span>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <AnimatedStat
              icon={<Zap size={20} />}
              value="2 Min."
              label="Faster Provision"
            />
            <AnimatedStat
              icon={<Shield size={20} />}
              value="100%"
              label="Regulatory Compliance"
            />
            <AnimatedStat
              icon={<Shield size={20} />}
              value="94%"
              label="Vulnerabilities Fixed"
            />
            <AnimatedStat
              icon={<Clock size={20} />}
              value="1/999%"
              label="Patch Person Day"
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
                  <AnimatedText text="Our Legacy" />
                </SpecialText>
                <p className="text-neutral-700 leading-relaxed">
                  Rooted in a legacy of excellence, we are a team of dynamic
                  professionals who honed our expertise while working in pivotal
                  roles at prominent companies. With our origins tracing back to
                  Istanbul Technical University, our journey has taken us through
                  diverse roles such as System Engineers, Principal Consultants,
                  Managers, and Directors. Drawing from this rich experience, we
                  possess an intricate understanding of IT infrastructure
                  management. Our mission is to seamlessly transfer this wealth of
                  knowledge to our clients, offering bespoke solutions that pave
                  the path to their success. At the heart of our approach lies the
                  commitment to tailoring strategies that align with their unique
                  goals and aspirations.
                </p>
              </div>

              <div>
                <SpecialText
                  id="about-our-expertise"
                  className="text-2xl font-bold text-neutral-900 mb-6"
                >
                  <AnimatedText text="Our Expertise" />
                </SpecialText>
                <p className="text-neutral-700 leading-relaxed mb-8">
                  At TSS-X Information Technologies, our team of IT professionals
                  is dedicated to helping our clients get the most out of their IT
                  infrastructure. We specialize in{" "}
                  <span className="text-amber-600 font-medium">
                    IT automation services
                  </span>
                  , with an experienced team that has worked in many areas of IT
                  infrastructure, including application, database, server,
                  storage, network, and security.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-100 flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mr-4 flex-shrink-0">
                      <Code size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 mb-1">
                        Automation
                      </h4>
                      <p className="text-sm text-neutral-600">
                        Expert development of automation workflows and processes
                      </p>
                    </div>
                  </div>

                  <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-100 flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mr-4 flex-shrink-0">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 mb-1">
                        Security
                      </h4>
                      <p className="text-sm text-neutral-600">
                        End-to-end infrastructure security and compliance
                      </p>
                    </div>
                  </div>

                  <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-100 flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mr-4 flex-shrink-0">
                      <BarChart4 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 mb-1">
                        Analytics
                      </h4>
                      <p className="text-sm text-neutral-600">
                        Real-time monitoring and performance analytics
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
