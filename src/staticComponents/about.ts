import type { CaseStudyProps } from "../types/about";
import type { TFunction } from "i18next";

export const getCaseStudies = (t: TFunction): CaseStudyProps[] => [
  {
    title: t("case_study_1_title"),
    subtitle: t("case_study_1_subtitle"),
    description: t("case_study_1_description"),
    points: [
      {
        label: t("case_study_1_point_1_label"),
        value: t("case_study_1_point_1_value"),
      },
      {
        label: t("case_study_1_point_2_label"),
        value: t("case_study_1_point_2_value"),
      },
    ],
  },
  {
    title: t("case_study_2_title"),
    subtitle: t("case_study_2_subtitle"),
    description: t("case_study_2_description"),
    points: [
      {
        label: t("case_study_2_point_1_label"),
        value: t("case_study_2_point_1_value"),
      },
      {
        label: t("case_study_2_point_2_label"),
        value: t("case_study_2_point_2_value"),
      },
      {
        label: t("case_study_2_point_3_label"),
        value: t("case_study_2_point_3_value"),
      },
    ],
  },
];

export const getMilestones = (t: TFunction) => [
  {
    year: "2018",
    title: t("milestone_2018_title"),
    description: t("milestone_2018_description"),
  },
  {
    year: "2019",
    title: t("milestone_2019_title"),
    description: t("milestone_2019_description"),
  },
  {
    year: "2021",
    title: t("milestone_2021_title"),
    description: t("milestone_2021_description"),
  },
  {
    year: "2023",
    title: t("milestone_2023_title"),
    description: t("milestone_2023_description"),
  },
  {
    year: "2024",
    title: t("milestone_2024_title"),
    description: t("milestone_2024_description"),
  },
];
