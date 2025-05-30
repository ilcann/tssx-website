import {
  EyeIcon,
  SearchIcon,
  SettingsIcon,
  ShieldCheckIcon,
  DollarSignIcon,
} from "lucide-react";
import type { DetailedSolution } from "@/types/solution";

export const detailedSolutionData: DetailedSolution[] = [
  {
    id: 1,
    slug: "observability",
    title: "Observability",
    titleTr: "Gözlemlenebilirlik",
    description: "Comprehensive monitoring and observability solutions with AI-powered insights",
    detailedDescription: "Our observability solutions provide comprehensive monitoring, alerting, and analytics capabilities across your entire IT infrastructure. Using advanced AI and machine learning algorithms, we deliver proactive insights that help prevent issues before they impact your business operations.",
    icon: <EyeIcon className="size-10 text-primary" />,
    services: ["BMC Helix AIOPS", "Zabbix"],
    features: [
      "Real-time monitoring and alerting",
      "AI-powered anomaly detection",
      "Predictive analytics and insights",
      "Unified dashboard for all systems",
      "Automated incident response",
      "Performance optimization recommendations"
    ],
    benefits: [
      "Reduce mean time to resolution (MTTR) by 60%",
      "Prevent 85% of critical incidents before they occur",
      "Improve system uptime to 99.9%",
      "Reduce operational costs by 40%",
      "Enhanced visibility across hybrid environments"
    ],
    examples: [
      {
        title: "Banking Infrastructure Monitoring",
        description: "Implemented comprehensive monitoring for a major bank's critical infrastructure, resulting in 99.99% uptime and proactive issue resolution.",
        metrics: [
          { label: "Uptime Improvement", value: "99.99%" },
          { label: "Incident Reduction", value: "75%" },
          { label: "MTTR Improvement", value: "60%" }
        ]
      },
      {
        title: "E-commerce Platform Optimization",
        description: "Deployed AI-powered observability for an e-commerce platform handling millions of transactions daily.",
        metrics: [
          { label: "Performance Gain", value: "40%" },
          { label: "Cost Reduction", value: "30%" },
          { label: "Alert Accuracy", value: "95%" }
        ]
      }
    ],
    technologies: ["BMC Helix", "Zabbix", "Netreo", "Machine Learning", "Big Data Analytics"],
    image: "/img/solutions/observability.jpg",
    category: "observability"
  },
  {
    id: 2,
    slug: "it-discovery-asset-management",
    title: "IT Discovery & Asset Management",
    titleTr: "IT Keşfi ve Varlık Yönetimi",
    description: "Automated discovery and comprehensive asset management across your IT infrastructure",
    detailedDescription: "Our IT Discovery and Asset Management solutions provide complete visibility into your IT landscape through automated discovery, real-time inventory management, and comprehensive asset tracking. This enables better decision-making, cost optimization, and compliance management.",
    icon: <SearchIcon className="size-10 text-primary" />,
    services: ["BMC Helix Discovery", "Snow Software"],
    features: [
      "Automated network discovery",
      "Real-time asset inventory",
      "Configuration management database (CMDB)",
      "Software license management",
      "Dependency mapping",
      "Cost optimization insights"
    ],
    benefits: [
      "Reduce software licensing costs by 25%",
      "Improve asset utilization by 35%",
      "Achieve 100% asset visibility",
      "Ensure compliance with licensing agreements",
      "Optimize IT spending and resource allocation"
    ],
    examples: [
      {
        title: "Enterprise Asset Optimization",
        description: "Implemented comprehensive asset discovery for a multinational corporation, identifying $2M in cost savings opportunities.",
        metrics: [
          { label: "Cost Savings", value: "$2M+" },
          { label: "Asset Visibility", value: "100%" },
          { label: "License Compliance", value: "99%" }
        ]
      },
      {
        title: "Cloud Infrastructure Mapping",
        description: "Deployed automated discovery across hybrid cloud environments for complete infrastructure visibility.",
        metrics: [
          { label: "Discovery Accuracy", value: "98%" },
          { label: "Time to Discovery", value: "90% faster" },
          { label: "Dependencies Mapped", value: "10,000+" }
        ]
      }
    ],
    technologies: ["BMC Helix Discovery", "Snow Software", "CMDB", "API Integration"],
    image: "/img/solutions/discovery.jpg",
    category: "discovery"
  },
  {
    id: 3,
    slug: "automation",
    title: "Automation",
    titleTr: "Otomasyon",
    description: "Intelligent automation solutions for streamlined IT operations and business processes",
    detailedDescription: "Our automation solutions leverage cutting-edge technologies to streamline complex IT operations and business processes. From server automation to orchestration and job scheduling, we help organizations achieve operational excellence through intelligent automation.",
    icon: <SettingsIcon className="size-10 text-primary" />,
    services: [
      "BMC Truesight Server Automation",
      "BMC Truesight Orchestration",
      "BMC Control-M"
    ],
    features: [
      "Workflow automation and orchestration",
      "Job scheduling and management",
      "Configuration management",
      "Automated deployment pipelines",
      "Self-healing infrastructure",
      "Business process automation"
    ],
    benefits: [
      "Reduce manual tasks by 80%",
      "Improve deployment success rate to 99%",
      "Decrease operational costs by 50%",
      "Accelerate time-to-market by 60%",
      "Enhance consistency and reliability"
    ],
    examples: [
      {
        title: "DevOps Pipeline Automation",
        description: "Implemented end-to-end automation for a software company's CI/CD pipeline, reducing deployment time from hours to minutes.",
        metrics: [
          { label: "Deployment Speed", value: "95% faster" },
          { label: "Error Reduction", value: "90%" },
          { label: "Release Frequency", value: "10x more" }
        ]
      },
      {
        title: "Infrastructure as Code",
        description: "Deployed automated infrastructure provisioning for a cloud-native startup, enabling rapid scaling.",
        metrics: [
          { label: "Provisioning Time", value: "85% faster" },
          { label: "Consistency", value: "100%" },
          { label: "Cost Optimization", value: "40%" }
        ]
      }
    ],
    technologies: ["BMC TrueSight", "Terraform", "Kubernetes"],
    image: "/img/solutions/automation.jpg",
    category: "automation"
  },
  {
    id: 4,
    slug: "security",
    title: "Security",
    titleTr: "Güvenlik",
    description: "Comprehensive security solutions for vulnerability management and threat protection",
    detailedDescription: "Our security solutions provide comprehensive protection against modern cyber threats through advanced vulnerability management, privileged access management, and multi-factor authentication. We help organizations maintain robust security postures while ensuring compliance with industry standards.",
    icon: <ShieldCheckIcon className="size-10 text-primary" />,
    services: ["BMC Helix Vulnerability Management", "MonoSign", "MonoPAM"],
    features: [
      "Continuous vulnerability assessment",
      "Privileged access management",
      "Multi-factor authentication",
      "Threat intelligence integration",
      "Automated remediation workflows",
      "Compliance reporting and tracking"
    ],
    benefits: [
      "Reduce security incidents by 70%",
      "Achieve 94% vulnerability fix rate within 12 weeks",
      "Improve compliance scores by 85%",
      "Decrease privileged access risks by 90%",
      "Enhance overall security posture"
    ],
    examples: [
      {
        title: "Financial Services Security",
        description: "Implemented comprehensive security management for a major financial institution, achieving regulatory compliance and threat protection.",
        metrics: [
          { label: "Vulnerability Reduction", value: "94%" },
          { label: "Compliance Score", value: "100%" },
          { label: "Incident Prevention", value: "85%" }
        ]
      },
      {
        title: "Healthcare Data Protection",
        description: "Deployed advanced security controls for a healthcare provider, ensuring HIPAA compliance and patient data protection.",
        metrics: [
          { label: "Data Breach Prevention", value: "100%" },
          { label: "Access Control", value: "99.9%" },
          { label: "Audit Compliance", value: "100%" }
        ]
      }
    ],
    technologies: ["BMC Helix", "MonoSign", "MonoPAM", "SIEM", "Zero Trust Architecture"],
    image: "/img/solutions/security.jpg",
    category: "security"
  },
  {
    id: 5,
    slug: "finops",
    title: "FinOPS",
    titleTr: "Financial Operations",
    description: "Financial operations and cost optimization solutions for cloud and IT infrastructure",
    detailedDescription: "Our FinOPS solutions help organizations optimize their cloud and IT infrastructure costs through comprehensive cost management, budget optimization, and financial governance. We provide visibility, control, and optimization strategies to maximize ROI on technology investments.",
    icon: <DollarSignIcon className="size-10 text-primary" />,
    services: ["Cost Optimization", "Budget Management"],
    features: [
      "Cloud cost optimization",
      "Budget planning and forecasting",
      "Resource utilization analysis",
      "Cost allocation and chargeback",
      "ROI measurement and reporting",
      "Financial governance frameworks"
    ],
    benefits: [
      "Reduce cloud costs by 30-50%",
      "Improve budget accuracy by 90%",
      "Optimize resource utilization by 40%",
      "Enhance financial visibility and control",
      "Achieve better ROI on technology investments"
    ],
    examples: [
      {
        title: "Multi-Cloud Cost Optimization",
        description: "Implemented FinOPS practices for a technology company using multiple cloud providers, resulting in significant cost savings.",
        metrics: [
          { label: "Cost Reduction", value: "45%" },
          { label: "Budget Accuracy", value: "95%" },
          { label: "Waste Elimination", value: "60%" }
        ]
      },
      {
        title: "Enterprise Resource Optimization",
        description: "Deployed comprehensive cost management for a large enterprise, optimizing IT spending across all departments.",
        metrics: [
          { label: "Annual Savings", value: "$5M+" },
          { label: "Resource Efficiency", value: "50% better" },
          { label: "Cost Visibility", value: "100%" }
        ]
      }
    ],
    technologies: ["Cloud Cost Management", "BI Analytics", "Financial Planning Tools", "Automation"],
    image: "/img/solutions/finops.jpg",
    category: "finops"
  }
]; 