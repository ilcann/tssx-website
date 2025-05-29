import { SolutionCard } from "@/components/Solution/SolutionCard";
import SpecialText from "@/components/ui/SpecialText";
import AnimatedText from "@/components/ui/AnimatedText";
import { solutionData } from "@/staticComponents/solution";

const Solutions = () => {
  return (
    <section
      id="solutions"
      className="py-24 bg-gradient-to-b from-white to-neutral-100 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200 rounded-full opacity-20 transform -translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100 rounded-full opacity-30 transform translate-x-1/3 translate-y-1/4"></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-amber-300 rounded-full opacity-10 transform -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-neutral-900">
            <SpecialText
              id="solutions-special-text"
              className="text-2xl font-bold text-center mb-2"
            >
              <AnimatedText text="Our Solutions" />
            </SpecialText>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <div className="text-lg text-neutral-700 leading-relaxed">
            Our solutions are designed to help you{" "}
            <AnimatedText
              text="automate your business processes"
              className="text-amber-600 font-semibold"
            />{" "}
            and improve your productivity.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-7xl relative  z-10">
          {solutionData.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              titleTr={solution.titleTr}
              services={solution.services}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
