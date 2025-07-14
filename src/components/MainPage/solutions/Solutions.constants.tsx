import { Activity, Search, Zap, Shield, DollarSign } from "lucide-react";

export type SolutionCardProps = {
  slug: {
    tr: string;
    en: string;
  };
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  tools: string[];
};

export const solutionCards: SolutionCardProps[] = [
  {
    slug: {
      tr: "gozlenebilirlik",
      en: "observability",
    },
    icon: <Activity />,
    title: "solutions.list.observability.title",
    subtitle: "solutions.list.observability.subtitle",
    tools: [
      "solutions.list.observability.tools.helix",
      "solutions.list.observability.tools.zabbix",
      "solutions.list.observability.tools.netreo",
    ],
  },
  {
    slug: {
      tr: "varlik-yonetimi",
      en: "asset-management",
    },
    icon: <Search />,
    title: "solutions.list.assetManagement.title",
    subtitle: "solutions.list.assetManagement.subtitle",
    tools: [
      "solutions.list.assetManagement.tools.discovery",
      "solutions.list.assetManagement.tools.snow",
    ],
  },
  {
    slug: {
      tr: "otomasyon",
      en: "automation",
    },
    icon: <Zap />,
    title: "solutions.list.automation.title",
    subtitle: "solutions.list.automation.subtitle",
    tools: [
      "solutions.list.automation.tools.controlm",
      "solutions.list.automation.tools.tso",
      "solutions.list.automation.tools.tssa",
    ],
  },
  {
    slug: {
      tr: "guvenlik",
      en: "security",
    },
    icon: <Shield />,
    title: "solutions.list.security.title",
    subtitle: "solutions.list.security.subtitle",
    tools: [
      "solutions.list.security.tools.monosign",
      "solutions.list.security.tools.monopam",
      "solutions.list.security.tools.helixVulnMgmt",
    ],
  },
  {
    slug: {
      tr: "finops",
      en: "finops",
    },
    icon: <DollarSign />,
    title: "solutions.list.finops.title",
    subtitle: "solutions.list.finops.subtitle",
    tools: [
      "solutions.list.finops.tools.cloudhealth",
      "solutions.list.finops.tools.apptio",
      "solutions.list.finops.tools.harness",
    ],
  },
];
