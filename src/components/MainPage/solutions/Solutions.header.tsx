import SpecialText from "@/components/ui/SpecialText";
import AnimatedText from "@/components/ui/AnimatedText";

const SolutionsHeader = () => (
  <div className="max-w-3xl mx-auto text-center mb-16">
    <h2 className="text-4xl font-bold mb-6 text-neutral-900">
      <SpecialText
        id="solutions-special-text"
        className="text-2xl font-bold text-center mb-2"
      >
        <AnimatedText text="Our Solutions" />
      </SpecialText>
    </h2>
    <div className="w-24 h-1 bg-amber-700 mx-auto mb-6 rounded-full"></div>
    <div className="text-lg text-neutral-700 leading-relaxed">
      Our solutions are designed to help you{" "}
      <AnimatedText
        text="automate your business processes"
        className="text-amber-700 font-semibold"
      />{" "}
      and improve your productivity.
    </div>
  </div>
);

export default SolutionsHeader;