import { SolutionCard } from "./Solutions.card";

interface SolutionsGridProps {
  solutions: {
    icon: React.ReactNode;
    title: string;
    titleTr: string;
    services: string[];
    id?: string;
  }[];
}

const SolutionsGrid = ({ solutions }: SolutionsGridProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-7xl">
    {solutions.map((solution, index) => (
      <SolutionCard
        key={index}
        icon={solution.icon}
        title={solution.title}
        titleTr={solution.titleTr}
        services={solution.services}
        id={solution.id}
        index={index}
      />
    ))}
  </div>
);

export default SolutionsGrid;