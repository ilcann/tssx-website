import { ArrowRightIcon, BotIcon, CodeIcon, ServerIcon } from "lucide-react";
import { Link } from "react-scroll";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedStat from "../ui/AnimatedStat";

const Hero = () => {
  // Refs for GSAP animations
  const heroRef = useRef<HTMLElement>(null);
  const tagLineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const backgroundElementsRef = useRef<HTMLDivElement>(null);

  // Register GSAP plugin
  gsap.registerPlugin();

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Set initial states - Remove statsRef from here since AnimatedStat handles its own opacity
      gsap.set(
        [
          tagLineRef.current,
          titleRef.current,
          subtitleRef.current,
          descriptionRef.current,
          ctaRef.current,
        ],
        {
          opacity: 0,
          y: 50,
        }
      );

      // Set initial state for stats container only (not the children)
      gsap.set(statsRef.current, {
        opacity: 0,
        y: 50,
      });

      // Animate background elements
      if (backgroundElementsRef.current?.children) {
        gsap.fromTo(
          Array.from(backgroundElementsRef.current.children),
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 0.6,
            duration: 2,
            stagger: 0.5,
            ease: "power2.out",
          }
        );
      }

      // Main content animation timeline
      tl.to(tagLineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );

      // Animate stats container (but let AnimatedStat components handle their own animations)
      tl.to(
        statsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );

      tl.to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );
      // Background elements continuous animation
      if (backgroundElementsRef.current?.children) {
        Array.from(backgroundElementsRef.current.children).forEach(
          (element, index) => {
            gsap.to(element, {
              scale: 1.1,
              duration: 3 + index * 0.5,
              repeat: -1,
              yoyo: true,
              ease: "power2.inOut",
              delay: index * 0.8,
            });
          }
        );
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative bg-amber-600 h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Simplified background elements */}
      <div ref={backgroundElementsRef} className="absolute inset-0 z-0">
        <div className="absolute w-64 h-64 rounded-full bg-orange-400 -top-20 -left-20 blur-3xl opacity-60"></div>
        <div className="absolute w-64 h-64 rounded-full bg-orange-300 bottom-20 -right-20 blur-3xl opacity-60"></div>
        <div className="absolute w-56 h-56 rounded-full bg-orange-200 top-1/3 left-1/4 blur-3xl opacity-40"></div>
        <div className="absolute w-64 h-64 rounded-full bg-orange-400 -bottom-20 left-1/3 blur-3xl opacity-60"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag line */}
          <div
            ref={tagLineRef}
            className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6 border border-white/30"
          >
            <CodeIcon className="text-white mr-2 size-4" />
            <h1 className="text-white font-medium text-sm">
              Intelligent Automation & Development
            </h1>
          </div>

          <div className="text-4xl md:text-6xl font-bold text-white mb-8">
            <h2 ref={titleRef} className="text-white">
              Automate Your Future
            </h2>
            <span className="text-3xl text-white/80 font-light italic">
              with
            </span>
            <h2 ref={subtitleRef} className="text-white mt-2">
              Smart Code Solutions
            </h2>

            <div
              ref={descriptionRef}
              className="text-base md:text-lg text-white mt-6 mb-8 max-w-3xl mx-auto"
            >
              Experience the power of{" "}
              <span className="font-semibold text-white">
                intelligent automation
              </span>{" "}
              and development tools that streamline your workflow, enhance
              productivity, and accelerate digital transformation. Our
              cutting-edge solutions combine{" "}
              <span className="font-semibold text-white">
                AI-driven automation
              </span>{" "}
              with robust development frameworks.
            </div>
            <div
              id="stats"
              ref={statsRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10 max-w-4xl mx-auto text-white mt-10"
            >
              <AnimatedStat
                value="500+"
                label="Development Tools"
                icon={<CodeIcon className=" size-6" />}
              />
              <AnimatedStat
                value="98%"
                label="Automation Accuracy"
                icon={<BotIcon className=" size-6" />}
              />
              <AnimatedStat
                value="24/7"
                label="Continuous Integration"
                icon={<ServerIcon className=" size-6" />}
              />
            </div>

            {/* CTA Button */}
            <div ref={ctaRef} className="flex justify-center">
              <Link
                to="solutions"
                smooth={true}
                duration={800}
                offset={-10}
                className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium flex items-center hover:bg-gray-800 transition-colors duration-200"
              >
                <span>Explore Solutions</span>
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
