import SpecialText from "@/components/ui/SpecialText";
import AnimatedText from "@/components/ui/AnimatedText";
import CaseStudy from "@/components/About/CaseStudy";
import type { DetailedSolution } from "@/types/solution";

interface SolutionSuccessStoriesProps {
  solution: DetailedSolution;
}

const SolutionSuccessStories = ({ solution }: SolutionSuccessStoriesProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-50/30 via-white to-amber-50/30 animate-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SpecialText
              id="success-stories-title"
              className="text-3xl font-bold mb-6 text-neutral-900"
            >
              <AnimatedText text="Success Stories" />
            </SpecialText>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-neutral-700">
              See how our solutions have transformed businesses across
              industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solution.examples.map((example, index) => (
              <CaseStudy
                key={index}
                title="Success Story"
                subtitle={example.title}
                icon={solution.icon}
                image={solution.image}
                description={example.description}
                points={example.metrics || []}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSuccessStories;
