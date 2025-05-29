import { useState } from "react";

import { Users, Award, Code, BarChart4 } from "lucide-react";
import StatCounter from "../ui/StatCounter";
import SpecialText from "../ui/SpecialText";
import AnimatedText from "../ui/AnimatedText";

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState<"vision" | "mission" | "values">(
    "vision"
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-200">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <SpecialText
            id="about-our-team"
            className="text-2xl font-bold text-neutral-900 mb-6"
          >
            <AnimatedText text="Our Team" />
          </SpecialText>
          <p className="text-neutral-700 mb-6 leading-relaxed">
            Our team consists of experienced IT professionals with backgrounds
            from Istanbul Technical University who have worked in diverse roles
            such as System Engineers, Principal Consultants, Managers, and
            Directors at prominent companies.
          </p>

          <div className="flex border-b border-neutral-200 mb-6">
            <button
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === "vision"
                  ? "text-amber-600 border-b-2 border-amber-500"
                  : "text-neutral-500"
              }`}
              onClick={() => setActiveTab("vision")}
            >
              Our Vision
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === "mission"
                  ? "text-amber-600 border-b-2 border-amber-500"
                  : "text-neutral-500"
              }`}
              onClick={() => setActiveTab("mission")}
            >
              Our Mission
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === "values"
                  ? "text-amber-600 border-b-2 border-amber-500"
                  : "text-neutral-500"
              }`}
              onClick={() => setActiveTab("values")}
            >
              Our Values
            </button>
          </div>

          <div className="min-h-32">
            {activeTab === "vision" && (
              <div className="animate-fadeIn">
                <h4 className="text-neutral-900 font-bold mb-2">
                  Shaping the Future of IT Infrastructure
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  We envision a world where IT infrastructure management is
                  fully automated, secure, and optimized, allowing businesses to
                  focus on innovation and growth rather than maintenance.
                </p>
              </div>
            )}

            {activeTab === "mission" && (
              <div className="animate-fadeIn">
                <h4 className="text-neutral-900 font-bold mb-2">
                  Empowering Through Automation
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  Our mission is to empower organizations with cutting-edge
                  automation solutions that streamline IT operations, enhance
                  security, and accelerate digital transformation.
                </p>
              </div>
            )}

            {activeTab === "values" && (
              <div className="animate-fadeIn">
                <h4 className="text-neutral-900 font-bold mb-2">
                  Our Core Values
                </h4>
                <ul className="text-neutral-600 leading-relaxed space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Excellence in service delivery
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Continuous innovation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Client-centered approach
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    Integrity and transparency
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
                <Users className="text-amber-600 size-6" />
              </div>
              <div className="text-2xl font-bold text-neutral-900">
                <StatCounter value="15+" enableScrollSpy={true} />
              </div>
              <div className="text-neutral-600 text-sm">Team Members</div>
            </div>

            <div className="bg-neutral-50 rounded-lg p-4 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-2">
                <Award className="text-amber-600 size-6" />
              </div>
              <div className="text-2xl font-bold text-neutral-900">
                <StatCounter value="10+" enableScrollSpy={true} />
              </div>
              <div className="text-neutral-600 text-sm">Years Experience</div>
            </div>

            <div className="bg-neutral-50 rounded-lg p-4 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-2">
                <Code className="text-amber-600 size-6" />
              </div>
              <div className="text-2xl font-bold text-neutral-900">
                <StatCounter value="100+" enableScrollSpy={true} />
              </div>
              <div className="text-neutral-600 text-sm">Projects Delivered</div>
            </div>

            <div className="bg-neutral-50 rounded-lg p-4 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-2">
                <BarChart4 className="text-amber-600 size-6" />
              </div>
              <div className="text-2xl font-bold text-neutral-900">
                <StatCounter value="98%" enableScrollSpy={true} />
              </div>
              <div className="text-neutral-600 text-sm">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
