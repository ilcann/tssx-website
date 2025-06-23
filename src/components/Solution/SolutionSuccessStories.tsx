import SpecialText from "@/components/ui/SpecialText";
import AnimatedText from "@/components/ui/AnimatedText";
import CaseStudy from "@/components/About/Success/SuccessCard";
import type { DetailedSolution } from "@/types/solution";
import { useTranslation } from 'react-i18next';

interface SolutionSuccessStoriesProps {
  solution: DetailedSolution;
}

const SolutionSuccessStories = ({ solution }: SolutionSuccessStoriesProps) => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-r from-amber-50/30 via-white to-amber-50/30 animate-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SpecialText
              id="success-stories-title"
              className="text-3xl font-bold mb-6 text-neutral-900"
            >
              <AnimatedText text={t('solution_success_stories_title')} />
            </SpecialText>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-neutral-700">
              {t('solution_success_stories_description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solution.examples.map((example, index) => (
              <CaseStudy
                key={index}
                title={t('solution_success_story')}
                subtitle={example.title}
                icon={solution.icon}
                image={solution.image}
                description={example.description}
                points={example.metrics || []}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSuccessStories;
