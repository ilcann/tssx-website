import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationRefs = {
  index: number;
  cardRef: React.RefObject<HTMLAnchorElement | null>;
  headerRef: React.RefObject<HTMLDivElement | null>;
  iconRef: React.RefObject<HTMLDivElement | null>;
  titleRef: React.RefObject<HTMLHeadingElement | null>;
  subtitleRef: React.RefObject<HTMLParagraphElement | null>;
  toolsRef: React.RefObject<HTMLUListElement | null>;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
};

export function useSolutionCardAnimation({
  index,
  cardRef,
  headerRef,
  iconRef,
  titleRef,
  subtitleRef,
  toolsRef,
  buttonRef,
}: AnimationRefs) {
  useEffect(() => {
    const card = cardRef.current;
    const header = headerRef.current;
    const iconEl = iconRef.current;
    const titleEl = titleRef.current;
    const subtitleEl = subtitleRef.current;
    const toolsList = toolsRef.current;
    const button = buttonRef.current;

    if (!card || !header || !iconEl || !titleEl || !subtitleEl || !toolsList || !button) return;

    const toolItems = toolsList.querySelectorAll("li");

    // === Initial State ===
    gsap.set([titleEl, subtitleEl], { y: 20, opacity: 0 });
    gsap.set(toolItems, { x: -20, opacity: 0 });
    gsap.set(card, { y: 60, opacity: 0, rotateX: 15, scale: 0.9 });
    gsap.set(iconEl, { scale: 0.5, rotation: -15 });
    gsap.set(header, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.set(button, { opacity: 0, scale: 0.9 });

    // === Scroll-triggered Animation ===
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(card, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: index * 0.15,
      })
      .to(header, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.6")
      .to(iconEl, {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      }, "-=0.4")
      .to(titleEl, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      }, "-=0.3")
      .to(subtitleEl, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      }, "-=0.2")
      .to(toolItems, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.1,
      }, "-=0.2")
      .to(button, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      }, "-=0.2")
      // === global speed multiplier ===
      .timeScale(1.5);   // 1 = normal speed, 1.5 = 50 % faster

    // === Hover Interaction ===
    const handleHoverIn = () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const handleHoverOut = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleHoverIn);
    card.addEventListener("mouseleave", handleHoverOut);

    // === Optional Micro Interaction (Tool Pulse) ===
    gsap.to(toolItems, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out",
      stagger: 0.05,
      yoyo: true,
      repeat: 1,
    });

    // === Cleanup ===
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === card) trigger.kill();
      });

      card.removeEventListener("mouseenter", handleHoverIn);
      card.removeEventListener("mouseleave", handleHoverOut);
    };
  }, [index, cardRef, headerRef, iconRef, titleRef, subtitleRef, toolsRef, buttonRef]);
}
