import { useState, useEffect, useRef, useCallback } from "react";
import SolutionCard from "../components/SolutionCard";
import {
  Cloud,
  Eye,
  ChartGantt,
  ShieldCheck,
  ClockFading,
  Radar,
  Settings,
  Computer,
  Bot,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const DetailedSolutions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderTrackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const maxSlides = 3; // Total number of slides

  // Update slide width on window resize
  useEffect(() => {
    const updateSlideWidth = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth);
      }
    };

    // Initial width
    updateSlideWidth();

    // Add resize event listener
    window.addEventListener("resize", updateSlideWidth);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, []);

  const goToSlide = useCallback(
    (slideIndex: number) => {
      if (isAnimating || slideIndex === currentSlide) return;

      setIsAnimating(true);
      setCurrentSlide(slideIndex);

      // Reset animating state after transition completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Matches the duration in the style
    },
    [currentSlide, isAnimating]
  );

  const goToPrevSlide = useCallback(() => {
    if (currentSlide > 0 && !isAnimating) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, isAnimating, goToSlide]);

  const goToNextSlide = useCallback(() => {
    if (currentSlide < maxSlides - 1 && !isAnimating) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, isAnimating, goToSlide, maxSlides]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        const nextSlide = (currentSlide + 1) % maxSlides;
        goToSlide(nextSlide);
      }
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(timer);
  }, [currentSlide, isAnimating, goToSlide, maxSlides]);

  // Slide data
  const slides = [
    // Slide 1
    [
      {
        title: "Hybrid Cloud Provision",
        icon: <Cloud className="size-8" />,
        description:
          "Experience the Future of Cloud Solutions: Achieve blazing-fast performance, seamless integration, hands-free operation, and top-tier security with our advanced hybrid cloud provisioning services.",
      },
      {
        title: "AIOps Observability",
        icon: <Eye className="size-8" />,
        description:
          "AIOps solutions from BMC apply machine learning and predictive capabilities across IT operations and DevOps environments for real-time, enterprise-wide observability, insights, and automated remediation.",
      },
      {
        title: "Compliance",
        icon: <ShieldCheck className="size-8" />,
        description:
          "Elevate confidence in global security through our Infrastructure Compliance Management. Seamlessly adhere to benchmarks like PCI-DSS, CIS, DISA, SOX, and HIPAA across Unix, Linux, and Windows. Automate checks and instant remediation for unmatched compliance and peace of mind.",
      },
    ],
    // Slide 2
    [
      {
        title: "Patch Management",
        icon: <ClockFading className="size-8" />,
        description:
          "Elevate Your System's Defense with Comprehensive Patch Management: Safeguard your environment across 300+ third-party applications and diverse operating systems through our resilient and adaptable patching process, ensuring unwavering security and stability.",
      },
      {
        title: "Business Process Automation",
        icon: <ChartGantt className="size-8" />,
        description:
          "Empower Your Enterprise with Business Process Automation: Harness the potential of a robust and scalable solution, enriched with a diverse array of integration adapters for seamless connectivity. Experience adaptability like never before as your processes evolve.",
      },
      {
        title: "Threat & Vulnerability",
        icon: <Radar className="size-8" />,
        description:
          "Enhance Security: Seamlessly integrate Tenable Nessus, Rapid7, and Qualys to bridge identification and resolution gaps. Manage threats within a unified interface, with auto-remediation for future scans, ensuring a fortified digital landscape.",
      },
    ],
    // Slide 3
    [
      {
        title: "Configuration Management",
        icon: <Settings className="size-8" />,
        description:
          "Empower Effortless Configuration Management: From covering all operating systems to enabling low-code capabilities, our batch config solution ensures swift, reliable changes, rollbacks, and seamless management across the board.",
      },
      {
        title: "Endpoint Management",
        icon: <Computer className="size-8" />,
        description:
          "Streamline Endpoint Excellence: From compliance and patch management to configuration control, remote access, deployment, and software metering, our solution covers every facet of endpoint management with unparalleled efficiency.",
      },
      {
        title: "Automation Solutions",
        icon: <Bot className="size-8" />,
        description:
          "Enhance operational efficiency through intelligent automation. Our automation solutions streamline complex workflows, reduce manual intervention, and enable consistent, error-free processes across your IT infrastructure.",
      },
    ],
  ];

  return (
    <section
      id="detailed-solutions"
      className="py-24 bg-gradient-to-b from-neutral-100 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-neutral-900">
            Our Detailed Solutions
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Comprehensive{" "}
            <span className="text-amber-600 font-semibold">
              enterprise IT solutions
            </span>{" "}
            tailored to your business needs
          </p>
        </div>

        {/* Solutions Cards */}
        <div className="relative max-w-6xl mx-auto">
          {/* Slider Navigation Controls */}
          <button
            id="prev-slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center focus:outline-none transform -translate-x-5 hover:bg-amber-50 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Previous slide"
            onClick={goToPrevSlide}
            disabled={currentSlide === 0 || isAnimating}
          >
            <ChevronLeft className="text-amber-600" />
          </button>
          <button
            id="next-slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center focus:outline-none transform translate-x-5 hover:bg-amber-50 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next slide"
            onClick={goToNextSlide}
            disabled={currentSlide === maxSlides - 1 || isAnimating}
          >
            <ChevronRight className="text-amber-600" />
          </button>

          {/* Slider Viewport */}
          <div
            className="slider-container overflow-hidden mx-16"
            ref={containerRef}
          >
            <div
              ref={sliderTrackRef}
              className="slider-track flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * slideWidth}px)`,
              }}
            >
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className="slider-slide w-full flex-shrink-0"
                  style={{ width: slideWidth > 0 ? slideWidth : "100%" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 relative z-10">
                    {slide.map((card, cardIndex) => (
                      <SolutionCard
                        key={cardIndex}
                        title={card.title}
                        icon={card.icon}
                        description={card.description}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12">
            <div className="slider-dots flex space-x-3">
              {Array.from({ length: maxSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                    currentSlide === index
                      ? "bg-amber-600 w-8"
                      : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  disabled={isAnimating}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedSolutions;
