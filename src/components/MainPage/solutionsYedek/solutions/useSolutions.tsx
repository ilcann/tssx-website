import { getSolutionData } from "@/staticComponents/solution";
import { useTranslation } from "react-i18next";

const titleToIdMapping: Record<string, string> = {
  "Observability": "observability",
  "IT Discovery & Asset Management": "asset-management",
  "Automation": "automation",
  "Security": "security",
  "FinOPS": "finops",
};

export const useSolutions = () => {
  const { t } = useTranslation();
  const solutionData = getSolutionData(t);

  return solutionData.map((solution) => {
    const detailedSolutionId = titleToIdMapping[solution.title];
    return {
      ...solution,
      id: detailedSolutionId,
    };
  });
};