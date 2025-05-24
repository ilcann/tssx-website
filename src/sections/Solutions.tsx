import {
  DollarSignIcon,
  EyeIcon,
  SearchIcon,
  SettingsIcon,
  ShieldCheckIcon,
} from "lucide-react";
import type { SolutionCardProps } from "../types/solution";

const SolutionCard = ({
  icon,
  title,
  titleTr,
  services,
}: SolutionCardProps) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg border border-neutral-200 h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className="relative h-40 bg-gradient-to-br from-amber-500/80 to-amber-600/80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-amber-100 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        <div className="w-20 h-20 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full z-10 group-hover:scale-110 transition-transform duration-300">
          <div className="text-white">{icon}</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-900 mb-2">{title}</h3>
        <p className="text-amber-600 mb-4 text-sm font-medium">{titleTr}</p>
        <ul className="space-y-3 mb-4">
          {services.map((service, index) => (
            <li key={index} className="flex items-start">
              <span className="w-5 h-5 flex-shrink-0 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="size-3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-neutral-700 text-sm">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Solutions = () => {
  const solutionData: SolutionCardProps[] = [
    {
      icon: <EyeIcon className="size-10 text-primary" />,
      title: "Observability",
      titleTr: "Gözlemlenebilirlik",
      services: ["BMC Helix AIOPS", "Zabbix", "Netreo"],
    },
    {
      icon: <SearchIcon className="size-10 text-primary" />,
      title: "IT Discovery & Asset Management",
      titleTr: "IT Keşfi ve Varlık Yönetimi",
      services: ["BMC Helix Discovery", "Snow Software"],
    },
    {
      icon: <SettingsIcon className="size-10 text-primary" />,
      title: "Automation",
      titleTr: "Otomasyon",
      services: [
        "BMC Truesight Server Automation",
        "BMC Truesight Orchestration",
        "BMC Control-M",
      ],
    },
    {
      icon: <ShieldCheckIcon className="size-10 text-primary" />,
      title: "Security",
      titleTr: "Güvenlik",
      services: ["BMC Helix Vulnerability Management", "MonoSign", "MonoPAM"],
    },
    {
      icon: <DollarSignIcon className="size-10 text-primary" />,
      title: "FinOPS",
      titleTr: "Financial Operations",
      services: ["Cost Optimization", "Budget Management"],
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-white to-neutral-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200 rounded-full opacity-20 transform -translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100 rounded-full opacity-30 transform translate-x-1/3 translate-y-1/4"></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-amber-300 rounded-full opacity-10 transform -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-neutral-900">
            Our Solutions
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Our solutions are designed to help you{" "}
            <span className="text-amber-600 font-semibold">
              automate your business processes
            </span>{" "}
            and improve your productivity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative z-10">
          {solutionData.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              titleTr={solution.titleTr}
              services={solution.services}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
