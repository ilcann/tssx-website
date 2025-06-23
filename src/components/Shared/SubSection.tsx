import SpecialText from "../ui/SpecialText";
import AnimatedText from "../ui/AnimatedText";

interface SubSectionProps {
  id?: string;
  title: string;
  description?: string;
  className?: string;
}

const SubSection = ({ id, title, description, className }: SubSectionProps) => {
  return (
    <div id={id} className={`flex flex-col gap-4 ${className ?? ''}`}>
      <SpecialText className="text-3xl font-bold text-neutral-900">
        <AnimatedText text={title} />
      </SpecialText>
      {description &&
        <p className="text-neutral-700 leading-relaxed">
          {description}
        </p>      
      }
    </div>
  );
};

export default SubSection;