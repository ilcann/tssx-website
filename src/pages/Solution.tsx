import { useParams, Navigate } from "react-router";
import { Helmet } from "react-helmet-async";
import { getDetailedSolutionData } from "@/staticComponents/detailedSolutions";
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
} from "@/components/Solution";
import { useTranslation } from "react-i18next";
import { ContactBanner } from "@/components/Shared";

gsap.registerPlugin(ScrollTrigger);

const Solution = () => {
  const { slug, lng } = useParams<{ slug: string; lng: string }>();
  const { i18n, t } = useTranslation();

  // Geçerli dili belirle
  const lang = lng === "tr" || lng === "en"
    ? lng
    : i18n.language.startsWith("tr")
    ? "tr"
    : "en";

  const detailedSolutionData = getDetailedSolutionData(t);
  const contentRef = useRef<HTMLDivElement>(null);

  // slug eşleşmesini seçilen dile göre yap
  const solution = detailedSolutionData.find(
    (sol) => sol.slug[lang] === slug
  );

  useEffect(() => {
    if (!solution || !contentRef.current) return;

    const sections = contentRef.current.querySelectorAll(".animate-section");
    gsap.fromTo(
      sections,
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
  }, [solution, lang]);

  if (!solution) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{solution.title} | TSS-X</title>
        <meta name="description" content={solution.description} />
        <meta
          name="keywords"
          content={`${solution.title}, ${solution.services.join(", ")}, ${solution.technologies.join(", ")}`}
        />
        <meta property="og:title" content={`${solution.title} | TSS-X Solutions`} />
        <meta property="og:description" content={solution.description} />
        <meta property="og:image" content={solution.image} />
        <link rel="canonical" href={`https://tssx.com/solutions/${solution.slug[lang]}`} />
      </Helmet>

      <main>
        <SolutionHero solution={solution} />
        <div ref={contentRef} className="bg-gradient-to-b from-white via-neutral-50 to-white">
          <SolutionOverview solution={solution} />
          <SolutionServices solution={solution} />
          <SolutionUseCases solution={solution} />
          <SolutionScreenshots solution={solution} />
          <SolutionSuccessStories solution={solution} />
          <ContactBanner />
        </div>
      </main>
    </>
  );
};

export default Solution;
