import TestimonialCard from "./Testimonials.card";
import { testimonials } from "@/staticComponents/testimonials"

const TestimonialGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {testimonials.map((t, i) => (
        <TestimonialCard key={i} {...t} />
      ))}
    </div>
  );
};

export default TestimonialGrid;