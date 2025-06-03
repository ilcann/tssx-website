import { useParams, Navigate } from "react-router";
import { Helmet } from "react-helmet-async";
import { detailedSolutionData } from "@/staticComponents/detailedSolutions";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SolutionHero,
  SolutionOverview,
  SolutionServices,
  SolutionUseCases,
  SolutionScreenshots,
  SolutionSuccessStories,
  SolutionCTA
} from "@/components/Solution";

gsap.registerPlugin(ScrollTrigger);

const Solution = () => {
  const { solutionId } = useParams<{ solutionId: string }>();
  const contentRef = useRef<HTMLDivElement>(null);

  // Find the solution by id
  const solution = detailedSolutionData.find(
    (sol) => sol.id === parseInt(solutionId || "0")
  );

  useEffect(() => {
    if (!solution) return;

    // Animate content sections
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.querySelectorAll(".animate-section"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [solution]);

  // If solution not found, redirect to home
  if (!solution) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{solution.title} | TSS-X Solutions</title>
        <meta name="description" content={solution.description} />
        <meta
          name="keywords"
          content={`${solution.title}, ${solution.services.join(
            ", "
          )}, ${solution.technologies.join(", ")}`}
        />
        <meta
          property="og:title"
          content={`${solution.title} | TSS-X Solutions`}
        />
        <meta property="og:description" content={solution.description} />
        <meta property="og:image" content={solution.image} />
        <link
          rel="canonical"
          href={`https://tssx.com/solutions/${solution.slug}`}
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <SolutionHero solution={solution} />

        {/* Content Sections */}
        <div
          ref={contentRef}
          className="bg-gradient-to-b from-white via-neutral-50 to-white"
        >
          {/* Overview Section */}
          <SolutionOverview solution={solution} />

          {/* Services Section */}
          <SolutionServices solution={solution} />

          {/* Use Cases Section */}
          <SolutionUseCases solution={solution} />

          {/* Screenshots Section */}
          <SolutionScreenshots solution={solution} />

          {/* Success Stories Section */}
          <SolutionSuccessStories solution={solution} />

          {/* Call to Action Section */}
          <SolutionCTA solution={solution} />
        </div>
      </main>
    </>
  );
};

export default Solution;
