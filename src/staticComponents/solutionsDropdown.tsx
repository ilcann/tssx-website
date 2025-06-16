import type { TFunction } from "i18next";

export const getSolutionsDropdown = (t: TFunction) => [
  {
    label: `👁 ${t("solutions_dropdown_monitor")}`,
    sub: t("solutions_dropdown_monitor_sub"),
    to: "/solutions/observability",
  },
  {
    label: `🔍 ${t("solutions_dropdown_track")}`,
    sub: t("solutions_dropdown_track_sub"),
    to: "/solutions/asset-management",
  },
  {
    label: `⚙️ ${t("solutions_dropdown_automate")}`,
    sub: t("solutions_dropdown_automate_sub"),
    to: "/solutions/automation",
  },
  {
    label: `🛡 ${t("solutions_dropdown_security")}`,
    sub: t("solutions_dropdown_security_sub"),
    to: "/solutions/security",
  },
  {
    label: `💰 ${t("solutions_dropdown_optimize")}`,
    sub: t("solutions_dropdown_optimize_sub"),
    to: "/solutions/finops",
  },
];