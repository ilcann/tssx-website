import { solutionData } from "@/staticComponents/solution";

// Mapping between solution card titles and detailed solution IDs
const titleToIdMapping: Record<string, string> = {
  "Observability": "observability", // Maps to "Observability & AIOps"
  "IT Discovery & Asset Management": "asset-management",
  "Automation": "automation", // Maps to "IT Automation & Orchestration"
  "Security": "security", // Maps to "Security & Compliance Management"
  "FinOPS": "finops", // Maps to "FinOps & Cloud Cost Optimization"
};

export const useSolutions = () => {
  return solutionData.map((solution) => {
    const detailedSolutionId = titleToIdMapping[solution.title];
    return {
      ...solution,
      id: detailedSolutionId,
    };
  });
};