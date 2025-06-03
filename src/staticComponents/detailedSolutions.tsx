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
    title: "Observability & AIOps",
    titleTr: "Gözlemlenebilirlik ve AI Operasyonları",
    description: "Transform IT operations with AI-powered observability solutions that provide comprehensive monitoring, predictive insights, and automated incident response",
    detailedDescription: "Our advanced observability solutions leverage artificial intelligence and machine learning to deliver comprehensive monitoring, alerting, and analytics capabilities across your entire IT infrastructure. With real-time insights, predictive analytics, and automated incident response, we help organizations achieve operational excellence while reducing costs and improving service quality.",
    icon: <EyeIcon className="size-10 text-primary" />,
    services: [
      "BMC Helix Operations Management",
      "BMC TrueSight Capacity Optimization",
      "Zabbix Enterprise Monitoring",
      "AI-Powered Anomaly Detection",
      "Real-time Service Analytics",
      "Automated Incident Response"
    ],
    features: [
      "AI-driven anomaly detection and root cause analysis",
      "Real-time monitoring across hybrid and multi-cloud environments",
      "Predictive analytics for proactive issue prevention",
      "Unified observability dashboard with customizable views",
      "Automated incident correlation and escalation",
      "Machine learning-based performance optimization",
      "Integration with popular DevOps and ITSM tools",
      "Advanced alerting with intelligent noise reduction"
    ],
    benefits: [
      "Reduce mean time to resolution (MTTR) by up to 75%",
      "Prevent 90% of critical incidents before they impact business",
      "Achieve 99.9% system uptime and availability",
      "Decrease operational costs by 45% through automation",
      "Improve team productivity by 60% with AI-assisted operations",
      "Enhance customer satisfaction with proactive service management",
      "Accelerate digital transformation initiatives",
      "Ensure compliance with industry standards and regulations"
    ],
    examples: [
      {
        title: "Global Financial Services Transformation",
        description: "Implemented comprehensive AIOps solution for a Fortune 500 bank with 10,000+ servers across 15 countries, achieving unprecedented operational efficiency and regulatory compliance.",
        metrics: [
          { label: "System Uptime", value: "99.99%" },
          { label: "Incident Reduction", value: "85%" },
          { label: "MTTR Improvement", value: "78%" },
          { label: "Cost Savings", value: "$12M annually" }
        ]
      },
      {
        title: "E-commerce Platform Optimization",
        description: "Deployed AI-powered observability for a leading e-commerce platform processing 1M+ transactions daily during peak seasons, ensuring seamless customer experience.",
        metrics: [
          { label: "Performance Improvement", value: "55%" },
          { label: "Transaction Success Rate", value: "99.8%" },
          { label: "Alert Accuracy", value: "96%" },
          { label: "Revenue Protection", value: "$50M+" }
        ]
      }
    ],
    technologies: [
      "BMC Helix Operations Management",
      "BMC TrueSight",
      "Zabbix",
      "Netreo",
      "Machine Learning",
      "Big Data Analytics",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "Elasticsearch"
    ],
    image: "/img/solutions/observability.jpg",
    screenshots: [
      {
        url: "/img/solutions/smart_reporting_1.png",
        title: "Smart Reporting Dashboard",
        description: "Advanced reporting and analytics dashboard providing real-time insights into system performance"
      },
      {
        url: "/img/solutions/tssa_architecture_2002.png", 
        title: "TrueSight Architecture",
        description: "Comprehensive architecture diagram showing integrated monitoring and observability stack"
      }
    ],
    category: "observability"
  },
  {
    id: 2,
    slug: "it-discovery-asset-management",
    title: "IT Discovery & Asset Management",
    titleTr: "IT Keşfi ve Varlık Yönetimi",
    description: "Achieve complete IT visibility with automated discovery, comprehensive asset management, and intelligent optimization across your entire technology landscape",
    detailedDescription: "Our comprehensive IT Discovery and Asset Management solutions provide complete visibility and control over your technology landscape through automated discovery, real-time inventory management, and intelligent asset optimization. From hardware and software to cloud resources and dependencies, we help organizations make informed decisions, optimize costs, and ensure compliance across complex IT environments.",
    icon: <SearchIcon className="size-10 text-primary" />,
    services: [
      "BMC Helix Discovery",
      "BMC Client Management (BCM)",
      "Snow Software Asset Management",
      "Configuration Management Database (CMDB)",
      "Software License Optimization",
      "Cloud Asset Discovery",
      "Dependency Mapping & Analysis"
    ],
    features: [
      "Automated network and cloud discovery across hybrid environments",
      "Real-time asset inventory with continuous updates",
      "Comprehensive CMDB with relationship mapping",
      "Software license management and compliance tracking",
      "Business service dependency visualization",
      "Cost allocation and chargeback capabilities",
      "Risk assessment and vulnerability correlation",
      "API integrations with existing IT tools",
      "Endpoint profile management with detailed properties",
      "Hardware and software bill of materials tracking",
      "Integrated remote control capabilities"
    ],
    benefits: [
      "Reduce software licensing costs by 30-40%",
      "Improve asset utilization rates by 50%",
      "Achieve 100% visibility into IT infrastructure",
      "Ensure 99% compliance with licensing agreements",
      "Accelerate change management processes by 65%",
      "Optimize IT spending with data-driven insights",
      "Reduce security risks through complete asset visibility",
      "Enable faster incident resolution with accurate dependency maps",
      "Eliminate costly on-site visits with remote diagnostics",
      "Stay audit-ready with automated asset tracking"
    ],
    examples: [
      {
        title: "Multinational Corporation Asset Optimization",
        description: "Implemented comprehensive asset discovery and management for a global technology company with 50,000+ devices across 40 countries, uncovering significant cost savings and compliance improvements.",
        metrics: [
          { label: "License Cost Savings", value: "$8.5M+" },
          { label: "Asset Visibility", value: "100%" },
          { label: "Compliance Rate", value: "99.2%" },
          { label: "Discovery Accuracy", value: "98.7%" }
        ]
      },
      {
        title: "Healthcare System Infrastructure Mapping",
        description: "Deployed automated discovery across a large healthcare network's hybrid cloud environment, mapping 15,000+ dependencies and enabling secure digital transformation.",
        metrics: [
          { label: "Dependencies Mapped", value: "15,000+" },
          { label: "Discovery Speed", value: "95% faster" },
          { label: "Change Success Rate", value: "97%" },
          { label: "Risk Reduction", value: "70%" }
        ]
      }
    ],
    technologies: [
      "BMC Helix Discovery",
      "BMC Client Management",
      "Snow Software",
      "ServiceNow CMDB",
      "Microsoft SCCM",
      "AWS Config",
      "Azure Resource Manager",
      "VMware vRealize",
      "Lansweeper",
      "ManageEngine AssetExplorer",
      "REST APIs"
    ],
    image: "/img/solutions/discovery.jpg",
    screenshots: [
      {
        url: "/img/solutions/explore_data.png",
        title: "Discovery Dashboard - Explore Data",
        description: "Comprehensive dashboard displaying every CI discovered in the environment—servers, VMs, software instances, databases, network devices, and storage"
      },
      {
        url: "/img/solutions/service-model.png",
        title: "Service Modeling & Dependency Maps",
        description: "Automatically generated service maps showing how servers, databases, network elements relate within business services"
      },
      {
        url: "/img/solutions/host_list.png",
        title: "Detailed Host Inventory",
        description: "Complete server inventory with OS version, hardware vendor, virtualization state for lifecycle planning"
      },
      {
        url: "/img/solutions/report_software_inventory.png",
        title: "Software Inventory Detail",
        description: "Version details and host locations for software products supporting license compliance and upgrade planning"
      },
      {
        url: "/img/solutions/explore_reports.png",
        title: "Built-in Reports & Analytics",
        description: "Ready-to-run analyses including infrastructure distribution, endpoint access, and CMDB sync status"
      },
      {
        url: "/img/solutions/detailed_properties.png",
        title: "Endpoint Profile - Detailed Properties",
        description: "Complete device profile with user, OS build, IP address, encryption status, and virtualization data"
      },
      {
        url: "/img/solutions/inventories_hardware.png",
        title: "Hardware Inventory",
        description: "Full hardware bill of materials with expandable nodes for slot-level details and capacities"
      },
      {
        url: "/img/solutions/inventories_hardware_ram.png",
        title: "Physical Memory Details",
        description: "Granular hardware inventory showing memory configurations and specifications"
      },
      {
        url: "/img/solutions/remote_control.png",
        title: "Integrated Remote Control Console",
        description: "Built-in remote control for secure, real-time endpoint management and troubleshooting"
      }
    ],
    category: "discovery"
  },
  {
    id: 3,
    slug: "automation",
    title: "IT Automation & Orchestration",
    titleTr: "IT Otomasyon ve Orkestrasyon",
    description: "Accelerate digital transformation with intelligent automation solutions that streamline operations, reduce costs, and enhance reliability across your IT landscape",
    detailedDescription: "Our comprehensive automation and orchestration solutions transform complex IT operations through intelligent workflow automation, advanced job scheduling, and seamless integration capabilities. From infrastructure provisioning to application deployment and business process automation, we help organizations achieve operational excellence, reduce human error, and accelerate innovation cycles.",
    icon: <SettingsIcon className="size-10 text-primary" />,
    services: [
      "BMC TrueSight Server Automation",
      "BMC Control-M Workload Automation",
      "BMC TrueSight Orchestration",
      "BMC Client Management Deployment",
      "Infrastructure as Code (IaC)",
      "CI/CD Pipeline Automation",
      "Business Process Automation"
    ],
    features: [
      "End-to-end workflow automation and orchestration",
      "Advanced job scheduling with SLA management",
      "Configuration management and compliance automation",
      "Self-healing infrastructure capabilities",
      "Integration with cloud platforms and DevOps tools",
      "Real-time monitoring and automated remediation",
      "Policy-driven automation with role-based access",
      "Scalable automation across hybrid environments",
      "Automated software deployment and migration",
      "Patch evaluation, distribution, and monitoring"
    ],
    benefits: [
      "Reduce manual tasks and human errors by 85%",
      "Improve deployment success rates to 99.5%",
      "Decrease operational costs by 55% through automation",
      "Accelerate time-to-market by 70% for new services",
      "Enhance system reliability and consistency",
      "Enable 24/7 operations with minimal human intervention",
      "Improve compliance with automated policy enforcement",
      "Scale operations efficiently without proportional staff increases",
      "Eliminate costly on-site deployments with remote automation",
      "Keep endpoints protected with automated patch management"
    ],
    examples: [
      {
        title: "DevOps Transformation for Software Company",
        description: "Implemented comprehensive automation platform for a leading software company, transforming their CI/CD pipeline and reducing deployment times from hours to minutes while improving quality.",
        metrics: [
          { label: "Deployment Speed", value: "96% faster" },
          { label: "Error Reduction", value: "92%" },
          { label: "Release Frequency", value: "15x increase" },
          { label: "Developer Productivity", value: "65% improvement" }
        ]
      },
      {
        title: "Enterprise Infrastructure Automation",
        description: "Deployed automated infrastructure provisioning and management for a Fortune 100 company, enabling rapid scaling and ensuring consistent compliance across global operations.",
        metrics: [
          { label: "Provisioning Time", value: "90% faster" },
          { label: "Consistency Rate", value: "100%" },
          { label: "Cost Optimization", value: "45%" },
          { label: "Compliance Score", value: "99.8%" }
        ]
      }
    ],
    technologies: [
      "BMC TrueSight Automation",
      "BMC Control-M",
      "BMC Client Management",
      "Ansible",
      "Terraform",
      "Jenkins",
      "GitLab CI/CD",
      "Kubernetes",
      "Docker",
      "Puppet",
      "Chef",
      "PowerShell DSC",
      "Red Hat Satellite"
    ],
    image: "/img/solutions/automation.jpg",
    screenshots: [
      {
        url: "/img/solutions/main_dashboard.png",
        title: "Main Automation Dashboard",
        description: "Centralized dashboard for managing all automation tasks, deployments, and system health monitoring"
      },
      {
        url: "/img/solutions/deploy.png",
        title: "Software Deployment Console",
        description: "Roll out, upgrade, or migrate software with automated deployment ensuring secure and consistent installations"
      },
      {
        url: "/img/solutions/patch_management_bulletins.png",
        title: "Patch Management Bulletins",
        description: "Comprehensive patch bulletin management for evaluating and distributing security updates"
      },
      {
        url: "/img/solutions/patch_management_missingpatches.png",
        title: "Missing Patches Overview",
        description: "Real-time visibility into missing patches across all endpoints for proactive vulnerability management"
      }
    ],
    category: "automation"
  },
  {
    id: 4,
    slug: "security",
    title: "Security & Compliance Management",
    titleTr: "Güvenlik ve Uyumluluk Yönetimi",
    description: "Protect your organization with comprehensive security solutions featuring advanced threat detection, vulnerability management, and zero-trust access controls",
    detailedDescription: "Our advanced security and compliance management solutions provide comprehensive protection against modern cyber threats through continuous vulnerability assessment, privileged access management, and multi-factor authentication. With AI-powered threat detection, automated remediation workflows, and comprehensive compliance reporting, we help organizations maintain robust security postures while meeting regulatory requirements.",
    icon: <ShieldCheckIcon className="size-10 text-primary" />,
    services: [
      "BMC Helix Vulnerability Management",
      "BMC TrueSight Security & Compliance (TSAC)",
      "MonoSign Multi-Factor Authentication",
      "MonoPAM Privileged Access Management",
      "Security Information and Event Management (SIEM)",
      "Zero Trust Security Implementation",
      "Compliance Automation & Reporting"
    ],
    features: [
      "Continuous vulnerability scanning and assessment",
      "AI-powered threat detection and response",
      "Privileged access management with session recording",
      "Multi-factor authentication with biometric support",
      "Automated security policy enforcement",
      "Real-time security monitoring and alerting",
      "Compliance dashboard with automated reporting",
      "Integration with security orchestration platforms",
      "Patch compliance tracking and management",
      "Automated policy enforcement across endpoints"
    ],
    benefits: [
      "Reduce security incidents by 80% through proactive measures",
      "Achieve 95% vulnerability remediation rate within SLA",
      "Improve compliance scores by 90% with automated controls",
      "Decrease privileged access risks by 95%",
      "Accelerate incident response times by 70%",
      "Ensure regulatory compliance with major standards",
      "Reduce security management overhead by 60%",
      "Enhance overall security posture and resilience",
      "Generate instant compliance evidence for auditors",
      "Track ROI and total cost of ownership for security investments"
    ],
    examples: [
      {
        title: "Financial Institution Security Transformation",
        description: "Implemented comprehensive security management platform for a major regional bank, achieving SOX compliance and protecting against advanced persistent threats while maintaining operational efficiency.",
        metrics: [
          { label: "Vulnerability Reduction", value: "96%" },
          { label: "Compliance Score", value: "100%" },
          { label: "Incident Prevention", value: "88%" },
          { label: "Audit Readiness", value: "99.9%" }
        ]
      },
      {
        title: "Healthcare Data Protection Program",
        description: "Deployed advanced security controls for a large healthcare provider with 25+ facilities, ensuring HIPAA compliance and protecting sensitive patient data while enabling digital health initiatives.",
        metrics: [
          { label: "Data Breach Prevention", value: "100%" },
          { label: "Access Control Accuracy", value: "99.95%" },
          { label: "HIPAA Compliance", value: "100%" },
          { label: "Security Training Completion", value: "98%" }
        ]
      }
    ],
    technologies: [
      "BMC Helix Vulnerability Management",
      "BMC TrueSight Security & Compliance",
      "MonoSign",
      "MonoPAM",
      "CyberArk",
      "Qualys VMDR",
      "Rapid7 InsightVM",
      "Okta",
      "Splunk SIEM",
      "IBM QRadar",
      "Palo Alto Networks",
      "Microsoft Sentinel",
      "AWS Security Hub"
    ],
    image: "/img/solutions/security.jpg",
    screenshots: [
      {
        url: "/img/solutions/tsac_compliance.png",
        title: "TSAC Compliance Dashboard",
        description: "Comprehensive compliance monitoring and reporting dashboard for security policy enforcement"
      },
      {
        url: "/img/solutions/tsac_patch_dashboard.png",
        title: "TSAC Patch Dashboard",
        description: "Advanced patch management dashboard showing security update status across the enterprise"
      },
      {
        url: "/img/solutions/tsac_patch.png",
        title: "Patch Management Interface",
        description: "Detailed patch management interface for tracking and deploying security updates"
      },
      {
        url: "/img/solutions/compliance.png",
        title: "Compliance Management Console",
        description: "Automated policy enforcement and compliance tracking with instant audit evidence generation"
      }
    ],
    category: "security"
  },
  {
    id: 5,
    slug: "finops",
    title: "FinOps & Cloud Cost Optimization",
    titleTr: "FinOps ve Bulut Maliyet Optimizasyonu",
    description: "Maximize ROI on cloud investments with intelligent cost optimization, budget management, and financial governance solutions for modern IT operations",
    detailedDescription: "Our comprehensive FinOps and cloud cost optimization solutions help organizations maximize the return on their technology investments through intelligent cost management, advanced analytics, and automated optimization strategies. With real-time visibility into cloud spending, predictive budget forecasting, and automated cost controls, we enable organizations to balance performance, innovation, and fiscal responsibility.",
    icon: <DollarSignIcon className="size-10 text-primary" />,
    services: [
      "Cloud Cost Optimization & Analytics",
      "Multi-Cloud Financial Management",
      "Budget Planning & Forecasting",
      "Resource Right-Sizing & Automation",
      "Cost Allocation & Chargeback",
      "FinOps Practice Implementation",
      "Software License Cost Optimization"
    ],
    features: [
      "Real-time cloud cost monitoring and analysis",
      "AI-powered spend optimization recommendations",
      "Automated resource scheduling and right-sizing",
      "Multi-cloud cost visibility and governance",
      "Predictive budget forecasting with machine learning",
      "Granular cost allocation and departmental chargeback",
      "Policy-driven spending controls and alerts",
      "ROI tracking and financial performance metrics",
      "Software license consumption monitoring",
      "Automated asset tracking for cost optimization"
    ],
    benefits: [
      "Reduce cloud costs by 35-60% through optimization",
      "Improve budget accuracy by 95% with predictive analytics",
      "Optimize resource utilization rates by 50%",
      "Achieve complete financial visibility across cloud environments",
      "Accelerate cost optimization decisions with real-time insights",
      "Ensure cost governance with automated policy enforcement",
      "Enable innovation within budget constraints",
      "Maximize ROI on cloud and technology investments",
      "Cut software licensing costs by 30-40%",
      "Stay audit-ready with automated cost tracking"
    ],
    examples: [
      {
        title: "Enterprise Multi-Cloud Cost Optimization",
        description: "Implemented comprehensive FinOps platform for a global technology company utilizing AWS, Azure, and GCP, achieving significant cost reductions while improving performance and governance.",
        metrics: [
          { label: "Total Cost Reduction", value: "52%" },
          { label: "Budget Accuracy", value: "97%" },
          { label: "Waste Elimination", value: "68%" },
          { label: "Annual Savings", value: "$18M+" }
        ]
      },
      {
        title: "Startup Growth Cost Management",
        description: "Deployed automated cost optimization for a rapidly scaling SaaS startup, enabling sustainable growth while maintaining cost efficiency during 300% user growth.",
        metrics: [
          { label: "Cost per Customer", value: "45% reduction" },
          { label: "Resource Efficiency", value: "60% improvement" },
          { label: "Automated Savings", value: "$2.5M annually" },
          { label: "Scaling Efficiency", value: "3x better" }
        ]
      }
    ],
    technologies: [
      "AWS Cost Explorer",
      "Azure Cost Management",
      "Google Cloud Billing",
      "CloudHealth by VMware",
      "Cloudability",
      "ParkMyCloud",
      "Spot.io",
      "Densify",
      "Turbonomic",
      "Kubernetes Cost Management",
      "Terraform Cloud",
      "CloudFormation",
      "BMC Client Management",
      "Snow Software"
    ],
    image: "/img/solutions/finops.jpg",
    screenshots: [
      {
        url: "/img/solutions/ocp.png",
        title: "Optimization Control Panel",
        description: "Advanced cost optimization dashboard providing insights into spending patterns and optimization opportunities"
      },
      {
        url: "/img/solutions/software_inventory.png",
        title: "Software Inventory Cost Analysis",
        description: "Detailed software inventory tracking for license optimization and cost management"
      },
      {
        url: "/img/solutions/reports_global_software.png",
        title: "Global Software Reports",
        description: "Comprehensive software usage reporting for license compliance and cost optimization"
      },
      {
        url: "/img/solutions/reports.png",
        title: "Financial Analytics Dashboard",
        description: "Advanced reporting capabilities for tracking ROI and total cost of ownership across IT assets"
      }
    ],
    category: "finops"
  }
]; 