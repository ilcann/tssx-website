import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SpecialTextProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const SpecialText = ({ className, children, id }: SpecialTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial state using GSAP
      gsap.set(containerRef.current, {
        opacity: 0,
        x: -50,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          end: "bottom 5%",
          toggleActions: "play none none none",
        },
      });

      tl.to(containerRef.current, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [id]);

  return (
    <div ref={containerRef} className={className} id={id}>
      {children}
    </div>
  );
};

export default SpecialText;
