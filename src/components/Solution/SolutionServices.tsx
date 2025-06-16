import { 
  Zap
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SpecialText from "@/components/ui/SpecialText";
import AnimatedText from "@/components/ui/AnimatedText";
import type { DetailedSolution } from "@/types/solution";

interface SolutionServicesProps {
  solution: DetailedSolution;
}

const SolutionServices = ({ solution }: SolutionServicesProps) => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-neutral-50 animate-section">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <SpecialText
              id="services-title"
              className="text-3xl font-bold mb-4 text-neutral-900"
            >
              <AnimatedText text={t('our_services')} />
            </SpecialText>
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {t('comprehensive_services_description', { solutionTitle: solution.title.toLowerCase() })}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {solution.services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white border border-neutral-200 rounded-xl p-5 hover:shadow-md hover:border-amber-200 transition-all duration-300"
              >
                {/* Number indicator */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 group-hover:text-amber-700 transition-colors">
                    {service}
                  </h3>
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div className="group">
              <div className="text-2xl font-bold text-amber-600 mb-1">
                {solution.services.length}+
              </div>
              <div className="text-sm text-neutral-600">{t('services')}</div>
            </div>
            <div className="group">
              <div className="text-2xl font-bold text-amber-600 mb-1">24/7</div>
              <div className="text-sm text-neutral-600">{t('support')}</div>
            </div>
            <div className="group">
              <div className="text-2xl font-bold text-amber-600 mb-1">100%</div>
              <div className="text-sm text-neutral-600">{t('solution_services_satisfaction')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionServices;
