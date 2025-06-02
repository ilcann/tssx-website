import type { SolutionCardProps } from "@/types/solution";
import { useRef, useEffect } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const SolutionCard = ({
  icon,
  title,
  titleTr,
  services,
  id,
  index = 0,
}: SolutionCardProps & { id?: number; index?: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const iconContainerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleTrRef = useRef<HTMLParagraphElement>(null);
  const servicesRef = useRef<HTMLUListElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const header = headerRef.current;
    const iconContainer = iconContainerRef.current;
    const iconElement = iconRef.current;
    const titleElement = titleRef.current;
    const titleTrElement = titleTrRef.current;
    const servicesList = servicesRef.current;
    const content = contentRef.current;

    if (
      !card ||
      !header ||
      !iconContainer ||
      !iconElement ||
      !titleElement ||
      !titleTrElement ||
      !servicesList ||
      !content
    )
      return;

    // Get service items for staggered animation
    const serviceItems = servicesList.querySelectorAll("li");

    // Initial state - hide elements for entrance animation
    gsap.set([titleElement, titleTrElement], {
      y: 20,
      opacity: 0,
    });

    gsap.set(serviceItems, {
      x: -20,
      opacity: 0,
    });

    gsap.set(card, {
      y: 60,
      opacity: 0,
      rotateX: 15,
      scale: 0.9,
    });

    gsap.set(iconContainer, {
      scale: 0.5,
      rotation: -15,
    });

    gsap.set(header, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    // Entrance animation with ScrollTrigger
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
      delay: index * 0.15, // Stagger based on card index
    })
      .to(
        header,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        iconContainer,
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .to(
        titleElement,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .to(
        titleTrElement,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .to(
        serviceItems,
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.2"
      );

    // Animate services with bounce effect
    gsap.to(serviceItems, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out",
      stagger: 0.05,
      yoyo: true,
      repeat: 1,
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === card) {
          trigger.kill();
        }
      });
    };
  }, [index, services.length]);

  const cardContent = (
    <div
      ref={cardRef}
      className="group bg-white rounded-xl w-full shadow-lg border border-neutral-200 h-full overflow-hidden cursor-pointer relative transition-transform hover:scale-[1.02]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        ref={headerRef}
        className="relative h-40 bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-amber-100 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

        <div
          ref={iconContainerRef}
          className="w-20 h-20 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full z-10 relative"
        >
          <div ref={iconRef} className="text-white">
            {icon}
          </div>
        </div>
      </div>

      <div ref={contentRef} className="p-6 flex flex-col h-[calc(100%-10rem)]">
        <h3 ref={titleRef} className="text-xl font-bold text-neutral-900 mb-2">
          {title}
        </h3>
        <p ref={titleTrRef} className="text-amber-700 mb-4 text-sm font-medium">
          {titleTr}
        </p>
        <ul ref={servicesRef} className="space-y-3 mb-6 flex-grow">
          {services.map((service, serviceIndex) => (
            <li key={serviceIndex} className="flex items-start group/item">
              <span className="w-5 h-5 flex-shrink-0 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-amber-200 transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-3"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-neutral-700 text-sm group-hover/item:text-neutral-900 transition-colors duration-200">
                {service}
              </span>
            </li>
          ))}
        </ul>

        {/* Learn More Indicator */}
        {id && (
          <div className="mt-auto">
            <div className="flex items-center justify-between text-amber-600 font-medium text-sm group-hover:text-amber-700 transition-colors">
              <span>Learn More</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // If id is provided, wrap with Link, otherwise return plain card
  if (id) {
    return (
      <Link to={`/solutions/${id}`} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};
