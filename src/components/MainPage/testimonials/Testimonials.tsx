import TestimonialHeader from "./Testimonials.header";
import TestimonialGrid from "./Testimonials.grid";

const Testimonials = () => {
  return (
    <section className="w-full py-20 bg-white/90 backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto px-4">
        <TestimonialHeader />
        <TestimonialGrid />
      </div>
    </section>
  );
};

export default Testimonials;