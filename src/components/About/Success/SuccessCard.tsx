import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { CaseStudyProps } from "@/types/about";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../ui/card";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SuccessCard = ({
  title,
  subtitle,
  description,
  image,
  icon,
  points,
}: CaseStudyProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const card = cardRef.current;
    const pointElements = pointsRef.current;

    if (!card) return;

    // Initial state
    gsap.set(card, { opacity: 0, y: 30 });
    gsap.set(pointElements, { opacity: 0, x: -20 });

    // Card animation
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // Points stagger animation
    gsap.to(pointElements, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === card) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <Card
      ref={cardRef}
      className="content-box"
    >
      <CardHeader>
        <div className="flex items-center gap-3 mb-4">
          {/* Icon Display */}
          {icon && (
            <div className="size-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
              {React.isValidElement(icon)
                ? React.cloneElement(
                    icon as React.ReactElement<{ className?: string }>,
                    { className: "size-6" }
                  )
                : icon}
            </div>
          )}
          <div className="flex-grow">
            <div className="text-amber-700 font-medium text-sm mb-1">
              {title}
            </div>
            <CardTitle className="text-2xl font-semibold text-neutral-900">
              {subtitle}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="text-neutral-600">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div
          className={`${image ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : ""}`}
        >
          {/* Points Section */}
          <div className="space-y-3">
            {points.map((point, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) pointsRef.current[index] = el;
                }}
                className="flex items-start gap-3"
              >
                <div className="w-5 h-5 flex items-center justify-center bg-amber-100 rounded-full mt-0.5 flex-shrink-0">
                  <Check className="text-amber-700 size-3" />
                </div>
                <div>
                  <div className="text-neutral-900 font-medium text-sm">
                    {point.label}
                  </div>
                  <div className="text-neutral-600 text-sm">{point.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          {image && (
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm">
                <img
                  src={image}
                  alt={subtitle}
                  className="w-full h-auto rounded-lg shadow-sm border border-neutral-200 object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SuccessCard;
