import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import DecorativeBackground from "@/components/ui/DecorativeBackground";
import AnimatedText from "@/components/ui/AnimatedText";
import type { DetailedSolution } from "@/types/solution";

interface SolutionHeroProps {
  solution: DetailedSolution;
}

const SolutionHero = ({ solution }: SolutionHeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Use heroMetrics from solution if available, otherwise fallback to default
  const metrics = solution.heroMetrics || [];

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <DecorativeBackground
      variant="dark"
      className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <div ref={heroRef} className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-amber-300 hover:text-amber-200 transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 size-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                  {solution.icon}
                </div>
                <div>
                  <h1 className="text-3xl break-words font-bold mb-2">
                    <AnimatedText text={solution.title} />
                  </h1>
                  <p className="text-xl text-amber-200">{solution.titleTr}</p>
                </div>
              </div>

              <p className="text-lg text-neutral-200 leading-relaxed mb-8">
                {solution.detailedDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-amber-500 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-600 transition-colors text-center"
                >
                  Connect with an Expert
                </Link>
              </div>
            </div>
            {/* Right Column - Metrics */}
            <div className="space-y-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-center mb-3">
                    <div className="text-amber-300 mr-4">{metric.icon}</div>
                    <div className="text-4xl font-bold text-white">
                      {metric.value}
                    </div>
                  </div>
                  <p className="text-amber-200 text-sm">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DecorativeBackground>
  );
};

export default SolutionHero;
