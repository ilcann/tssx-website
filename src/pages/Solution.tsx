import { useParams, Navigate, Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { detailedSolutionData } from "@/staticComponents/detailedSolutions";
import { ArrowLeft, CheckCircle, TrendingUp, Award } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DecorativeBackground from "@/components/ui/DecorativeBackground";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import SpecialText from "@/components/ui/SpecialText";
import AnimatedText from "@/components/ui/AnimatedText";
import CaseStudy from "@/components/About/CaseStudy";

gsap.registerPlugin(ScrollTrigger);

const Solution = () => {
  const { solutionId } = useParams<{ solutionId: string }>();
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Find the solution by id
  const solution = detailedSolutionData.find(
    (sol) => sol.id === parseInt(solutionId || "0")
  );

  useEffect(() => {
    if (!solution) return;

    // Animate hero section
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
        <DecorativeBackground
          variant="dark"
          className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900 text-white py-20"
        >
          <div className="container mx-auto px-4">
            <div ref={heroRef} className="max-w-4xl mx-auto text-center">
              <Link
                to="/"
                className="inline-flex items-center text-amber-300 hover:text-amber-200 transition-colors mb-8 group"
              >
                <ArrowLeft className="mr-2 size-5 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>

              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  {solution.icon}
                </div>
              </div>

              <SpecialText
                id="solution-title"
                className="text-5xl font-bold mb-4"
              >
                <AnimatedText text={solution.title} />
              </SpecialText>

              <p className="text-xl text-amber-200 mb-6">{solution.titleTr}</p>
              <p className="text-lg text-neutral-200 max-w-3xl mx-auto leading-relaxed">
                {solution.detailedDescription}
              </p>
            </div>
          </div>
        </DecorativeBackground>

        {/* Content Sections */}
        <div
          ref={contentRef}
          className="bg-gradient-to-b from-white via-neutral-50 to-white"
        >
          {/* Services Section */}
          <section className="py-20 animate-section">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <SpecialText
                  id="services-title"
                  className="text-3xl font-bold mb-6 text-neutral-900"
                >
                  <AnimatedText text="Our Services" />
                </SpecialText>
                <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {solution.services.map((service, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-neutral-900">
                          {service}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Features & Benefits Section */}
          <section className="py-20 bg-gradient-to-r from-amber-50/50 to-neutral-50 animate-section">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <SpecialText
                  id="features-title"
                  className="text-3xl font-bold mb-6 text-neutral-900"
                >
                  <AnimatedText text="Features & Benefits" />
                </SpecialText>
                <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Features */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <TrendingUp className="h-6 w-6 text-amber-500 mr-3" />
                      Key Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {solution.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Award className="h-6 w-6 text-amber-500 mr-3" />
                      Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {solution.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Success Stories & Technologies Combined Section */}
          <section className="py-20 animate-section">
            <div className="container mx-auto px-4">
              {/* Success Stories */}
              <div className="mb-20">
                <div className="max-w-3xl mx-auto text-center mb-16">
                  <SpecialText
                    id="success-stories-title"
                    className="text-3xl font-bold mb-6 text-neutral-900"
                  >
                    <AnimatedText text="Success Stories" />
                  </SpecialText>
                  <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {solution.examples.map((example, index) => (
                    <CaseStudy
                      key={index}
                      title="Success Story"
                      subtitle={example.title}
                      icon={solution.icon}
                      image={solution.image}
                      description={example.description}
                      points={example.metrics || []}
                    />
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div className="max-w-3xl mx-auto text-center mb-16">
                  <SpecialText
                    id="technologies-title"
                    className="text-3xl font-bold mb-6 text-neutral-900"
                  >
                    <AnimatedText text="Technologies We Use" />
                  </SpecialText>
                  <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
                  <p className="text-lg text-neutral-700">
                    Powered by industry-leading tools and platforms
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <Card className="p-8">
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {solution.technologies.map((tech, index) => (
                          <div
                            key={index}
                            className="group bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-lg p-4 text-center hover:shadow-md hover:scale-105 transition-all duration-200"
                          >
                            <div className="text-sm font-medium text-neutral-800 group-hover:text-amber-700">
                              {tech}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-20 bg-gradient-to-r from-amber-50/30 via-white to-amber-50/30 animate-section">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <SpecialText
                  id="cta-title"
                  className="text-3xl font-bold mb-6 text-neutral-900"
                >
                  <AnimatedText
                    text={`Ready to Transform Your ${solution.title}?`}
                  />
                </SpecialText>

                <p className="text-lg text-neutral-700 mb-8">
                  Contact us today to learn how our{" "}
                  {solution.title.toLowerCase()} solutions can help your
                  organization achieve its goals.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-amber-500 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-600 transition-colors"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/"
                    className="border border-amber-500 text-amber-600 px-8 py-3 rounded-full font-medium hover:bg-amber-50 transition-colors"
                  >
                    View All Solutions
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Solution;
