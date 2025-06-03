import {
  EyeIcon,
  SearchIcon,
  SettingsIcon,
  ShieldCheckIcon,
  DollarSignIcon,
} from "lucide-react";
import type { SolutionCardProps } from "@/types/solution";

export const solutionData: SolutionCardProps[] = [
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
