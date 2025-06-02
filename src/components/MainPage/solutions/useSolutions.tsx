import { solutionData } from "@/staticComponents/solution";
import { detailedSolutionData } from "@/staticComponents/detailedSolutions";

export const useSolutions = () => {
  return solutionData.map((solution) => {
    const detailedSolution = detailedSolutionData.find(
      (detailed) => detailed.title === solution.title
    );
    return {
      ...solution,
      id: detailedSolution?.id,
    };
  });
};