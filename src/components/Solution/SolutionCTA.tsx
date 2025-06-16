import { Link } from "react-router";
import { Users, Shield } from "lucide-react";
import SpecialText from "@/components/ui/SpecialText";
import AnimatedText from "@/components/ui/AnimatedText";
import type { DetailedSolution } from "@/types/solution";
import { useTranslation } from 'react-i18next';

interface SolutionCTAProps {
  solution: DetailedSolution;
}

const SolutionCTA = ({ solution }: SolutionCTAProps) => {
  const { t } = useTranslation();
  return (
    <section className="py-20 animate-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SpecialText
            id="cta-title"
            className="text-4xl font-bold mb-6 text-neutral-900"
          >
            <AnimatedText text={t('solution_cta_title', { solutionTitle: solution.title })} />
          </SpecialText>

          <p className="text-xl text-neutral-700 mb-8 leading-relaxed">
            {t('solution_cta_description', { solutionTitle: solution.title.toLowerCase() })}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="bg-amber-500 text-white px-8 py-4 rounded-full font-medium hover:bg-amber-600 transition-colors text-lg"
            >
              {t('contact_sales')}
            </Link>
            <Link
              to="/"
              className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full font-medium hover:bg-amber-50 transition-colors text-lg"
            >
              {t('view_all_solutions')}
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-neutral-600">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-amber-500" />
              {t('speak_to_rep')}
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-amber-500" />
              {t('see_product_support')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionCTA;
