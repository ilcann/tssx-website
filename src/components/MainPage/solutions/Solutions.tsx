import { useTranslation } from "react-i18next";
import { solutionCards } from "./Solutions.constants"
import { AnimatedTitle } from '@/components/Shared'
import SolutionCard from "./Solutions.card";

const Solutions = () => {
    const { t } = useTranslation('home');

    return (
        <section id="solutions">
            <div className="section-content">
                <AnimatedTitle
                    title={t('solutions.title')}
                    description={t('solutions.description')}
                    size="sm"
                />
                <div className="solutions-grid">
                    {solutionCards.map((solution, index) => (
                        <SolutionCard
                            key={index}
                            slug={solution.slug}
                            icon={solution.icon}
                            title={solution.title}
                            subtitle={solution.subtitle}
                            tools={solution.tools}                           
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Solutions;
