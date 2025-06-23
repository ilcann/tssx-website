import SuccessCard from "./SuccessCard";
import { getCaseStudies } from "@/staticComponents/about";
import { useTranslation } from "react-i18next";
import SpecialText from "@/components/ui/SpecialText";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Success() {
    const { t } = useTranslation('about');
    const caseStudies = getCaseStudies(t);

    return (
      <section id="success" className="flex flex-col gap-10">
        <SpecialText
          id="success"
          className="text-3xl font-bold text-neutral-900 text-center"
        >
          <AnimatedText text={t("success.title")} />
        </SpecialText>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {caseStudies.map((study, index) => (
              <SuccessCard
                key={index}
                title={study.title}
                subtitle={study.subtitle}
                description={study.description}
                points={study.points}
              />
          ))}
        </div>
      </section>
    );
}