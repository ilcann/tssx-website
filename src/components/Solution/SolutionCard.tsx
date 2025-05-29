import type { SolutionCardProps } from "@/types/solution";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const SolutionCard = ({
  icon,
  title,
  titleTr,
  services,
  index = 0,
}: SolutionCardProps & { index?: number }) => {
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

    if (!card || !header || !iconContainer || !iconElement || !titleElement || !titleTrElement || !servicesList || !content) return;

    // Get service items for staggered animation
    const serviceItems = servicesList.querySelectorAll('li');

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
    .to(header, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.6")
    .to(iconContainer, {
      scale: 1,
      rotation: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
    }, "-=0.4")
    .to(titleElement, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.3")
    .to(titleTrElement, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.2")
    .to(serviceItems, {
      x: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.1,
    }, "-=0.2");

    // Hover animations
    let hoverTl: gsap.core.Timeline;
    let isHovering = false;

    const handleMouseEnter = () => {
      if (isHovering) return;
      isHovering = true;

      // Kill any existing hover timeline
      if (hoverTl) hoverTl.kill();

      hoverTl = gsap.timeline();

      hoverTl
        .to(card, {
          y: -15,
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          duration: 0.4,
          ease: "power2.out",
        })
        .to(header, {
          background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
          duration: 0.3,
          ease: "power2.out",
        }, 0)
        .to(iconContainer, {
          scale: 1.15,
          rotation: 10,
          duration: 0.4,
          ease: "back.out(1.7)",
        }, 0.1)
        .to(iconElement, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        }, 0.1)
        .to(titleElement, {
          color: "#1f2937",
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        }, 0.1)
        .to(serviceItems, {
          x: 5,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.05,
        }, 0.15);
    };

    const handleMouseLeave = () => {
      if (!isHovering) return;
      isHovering = false;

      // Kill any existing hover timeline
      if (hoverTl) hoverTl.kill();

      hoverTl = gsap.timeline();

      hoverTl
        .to(card, {
          y: 0,
          scale: 1,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          duration: 0.4,
          ease: "power2.out",
        })
        .to(header, {
          background: "linear-gradient(135deg, rgba(245, 158, 11, 0.8) 0%, rgba(217, 119, 6, 0.8) 100%)",
          duration: 0.3,
          ease: "power2.out",
        }, 0)
        .to(iconContainer, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out",
        }, 0)
        .to(iconElement, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        }, 0)
        .to(titleElement, {
          color: "#111827",
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        }, 0)
        .to(serviceItems, {
          x: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.03,
        }, 0);
    };

    // 3D Tilt effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;

      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      gsap.to(card, {
        rotateY: deltaX * 5,
        rotateX: -deltaY * 5,
        duration: 0.3,
        ease: "power2.out",
        transformPerspective: 1000,
      });

      // Parallax effect for header
      gsap.to(header, {
        x: deltaX * 5,
        y: deltaY * 5,
        duration: 0.3,
        ease: "power2.out",
      });

      // Counter-parallax for content
      gsap.to(content, {
        x: -deltaX * 2,
        y: -deltaY * 2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Click animation with ripple effect
    const handleClick = () => {
      gsap.to(card, {
        scale: 0.95,
        duration: 0.1,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      });

      // Create ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'absolute inset-0 rounded-xl pointer-events-none';
      ripple.style.background = 'radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%)';
      ripple.style.transform = 'scale(0)';
      
      card.appendChild(ripple);

      gsap.to(ripple, {
        scale: 2.5,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          if (card.contains(ripple)) {
            card.removeChild(ripple);
          }
        },
      });

      // Animate services with bounce effect
      gsap.to(serviceItems, {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out",
        stagger: 0.05,
        yoyo: true,
        repeat: 1,
      });
    };

    // Add event listeners
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('click', handleClick);
      
      if (hoverTl) hoverTl.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === card) {
          trigger.kill();
        }
      });
    };
  }, [index, services.length]);

  return (
    <div 
      ref={cardRef}
      className="group bg-white rounded-xl shadow-lg border border-neutral-200 h-full overflow-hidden cursor-pointer relative"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div 
        ref={headerRef}
        className="relative h-40 bg-gradient-to-br from-amber-500/80 to-amber-600/80 flex items-center justify-center overflow-hidden"
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

        {/* Floating particles effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-6 w-1 h-1 bg-white rounded-full animate-ping"></div>
          <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-4 right-4 w-1 h-1 bg-white rounded-full animate-ping delay-150"></div>
        </div>
      </div>
      
      <div ref={contentRef} className="p-6">
        <h3 ref={titleRef} className="text-xl font-bold text-neutral-900 mb-2">
          {title}
        </h3>
        <p ref={titleTrRef} className="text-amber-600 mb-4 text-sm font-medium">
          {titleTr}
        </p>
        <ul ref={servicesRef} className="space-y-3 mb-4">
          {services.map((service, serviceIndex) => (
            <li key={serviceIndex} className="flex items-start group/item">
              <span className="w-5 h-5 flex-shrink-0 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-amber-200 transition-colors duration-200">
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
      </div>

      {/* Shine effect overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </div>
  );
};
