import {
  Check,
  Award,
  Users,
  Code,
  BarChart4,
  Zap,
  Shield,
  Clock,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StatCounter from "../components/StatCounter";
import type { CaseStudyProps } from "../types/about";
import { useState } from "react";

const AnimatedStat = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-neutral-200 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-neutral-900">{label}</h3>
      </div>
      <div className="text-3xl font-bold text-amber-600 mb-1">
        <StatCounter value={value} enableScrollSpy={true} />
      </div>
    </div>
  );
};

const CaseStudy = ({
  title,
  subtitle,
  description,
  points,
}: CaseStudyProps) => {
  return (
    <Card className="bg-white rounded-xl overflow-hidden shadow-lg border border-neutral-200 transition-all duration-300 hover:shadow-xl group">
      <div className="absolute w-full h-1 bg-gradient-to-r from-amber-500 to-amber-600 top-0 left-0 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      <CardHeader className="p-8">
        <div className="text-amber-600 font-medium text-sm uppercase tracking-wider mb-2">
          {title}
        </div>
        <CardTitle className="text-2xl font-bold text-neutral-900 mb-4">
          {subtitle}
        </CardTitle>
        <CardDescription className="text-neutral-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8 pt-0">
        <ul className="space-y-4">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-start bg-neutral-50 p-4 rounded-lg"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full mt-0.5 mr-4 flex-shrink-0">
                <Check className="text-amber-600 size-5" />
              </div>
              <div>
                <span className="text-amber-600 font-semibold block mb-1">
                  {point.label}
                </span>
                <span className="text-neutral-600 text-sm">{point.value}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

// Timeline component for company history
const Timeline = () => {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "TSS X was established in Istanbul with a vision to transform IT infrastructure management",
    },
    {
      year: "2019",
      title: "First Enterprise Client",
      description:
        "Successfully delivered automation solutions to our first major enterprise client",
    },
    {
      year: "2021",
      title: "International Expansion",
      description:
        "Expanded operations to serve clients across Europe and the Middle East",
    },
    {
      year: "2023",
      title: "Innovation Award",
      description:
        "Recognized for excellence in IT infrastructure automation solutions",
    },
    {
      year: "2024",
      title: "Advanced AI Integration",
      description:
        "Launched next-generation AI-powered infrastructure management solutions",
    },
  ];

  return (
    <div className="mt-16 relative">
      <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
        Our Journey
      </h3>
      <div className="absolute h-full w-0.5 bg-amber-200 left-1/2 transform -translate-x-1/2 top-12 z-0"></div>

      <div className="relative z-10">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`flex mb-12 items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div
              className={`w-1/2 ${
                index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
              }`}
            >
              <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                <div className="text-amber-600 font-bold text-lg">
                  {milestone.year}
                </div>
                <h4 className="text-neutral-900 font-bold mb-2">
                  {milestone.title}
                </h4>
                <p className="text-neutral-600 text-sm">
                  {milestone.description}
                </p>
              </div>
            </div>

            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center z-10 flex-shrink-0">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>

            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Team section component
const TeamSection = () => {
  const [activeTab, setActiveTab] = useState<"vision" | "mission" | "values">(
    "vision"
  );

  return (
    <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-neutral-200">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Team</h3>
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

const About = () => {
  const caseStudies: CaseStudyProps[] = [
    {
      title: "Success Story",
      subtitle: "Achieving turbocharged performance with our custom solutions",
      description:
        "Our specialized solutions delivered significant performance improvements:",
      points: [
        {
          label: "+23 points",
          value: "higher accuracy compared to other solutions",
        },
        {
          label: "+19 points",
          value: "higher accuracy than competitive solutions",
        },
      ],
    },
    {
      title: "Real-world benefits",
      subtitle: "Results achieved by our clients",
      description:
        "Clients using our solutions have achieved the following results:",
      points: [
        {
          label: "94%",
          value: "reduction in cost per token",
        },
        {
          label: "70%",
          value: "improvement in latency",
        },
        {
          label: "billions of requests/week",
          value: "Optimization for processing",
        },
      ],
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full opacity-20 transform -translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-50 rounded-full opacity-30 transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-amber-200 rounded-full opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-neutral-900">
            About TSS X
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Your trusted{" "}
            <span className="text-amber-600 font-semibold">
              IT infrastructure management
            </span>{" "}
            partner
          </p>
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
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Our Legacy
              </h3>
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
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Our Expertise
              </h3>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
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
    </section>
  );
};

export default About;
