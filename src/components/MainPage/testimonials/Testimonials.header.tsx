import AnimatedText from "@/components/ui/AnimatedText";
import SpecialText from "@/components/ui/SpecialText";

const TestimonialHeader = () => (
  <div className="max-w-3xl mx-auto text-center mb-16">
    <SpecialText
      id="testimonials-special-text"
      className="text-4xl font-bold mb-6 text-neutral-900"
    >
      <AnimatedText text="What Our Clients Say" />
    </SpecialText>
    <div className="w-24 h-1 bg-amber-700 mx-auto mb-6 rounded-full"></div>
    <span className="text-lg text-neutral-600 leading-relaxed">
      Real feedback from <AnimatedText text="trusted partners around the globe" />
    </span>
  </div>
);

export default TestimonialHeader;