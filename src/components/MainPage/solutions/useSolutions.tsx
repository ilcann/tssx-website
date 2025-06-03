import { solutionData } from "@/staticComponents/solution";

// Mapping between solution card titles and detailed solution IDs
const titleToIdMapping: Record<string, number> = {
  "Observability": 1, // Maps to "Observability & AIOps"
  "IT Discovery & Asset Management": 2,
  "Automation": 3, // Maps to "IT Automation & Orchestration"
  "Security": 4, // Maps to "Security & Compliance Management"
  "FinOPS": 5, // Maps to "FinOps & Cloud Cost Optimization"
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