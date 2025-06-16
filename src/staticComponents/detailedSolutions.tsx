import {
  EyeIcon,
  SearchIcon,
  SettingsIcon,
  ShieldCheckIcon,
  DollarSignIcon,
} from "lucide-react";
import type { DetailedSolution } from "@/types/solution";
import type { TFunction } from "i18next";

export const getDetailedSolutionData = (t: TFunction): DetailedSolution[] => [
  {
    id: 1,
    slug: "observability",
    title: t("solution_title_observability"),
    titleTr: t("solution_title_observability"),
    description: t("solution_description_observability"),
    detailedDescription: t("solution_detailed_description_observability"),
    icon: <EyeIcon className="size-10 text-primary" />,
    services: [
      "BMC Helix Operations Management",
      "BMC TrueSight Capacity Optimization",
      "Zabbix Enterprise Monitoring",
      t("observability_service_ai_detection"),
      t("observability_service_realtime_analytics"),
      t("observability_service_automated_response")
    ],
    features: [
      t("observability_feature_ai_driven"),
      t("observability_feature_realtime_monitoring"),
      t("observability_feature_predictive_analytics"),
      t("observability_feature_unified_dashboard"),
      t("observability_feature_automated_incident"),
      t("observability_feature_ml_optimization"),
      t("observability_feature_devops_integration"),
      t("observability_feature_advanced_alerting")
    ],
    benefits: [
      t("observability_benefit_reduce_mttr"),
      t("observability_benefit_prevent_incidents"),
      t("observability_benefit_system_uptime"),
      t("observability_benefit_decrease_costs"),
      t("observability_benefit_improve_productivity"),
      t("observability_benefit_enhance_satisfaction"),
      t("observability_benefit_accelerate_transformation"),
      t("observability_benefit_ensure_compliance")
    ],
    examples: [
      {
        title: t("observability_example_1_title"),
        description: t("observability_example_1_description"),
        metrics: [
          { label: t("observability_example_1_metric_1_label"), value: t("observability_example_1_metric_1_value") },
          { label: t("observability_example_1_metric_2_label"), value: t("observability_example_1_metric_2_value") },
          { label: t("observability_example_1_metric_3_label"), value: t("observability_example_1_metric_3_value") },
          { label: t("observability_example_1_metric_4_label"), value: t("observability_example_1_metric_4_value") }
        ]
      },
      {
        title: t("observability_example_2_title"),
        description: t("observability_example_2_description"),
        metrics: [
          { label: t("observability_example_2_metric_1_label"), value: t("observability_example_2_metric_1_value") },
          { label: t("observability_example_2_metric_2_label"), value: t("observability_example_2_metric_2_value") },
          { label: t("observability_example_2_metric_3_label"), value: t("observability_example_2_metric_3_value") },
          { label: t("observability_example_2_metric_4_label"), value: t("observability_example_2_metric_4_value") }
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
        title: t("observability_screenshot_1_title"),
        description: t("observability_screenshot_1_description")
      },
      {
        url: "/img/solutions/tssa_architecture_2002.png", 
        title: t("observability_screenshot_2_title"),
        description: t("observability_screenshot_2_description")
      }
    ],
    category: "observability",
    heroMetrics: [
      {
        label: t("observability_example_1_metric_1_label"),
        value: t("observability_example_1_metric_1_value"),
        icon: <EyeIcon className="h-8 w-8" />,
      },
      {
        label: t("observability_example_1_metric_2_label"),
        value: t("observability_example_1_metric_2_value"),
        icon: <EyeIcon className="h-8 w-8" />,
      },
      {
        label: t("observability_example_1_metric_3_label"),
        value: t("observability_example_1_metric_3_value"),
        icon: <EyeIcon className="h-8 w-8" />,
      },
    ],
  },
  {
    id: 2,
    slug: "asset-management",
    title: t("solution_title_asset_management"),
    titleTr: t("solution_title_asset_management"),
    description: t("solution_description_asset_management"),
    detailedDescription: t("solution_detailed_description_asset_management"),
    icon: <SearchIcon className="size-10 text-primary" />,
    services: [
      "BMC Helix Discovery",
      "BMC Client Management (BCM)",
      "Snow Software Asset Management",
      t("asset_management_service_cmdb"),
      t("asset_management_service_license_optimization"),
      t("asset_management_service_cloud_discovery"),
      t("asset_management_service_dependency_mapping")
    ],
    features: [
      t("asset_management_feature_automated_discovery"),
      t("asset_management_feature_real_time_inventory"),
      t("asset_management_feature_comprehensive_cmdb"),
      t("asset_management_feature_license_management"),
      t("asset_management_feature_dependency_visualization"),
      t("asset_management_feature_cost_allocation"),
      t("asset_management_feature_risk_assessment"),
      t("asset_management_feature_api_integrations"),
      t("asset_management_feature_endpoint_profile"),
      t("asset_management_feature_bom_tracking"),
      t("asset_management_feature_remote_control")
    ],
    benefits: [
      t("asset_management_benefit_reduce_license_costs"),
      t("asset_management_benefit_improve_utilization"),
      t("asset_management_benefit_achieve_visibility"),
      t("asset_management_benefit_ensure_compliance"),
      t("asset_management_benefit_accelerate_change"),
      t("asset_management_benefit_optimize_spending"),
      t("asset_management_benefit_reduce_security_risks"),
      t("asset_management_benefit_enable_faster_resolution"),
      t("asset_management_benefit_eliminate_on_site_visits"),
      t("asset_management_benefit_stay_audit_ready")
    ],
    examples: [
      {
        title: t("asset_management_example_1_title"),
        description: t("asset_management_example_1_description"),
        metrics: [
          { label: t("asset_management_example_1_metric_1_label"), value: t("asset_management_example_1_metric_1_value") },
          { label: t("asset_management_example_1_metric_2_label"), value: t("asset_management_example_1_metric_2_value") },
          { label: t("asset_management_example_1_metric_3_label"), value: t("asset_management_example_1_metric_3_value") },
          { label: t("asset_management_example_1_metric_4_label"), value: t("asset_management_example_1_metric_4_value") }
        ]
      },
      {
        title: t("asset_management_example_2_title"),
        description: t("asset_management_example_2_description"),
        metrics: [
          { label: t("asset_management_example_2_metric_1_label"), value: t("asset_management_example_2_metric_1_value") },
          { label: t("asset_management_example_2_metric_2_label"), value: t("asset_management_example_2_metric_2_value") },
          { label: t("asset_management_example_2_metric_3_label"), value: t("asset_management_example_2_metric_3_value") },
          { label: t("asset_management_example_2_metric_4_label"), value: t("asset_management_example_2_metric_4_value") }
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
        title: t("asset_management_screenshot_1_title"),
        description: t("asset_management_screenshot_1_description")
      },
      {
        url: "/img/solutions/service-model.png",
        title: t("asset_management_screenshot_2_title"),
        description: t("asset_management_screenshot_2_description")
      },
      {
        url: "/img/solutions/host_list.png",
        title: t("asset_management_screenshot_3_title"),
        description: t("asset_management_screenshot_3_description")
      },
      {
        url: "/img/solutions/report_software_inventory.png",
        title: t("asset_management_screenshot_4_title"),
        description: t("asset_management_screenshot_4_description")
      },
      {
        url: "/img/solutions/explore_reports.png",
        title: t("asset_management_screenshot_5_title"),
        description: t("asset_management_screenshot_5_description")
      },
      {
        url: "/img/solutions/detailed_properties.png",
        title: t("asset_management_screenshot_6_title"),
        description: t("asset_management_screenshot_6_description")
      },
      {
        url: "/img/solutions/inventories_hardware.png",
        title: t("asset_management_screenshot_7_title"),
        description: t("asset_management_screenshot_7_description")
      },
      {
        url: "/img/solutions/inventories_hardware_ram.png",
        title: t("asset_management_screenshot_8_title"),
        description: t("asset_management_screenshot_8_description")
      },
      {
        url: "/img/solutions/remote_control.png",
        title: t("asset_management_screenshot_9_title"),
        description: t("asset_management_screenshot_9_description")
      }
    ],
    category: "discovery",
    heroMetrics: [
      {
        label: t("asset_management_hero_metric_1_label"),
        value: t("asset_management_hero_metric_1_value"),
        icon: <SearchIcon className="h-8 w-8" />,
      },
      {
        label: t("asset_management_hero_metric_2_label"),
        value: t("asset_management_hero_metric_2_value"),
        icon: <SearchIcon className="h-8 w-8" />,
      },
      {
        label: t("asset_management_hero_metric_3_label"),
        value: t("asset_management_hero_metric_3_value"),
        icon: <SearchIcon className="h-8 w-8" />,
      },
    ],
  },
  {
    id: 3,
    slug: "automation",
    title: t("solution_title_automation"),
    titleTr: t("solution_title_automation"),
    description: t("solution_description_automation"),
    detailedDescription: t("solution_detailed_description_automation"),
    icon: <SettingsIcon className="size-10 text-primary" />,
    services: [
      "BMC TrueSight Server Automation",
      "BMC Control-M Workload Automation",
      "BMC TrueSight Orchestration",
      "BMC Client Management Deployment",
      t("automation_service_iac"),
      t("automation_service_cicd"),
      t("automation_service_bpa")
    ],
    features: [
      t("automation_feature_workflow_automation"),
      t("automation_feature_advanced_scheduling"),
      t("automation_feature_config_management"),
      t("automation_feature_self_healing"),
      t("automation_feature_cloud_integration"),
      t("automation_feature_real_time_monitoring"),
      t("automation_feature_policy_driven"),
      t("automation_feature_scalable_automation"),
      t("automation_feature_automated_deployment"),
      t("automation_feature_patch_evaluation")
    ],
    benefits: [
      t("automation_benefit_reduce_manual_tasks"),
      t("automation_benefit_improve_deployment_rates"),
      t("automation_benefit_decrease_costs"),
      t("automation_benefit_accelerate_time_to_market"),
      t("automation_benefit_enhance_reliability"),
      t("automation_benefit_enable_247_operations"),
      t("automation_benefit_improve_compliance"),
      t("automation_benefit_scale_operations"),
      t("automation_benefit_eliminate_on_site_deployments"),
      t("automation_benefit_keep_endpoints_protected")
    ],
    examples: [
      {
        title: t("automation_example_1_title"),
        description: t("automation_example_1_description"),
        metrics: [
          { label: t("automation_example_1_metric_1_label"), value: t("automation_example_1_metric_1_value") },
          { label: t("automation_example_1_metric_2_label"), value: t("automation_example_1_metric_2_value") },
          { label: t("automation_example_1_metric_3_label"), value: t("automation_example_1_metric_3_value") },
          { label: t("automation_example_1_metric_4_label"), value: t("automation_example_1_metric_4_value") }
        ]
      },
      {
        title: t("automation_example_2_title"),
        description: t("automation_example_2_description"),
        metrics: [
          { label: t("automation_example_2_metric_1_label"), value: t("automation_example_2_metric_1_value") },
          { label: t("automation_example_2_metric_2_label"), value: t("automation_example_2_metric_2_value") },
          { label: t("automation_example_2_metric_3_label"), value: t("automation_example_2_metric_3_value") },
          { label: t("automation_example_2_metric_4_label"), value: t("automation_example_2_metric_4_value") }
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
        title: t("automation_screenshot_1_title"),
        description: t("automation_screenshot_1_description")
      },
      {
        url: "/img/solutions/deploy.png",
        title: t("automation_screenshot_2_title"),
        description: t("automation_screenshot_2_description")
      },
      {
        url: "/img/solutions/patch_management_bulletins.png",
        title: t("automation_screenshot_3_title"),
        description: t("automation_screenshot_3_description")
      },
      {
        url: "/img/solutions/patch_management_missingpatches.png",
        title: t("automation_screenshot_4_title"),
        description: t("automation_screenshot_4_description")
      }
    ],
    category: "automation",
    heroMetrics: [
      {
        label: t("automation_hero_metric_1_label"),
        value: t("automation_hero_metric_1_value"),
        icon: <SettingsIcon className="h-8 w-8" />,
      },
      {
        label: t("automation_hero_metric_2_label"),
        value: t("automation_hero_metric_2_value"),
        icon: <SettingsIcon className="h-8 w-8" />,
      },
      {
        label: t("automation_hero_metric_3_label"),
        value: t("automation_hero_metric_3_value"),
        icon: <SettingsIcon className="h-8 w-8" />,
      },
    ],
  },
  {
    id: 4,
    slug: "security",
    title: t("solution_title_security"),
    titleTr: t("solution_title_security"),
    description: t("solution_description_security"),
    detailedDescription: t("solution_detailed_description_security"),
    icon: <ShieldCheckIcon className="size-10 text-primary" />,
    services: [
      "BMC Helix Vulnerability Management",
      "BMC TrueSight Security & Compliance (TSAC)",
      "MonoSign Multi-Factor Authentication",
      "MonoPAM Privileged Access Management",
      t("security_service_siem"),
      t("security_service_zero_trust"),
      t("security_service_compliance_automation")
    ],
    features: [
      t("security_feature_vulnerability_scanning"),
      t("security_feature_ai_threat_detection"),
      t("security_feature_pam"),
      t("security_feature_mfa"),
      t("security_feature_automated_policy"),
      t("security_feature_real_time_monitoring"),
      t("security_feature_compliance_dashboard"),
      t("security_feature_orchestration_integration"),
      t("security_feature_patch_compliance"),
      t("security_feature_automated_endpoint_policy")
    ],
    benefits: [
      t("security_benefit_reduce_incidents"),
      t("security_benefit_achieve_remediation_rate"),
      t("security_benefit_improve_compliance_scores"),
      t("security_benefit_decrease_access_risks"),
      t("security_benefit_accelerate_response_times"),
      t("security_benefit_ensure_regulatory_compliance"),
      t("security_benefit_reduce_management_overhead"),
      t("security_benefit_enhance_security_posture"),
      t("security_benefit_generate_audit_evidence"),
      t("security_benefit_track_roi")
    ],
    examples: [
      {
        title: t("security_example_1_title"),
        description: t("security_example_1_description"),
        metrics: [
          { label: t("security_example_1_metric_1_label"), value: t("security_example_1_metric_1_value") },
          { label: t("security_example_1_metric_2_label"), value: t("security_example_1_metric_2_value") },
          { label: t("security_example_1_metric_3_label"), value: t("security_example_1_metric_3_value") },
          { label: t("security_example_1_metric_4_label"), value: t("security_example_1_metric_4_value") }
        ]
      },
      {
        title: t("security_example_2_title"),
        description: t("security_example_2_description"),
        metrics: [
          { label: t("security_example_2_metric_1_label"), value: t("security_example_2_metric_1_value") },
          { label: t("security_example_2_metric_2_label"), value: t("security_example_2_metric_2_value") },
          { label: t("security_example_2_metric_3_label"), value: t("security_example_2_metric_3_value") },
          { label: t("security_example_2_metric_4_label"), value: t("security_example_2_metric_4_value") }
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
        title: t("security_screenshot_1_title"),
        description: t("security_screenshot_1_description")
      },
      {
        url: "/img/solutions/tsac_patch_dashboard.png",
        title: t("security_screenshot_2_title"),
        description: t("security_screenshot_2_description")
      },
      {
        url: "/img/solutions/tsac_patch.png",
        title: t("security_screenshot_3_title"),
        description: t("security_screenshot_3_description")
      },
      {
        url: "/img/solutions/compliance.png",
        title: t("security_screenshot_4_title"),
        description: t("security_screenshot_4_description")
      }
    ],
    category: "security",
    heroMetrics: [
      {
        label: t("security_hero_metric_1_label"),
        value: t("security_hero_metric_1_value"),
        icon: <ShieldCheckIcon className="h-8 w-8" />,
      },
      {
        label: t("security_hero_metric_2_label"),
        value: t("security_hero_metric_2_value"),
        icon: <ShieldCheckIcon className="h-8 w-8" />,
      },
      {
        label: t("security_hero_metric_3_label"),
        value: t("security_hero_metric_3_value"),
        icon: <ShieldCheckIcon className="h-8 w-8" />,
      },
    ],
  },
  {
    id: 5,
    slug: "finops",
    title: t("solution_title_finops"),
    titleTr: t("solution_title_finops"),
    description: t("solution_description_finops"),
    detailedDescription: t("solution_detailed_description_finops"),
    icon: <DollarSignIcon className="size-10 text-primary" />,
    services: [
      t("finops_service_cost_optimization"),
      t("finops_service_multi_cloud"),
      t("finops_service_budget_planning"),
      t("finops_service_resource_right_sizing"),
      t("finops_service_cost_allocation"),
      t("finops_service_practice_implementation"),
      t("finops_service_license_optimization")
    ],
    features: [
      t("finops_feature_real_time_cost_monitoring"),
      t("finops_feature_ai_spend_optimization"),
      t("finops_feature_automated_scheduling"),
      t("finops_feature_multi_cloud_visibility"),
      t("finops_feature_predictive_budget_forecasting"),
      t("finops_feature_granular_cost_allocation"),
      t("finops_feature_policy_driven_spending"),
      t("finops_feature_roi_tracking"),
      t("finops_feature_license_consumption_monitoring"),
      t("finops_feature_automated_asset_tracking")
    ],
    benefits: [
      t("finops_benefit_reduce_cloud_costs"),
      t("finops_benefit_improve_budget_accuracy"),
      t("finops_benefit_optimize_resource_utilization"),
      t("finops_benefit_achieve_financial_visibility"),
      t("finops_benefit_accelerate_cost_optimization"),
      t("finops_benefit_ensure_cost_governance"),
      t("finops_benefit_enable_innovation"),
      t("finops_benefit_maximize_roi"),
      t("finops_benefit_cut_software_licensing_costs"),
      t("finops_benefit_stay_audit_ready")
    ],
    examples: [
      {
        title: t("finops_example_1_title"),
        description: t("finops_example_1_description"),
        metrics: [
          { label: t("finops_example_1_metric_1_label"), value: t("finops_example_1_metric_1_value") },
          { label: t("finops_example_1_metric_2_label"), value: t("finops_example_1_metric_2_value") },
          { label: t("finops_example_1_metric_3_label"), value: t("finops_example_1_metric_3_value") },
          { label: t("finops_example_1_metric_4_label"), value: t("finops_example_1_metric_4_value") }
        ]
      },
      {
        title: t("finops_example_2_title"),
        description: t("finops_example_2_description"),
        metrics: [
          { label: t("finops_example_2_metric_1_label"), value: t("finops_example_2_metric_1_value") },
          { label: t("finops_example_2_metric_2_label"), value: t("finops_example_2_metric_2_value") },
          { label: t("finops_example_2_metric_3_label"), value: t("finops_example_2_metric_3_value") },
          { label: t("finops_example_2_metric_4_label"), value: t("finops_example_2_metric_4_value") }
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
        title: t("finops_screenshot_1_title"),
        description: t("finops_screenshot_1_description")
      },
      {
        url: "/img/solutions/software_inventory.png",
        title: t("finops_screenshot_2_title"),
        description: t("finops_screenshot_2_description")
      },
      {
        url: "/img/solutions/reports_global_software.png",
        title: t("finops_screenshot_3_title"),
        description: t("finops_screenshot_3_description")
      },
      {
        url: "/img/solutions/reports.png",
        title: t("finops_screenshot_4_title"),
        description: t("finops_screenshot_4_description")
      }
    ],
    category: "finops",
    heroMetrics: [
      {
        label: t("finops_hero_metric_1_label"),
        value: t("finops_hero_metric_1_value"),
        icon: <DollarSignIcon className="h-8 w-8" />,
      },
      {
        label: t("finops_hero_metric_2_label"),
        value: t("finops_hero_metric_2_value"),
        icon: <DollarSignIcon className="h-8 w-8" />,
      },
      {
        label: t("finops_hero_metric_3_label"),
        value: t("finops_hero_metric_3_value"),
        icon: <DollarSignIcon className="h-8 w-8" />,
      },
    ],
  }
];

// Keep the old export for backward compatibility until we update all imports
export const detailedSolutionData: DetailedSolution[] = []; 