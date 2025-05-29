import React from "react";

export type SolutionCardProps = {
  icon: React.ReactNode;
  title: string;
  titleTr: string;
  services: string[];
};

export type DetailedSolution = {
  id: number;
  slug: string;
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
  category:
    | "observability"
    | "automation"
    | "security"
    | "finops"
    | "discovery";
};
