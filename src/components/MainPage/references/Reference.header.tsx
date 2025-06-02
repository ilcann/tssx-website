import AnimatedText from "@/components/ui/AnimatedText";
import SpecialText from "@/components/ui/SpecialText";

const ReferenceHeader = () => (
  <div className="max-w-3xl mx-auto text-center mb-16">
    <SpecialText id="references-special-text" className="text-4xl font-bold mb-6 text-neutral-900">
      <AnimatedText text="Our References" />
    </SpecialText>
    <div className="w-24 h-1 bg-amber-700 mx-auto mb-6 rounded-full"></div>
    <span className="text-lg text-neutral-600 leading-relaxed">
      Globally <AnimatedText text="trusted solution partners" /> across multiple countries
    </span>
  </div>
);

export default ReferenceHeader;