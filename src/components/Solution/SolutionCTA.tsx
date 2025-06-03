import { Link } from "react-router";
import { Users, Shield } from "lucide-react";
import SpecialText from "@/components/ui/SpecialText";
import AnimatedText from "@/components/ui/AnimatedText";
import type { DetailedSolution } from "@/types/solution";

interface SolutionCTAProps {
  solution: DetailedSolution;
}

const SolutionCTA = ({ solution }: SolutionCTAProps) => {
  return (
    <section className="py-20 animate-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SpecialText
            id="cta-title"
            className="text-4xl font-bold mb-6 text-neutral-900"
          >
            <AnimatedText text={`Ready to Transform Your ${solution.title}?`} />
          </SpecialText>

          <p className="text-xl text-neutral-700 mb-8 leading-relaxed">
            Let us know how we can help you achieve your business goals with our
            comprehensive {solution.title.toLowerCase()} solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="bg-amber-500 text-white px-8 py-4 rounded-full font-medium hover:bg-amber-600 transition-colors text-lg"
            >
              Contact Sales
            </Link>
            <Link
              to="/"
              className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full font-medium hover:bg-amber-50 transition-colors text-lg"
            >
              View All Solutions
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-neutral-600">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-amber-500" />
              Speak to a rep about your business needs
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-amber-500" />
              See our product support options
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionCTA;
