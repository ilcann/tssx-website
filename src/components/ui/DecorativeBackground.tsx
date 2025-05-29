import { cn } from "@/lib/utils";

export type BackgroundVariant = 
  | "light" 
  | "dark" 
  | "neutral" 
  | "custom";

export type BackgroundConfig = {
  /** Position of the background element */
  position: 
    | "top-left" 
    | "top-right" 
    | "bottom-left" 
    | "bottom-right" 
    | "center-left" 
    | "center-right" 
    | "top-center" 
    | "bottom-center"
    | "custom";
  /** Size variant */
  size: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  /** Opacity level */
  opacity: "low" | "medium" | "high";
  /** Color intensity */
  intensity: "light" | "medium" | "dark";
  /** Apply blur effect */
  blur?: boolean;
  /** Custom positioning classes (when position is "custom") */
  customPosition?: string;
  /** Custom color classes */
  customColor?: string;
};

export type DecorativeBackgroundProps = {
  /** Background variant theme */
  variant?: BackgroundVariant;
  /** Array of background configurations */
  elements?: BackgroundConfig[];
  /** Additional className for the container */
  className?: string;
  /** Children to render above the background */
  children?: React.ReactNode;
};

const POSITION_CLASSES = {
  "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
  "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2", 
  "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
  "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
  "center-left": "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
  "center-right": "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
  "top-center": "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  "custom": "",
};

const SIZE_CLASSES = {
  sm: "w-24 h-24",
  md: "w-64 h-64", 
  lg: "w-80 h-80",
  xl: "w-96 h-96",
  "2xl": "w-[32rem] h-[32rem]", // 512px
  "3xl": "w-[40rem] h-[40rem]", // 640px
};

const OPACITY_CLASSES = {
  low: "opacity-10",
  medium: "opacity-20", 
  high: "opacity-30",
};

const getColorClasses = (variant: BackgroundVariant, intensity: string) => {
  const colorMap = {
    light: {
      light: "bg-amber-50",
      medium: "bg-amber-100", 
      dark: "bg-amber-200",
    },
    neutral: {
      light: "bg-neutral-100",
      medium: "bg-neutral-200",
      dark: "bg-neutral-300", 
    },
    dark: {
      light: "bg-amber-500/5",
      medium: "bg-amber-500/5",
      dark: "bg-amber-500/5",
    },
    custom: {
      light: "",
      medium: "",
      dark: "",
    },
  };

  return colorMap[variant]?.[intensity as keyof typeof colorMap[typeof variant]] || "";
};

const DecorativeBackground = ({ 
  variant = "light", 
  elements = [],
  className = "",
  children 
}: DecorativeBackgroundProps) => {
  // Default configurations for common patterns with better coverage
  const getDefaultElements = (): BackgroundConfig[] => {
    switch (variant) {
      case "light":
        return [
          { position: "top-left", size: "2xl", opacity: "medium", intensity: "medium" },
          { position: "bottom-right", size: "3xl", opacity: "high", intensity: "light" },
          { position: "center-right", size: "xl", opacity: "medium", intensity: "dark" },
          { position: "top-center", size: "lg", opacity: "low", intensity: "medium" },
        ];
      case "dark":
        return [
          { position: "top-right", size: "3xl", opacity: "medium", intensity: "light", blur: true },
          { position: "bottom-left", size: "2xl", opacity: "medium", intensity: "light", blur: true },
          { position: "center-left", size: "xl", opacity: "low", intensity: "light", blur: true },
        ];
      case "neutral":
        return [
          { position: "bottom-left", size: "3xl", opacity: "high", intensity: "light" },
          { position: "top-right", size: "2xl", opacity: "high", intensity: "light" },
          { position: "center-left", size: "lg", opacity: "medium", intensity: "medium" },
          { position: "bottom-center", size: "xl", opacity: "low", intensity: "light" },
        ];
      default:
        return [];
    }
  };

  const backgroundElements = elements.length > 0 ? elements : getDefaultElements();

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Background decorative elements */}
      {backgroundElements.map((element, index) => {
        const positionClass = element.position === "custom" 
          ? element.customPosition || ""
          : POSITION_CLASSES[element.position];
        
        const sizeClass = SIZE_CLASSES[element.size];
        const opacityClass = OPACITY_CLASSES[element.opacity];
        const colorClass = element.customColor || getColorClasses(variant, element.intensity);
        const blurClass = element.blur ? "blur-3xl" : "";

        return (
          <div
            key={index}
            className={cn(
              "absolute rounded-full transform",
              positionClass,
              sizeClass,
              opacityClass,
              colorClass,
              blurClass
            )}
          />
        );
      })}
      
      {/* Content */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default DecorativeBackground; 