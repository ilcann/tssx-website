import AnimatedText from "@/components/ui/AnimatedText";
import SpecialText from "@/components/ui/SpecialText";

interface AnimatedTitleProps {
  title: string;
  description?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const AnimatedTitle = ({
  title,
  description,
  className,
  size = "md",
}: AnimatedTitleProps) => {
  const sizeClassMap = {
    sm: "text-3xl md:text-4xl",
    md: "text-4xl md:text-5xl",
    lg: "text-5xl md:text-6xl",
  };

  return (
    <header
      className={`section-header ${className ?? ""}`}
    >
      <SpecialText
        className={`${sizeClassMap[size]} font-extrabold text-neutral-900`}
      >
        <AnimatedText text={title} />
      </SpecialText>

      {description && (
        <>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full" />
          <p className="text-lg md:text-xl text-neutral-600 text-center">
            {description}
          </p>
        </>
      )}
    </header>
  );
};

export default AnimatedTitle;
