import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type AnimatedTextProps = {
  text: string;
  className?: string;
};

const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Split text into letters and wrap each in a span
    const letters = text
      .split("")
      .map(
        (letter) =>
          `<span style="display: inline-block; opacity: 0; transform: translateY(30px); cursor: pointer;">${
            letter === " " ? "&nbsp;" : letter
          }</span>`
      )
      .join("");

    container.innerHTML = letters;
    const letterElements = container.querySelectorAll("span");

    // Animate letters with stagger - Initial entrance animation
    gsap.to(letterElements, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.03,
      ease: "power2.out", 
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
    });

    letterElements.forEach((letter) => {
      const span = letter as HTMLElement;

      // Mouse enter - animate to theme colors
      span.addEventListener("mouseenter", () => {
        gsap.to(span, {
          color: "#d97706", // amber-600
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      // Mouse leave - animate back to original
      span.addEventListener("mouseleave", () => {
        gsap.to(span, {
          color: "inherit",
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Container hover effect - animate all letters with stagger
    container.addEventListener("mouseenter", () => {
      gsap.to(letterElements, {
        y: -2,
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.out",
      });
    });

    container.addEventListener("mouseleave", () => {
      gsap.to(letterElements, {
        y: 0,
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.out",
      });
    });
  }, [text]);

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {text}
    </div>
  );
};

export default AnimatedText;
