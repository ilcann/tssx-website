import React from "react";

export type LocalizedString = {
  en: string;
  tr: string;
};

export type SolutionCardProps = {
  icon: React.ReactNode;
  title: string;
  label: string;
  services: string[];
};

export type DetailedSolution = {
  id: number;
  slug: LocalizedString;
  title: string;
  titleTr: string;
  description: string;
  detailedDescription: string;
  icon: React.ReactNode;
  services: string[];
  features: string[];
  benefits: string[];
  examples: {
    title: string;
    description: string;
    metrics?: {
      label: string;
      value: string;
    }[];
  }[];
  technologies: string[];
  image: string;
  screenshots?: {
    url: string;
    title: string;
    description: string;
  }[];
  category:
    | "observability"
    | "automation"
    | "security"
    | "finops"
    | "discovery";
  heroMetrics?: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
};
