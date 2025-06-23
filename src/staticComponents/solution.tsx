import {
  EyeIcon,
  SearchIcon,
  SettingsIcon,
  ShieldCheckIcon,
  DollarSignIcon,
} from "lucide-react";
import type { SolutionCardProps } from "@/types/solution";

type TFunction = (key: string) => string;

export const getSolutionData = (t: TFunction): SolutionCardProps[] => [
  {
    icon: <EyeIcon className="size-10 text-primary" />,
    title: t("solutions_dropdown_monitor_sub"),
    label: t("solutions_dropdown_monitor"),
    services: ["BMC Helix AIOPS", "Zabbix", "Netreo"],
  },
  {
    icon: <SearchIcon className="size-10 text-primary" />,
    title: t("solutions_dropdown_track_sub"),
    label: t("solutions_dropdown_track"),
    services: ["BMC Helix Discovery", "Snow Software"],
  },
  {
    icon: <SettingsIcon className="size-10 text-primary" />,
    title: t("solutions_dropdown_automate_sub"),
    label: t("solutions_dropdown_automate"),
    services: [
      "BMC Truesight Server Automation",
      "BMC Truesight Orchestration",
      "BMC Control-M",
    ],
  },
  {
    icon: <ShieldCheckIcon className="size-10 text-primary" />,
    title: t("solutions_dropdown_security_sub"),
    label: t("solutions_dropdown_security"),
    services: ["BMC Helix Vulnerability Management", "MonoSign", "MonoPAM"],
  },
  {
    icon: <DollarSignIcon className="size-10 text-primary" />,
    title: t("solutions_dropdown_optimize_sub"),
    label: t("solutions_dropdown_optimize"),
    services: [t("solution_services_cost_optimization"), t("solution_services_budget_management")],
  },
];

// Keep legacy export for backward compatibility
export const solutionData: SolutionCardProps[] = [
  {
    icon: <EyeIcon className="size-10 text-primary" />,
    title: "Observability",
    label: "Gözlemlenebilirlik",
    services: ["BMC Helix AIOPS", "Zabbix", "Netreo"],
  },
  {
    icon: <SearchIcon className="size-10 text-primary" />,
    title: "IT Discovery & Asset Management",
    label: "IT Keşfi ve Varlık Yönetimi",
    services: ["BMC Helix Discovery", "Snow Software"],
  },
  {
    icon: <SettingsIcon className="size-10 text-primary" />,
    title: "Automation",
    label: "Otomasyon",
    services: [
      "BMC Truesight Server Automation",
      "BMC Truesight Orchestration",
      "BMC Control-M",
    ],
  },
  {
    icon: <ShieldCheckIcon className="size-10 text-primary" />,
    title: "Security",
    label: "Güvenlik",
    services: ["BMC Helix Vulnerability Management", "MonoSign", "MonoPAM"],
  },
  {
    icon: <DollarSignIcon className="size-10 text-primary" />,
    title: "FinOPS",
    label: "Financial Operations",
    services: ["Cost Optimization", "Budget Management"],
  },
];
