import AnimatedText from "@/components/ui/AnimatedText";
import SpecialText from "@/components/ui/SpecialText";

interface PageHeroProps {
  title: string;
  description: string;
  className?: string;
}

const HeroSection = ({ title, description, className }: PageHeroProps) => {
  return (
    <section className={`w-full max-w-2xl flex flex-col gap-6 items-center mx-auto ${className ?? ''}`}>
      <SpecialText className="text-4xl md:text-5xl font-extrabold text-neutral-900">
        <AnimatedText text={title} />
      </SpecialText>
      <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full" />
      <p className="text-lg md:text-xl text-neutral-600 text-center">
        {description}
      </p>
    </section>
  );
};

export default HeroSection;