import DecorativeBackground from "@/components/ui/DecorativeBackground";
import SolutionsHeader from "./Solutions.header";
import SolutionsGrid from "./Solutions.grid";
import { useSolutions } from "./useSolutions";

const Solutions = () => {
  const solutions = useSolutions();

  return (
    <DecorativeBackground
      elements={[
        {
          position: "bottom-right",
          size: "lg",
          opacity: "high",
          intensity: "medium",
        },
      ]}
      variant="light"
      className="bg-gradient-to-b from-white to-neutral-50"
    >
      <section id="solutions" className="min-h-[100dvh]">
        <div className="container mx-auto px-6">
          <SolutionsHeader />
          <SolutionsGrid solutions={solutions} />
        </div>
      </section>
    </DecorativeBackground>
  );
};

export default Solutions;