import { SolutionCard } from "@/components/Solution/SolutionCard";
import SpecialText from "@/components/ui/SpecialText";
import AnimatedText from "@/components/ui/AnimatedText";
import DecorativeBackground from "@/components/ui/DecorativeBackground";
import { solutionData } from "@/staticComponents/solution";

const Solutions = () => {
  return (
    <DecorativeBackground
      variant="light"
      className="py-24 bg-gradient-to-b from-white to-neutral-100"
    >
      <section id="solutions" className="h-[100dvh]">
        <div className="container mx-auto px-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-7xl">
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
    </DecorativeBackground>
  );
};

export default Solutions;
