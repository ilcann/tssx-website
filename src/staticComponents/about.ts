import type { CaseStudyProps } from "../types/about";
import type { TFunction } from "i18next";

export const getCaseStudies = (t: TFunction): CaseStudyProps[] => [
  {
    title: t("success.items.0.title"),
    subtitle: t("success.items.0.subtitle"),
    description: t("success.items.0.description"),
    points: [
      {
        label: t("success.items.0.points.0.label"),
        value: t("success.items.0.points.0.value"),
      },
      {
        label: t("success.items.0.points.1.label"),
        value: t("success.items.0.points.1.value"),
      },
    ],
  },
  {
    title: t("success.items.1.title"),
    subtitle: t("success.items.1.subtitle"),
    description: t("success.items.1.description"),
    points: [
      {
        label: t("success.items.1.points.0.label"),
        value: t("success.items.1.points.0.value"),
      },
      {
        label: t("success.items.1.points.1.label"),
        value: t("success.items.1.points.1.value"),
      },
      {
        label: t("success.items.1.points.2.label"),
        value: t("success.items.1.points.2.value"),
      },
    ],
  },
];

export const getMilestones = (t: TFunction) => [
  {
    year: "2018",
    title: t("timeline.milestones.2018.title", { ns: "about" }),
    description: t("timeline.milestones.2018.description", { ns: "about" }),
  },
  {
    year: "2019",
    title: t("timeline.milestones.2019.title", { ns: "about" }),
    description: t("timeline.milestones.2019.description", { ns: "about" }),
  },
  {
    year: "2021",
    title: t("timeline.milestones.2021.title", { ns: "about" }),
    description: t("timeline.milestones.2021.description", { ns: "about" }),
  },
  {
    year: "2023",
    title: t("timeline.milestones.2023.title", { ns: "about" }),
    description: t("timeline.milestones.2023.description", { ns: "about" }),
  },
  {
    year: "2024",
    title: t("timeline.milestones.2024.title", { ns: "about" }),
    description: t("timeline.milestones.2024.description", { ns: "about" }),
  },
];
