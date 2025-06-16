import TestimonialCard from "./Testimonials.card";
import { getTestimonials } from "@/staticComponents/testimonials";
import { useTranslation } from "react-i18next";

const TestimonialGrid = () => {
  const { t } = useTranslation();
  const testimonials = getTestimonials(t);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {testimonials.map((t, i) => (
        <TestimonialCard key={i} {...t} />
      ))}
    </div>
  );
};

export default TestimonialGrid;