import { forwardRef } from "react";

const HeroDescription = forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    className="text-base md:text-lg text-white mt-6 mb-8 max-w-3xl mx-auto"
  >
    Experience the power of
    <span className="font-semibold text-white">intelligent automation</span>
    and development tools that streamline your workflow, enhance productivity, and accelerate digital transformation. Our cutting-edge solutions combine
    <span className="font-semibold text-white">AI-driven automation</span>
    with robust development frameworks.
  </div>
));

export default HeroDescription;