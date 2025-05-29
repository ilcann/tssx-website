import { useRef, useEffect } from "react";
import gsap from "gsap";
import StatCounter from "./StatCounter";

type AnimatedStatProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

const AnimatedStat = ({ icon, value, label }: AnimatedStatProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLHeadingElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !iconRef.current || !labelRef.current || !valueRef.current) return;

    const card = cardRef.current;
    const iconContainer = iconRef.current;
    const label = labelRef.current;
    const value = valueRef.current;
    
    const handleMouseEnter = () => {
      gsap.killTweensOf(card);
      
      gsap.to(card, {
        y: "-=8", 
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(iconContainer, {
        backgroundColor: "#d97706", // amber-600
        color: "#ffffff",
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(label, {
        color: "#d97706", // amber-600
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(value, {
        scale: 1.05,
        color: "#92400e", // amber-800
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Mouse leave animation - restore to floating state
    const handleMouseLeave = () => {
      gsap.to(card, {
        y: "+=8", // Return to the floating position
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          // Restart the floating animation if it was killed
          const currentY = gsap.getProperty(card, "y") as number;
          gsap.to(card, {
            y: currentY - 5,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
          });
        }
      });

      gsap.to(iconContainer, {
        backgroundColor: "#fef3c7", // amber-100
        color: "#d97706", // amber-600
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(label, {
        color: "#171717", // neutral-900
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(value, {
        scale: 1,
        color: "#d97706", // amber-600
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="bg-white shadow-lg rounded-xl p-6 border border-neutral-200 cursor-pointer"
    >
      <div className="flex items-center mb-4">
        <div 
          ref={iconRef}
          className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3"
        >
          {icon}
        </div>
        <h3 ref={labelRef} className="text-xl font-bold text-neutral-900">{label}</h3>
      </div>
      <div ref={valueRef} className="text-3xl font-bold text-amber-600 mb-1">
        <StatCounter value={value} enableScrollSpy={true} />
      </div>
    </div>
  );
};

export default AnimatedStat;
