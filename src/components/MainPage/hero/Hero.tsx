import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import HeroTagline from "./Hero.tagline";
import HeroTitle from "./Hero.title";
import HeroDescription from "./Hero.description";
import HeroStats from "./Hero.stats";
import HeroCTA from "./Hero.CTA";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const tagLineRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  gsap.registerPlugin();

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    gsap.set([tagLineRef.current, titleRef.current, subtitleRef.current, descriptionRef.current, ctaRef.current], {
      opacity: 0,
      y: 50,
    });
    gsap.set(statsRef.current, { opacity: 0, y: 50 });

    tl.to(tagLineRef.current, { opacity: 1, y: 0, duration: 0.8 })
      .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
      .to(statsRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4");
  }, { scope: heroRef });

  return (
    <section ref={heroRef} id="hero" className="relative h-full flex items-center">
      <video
        src="/img/tssx/background.mp4"
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="container mx-auto px-4 relative z-20 max-w-4xl text-center">
        <HeroTagline ref={tagLineRef} />
        <HeroTitle titleRef={titleRef} subtitleRef={subtitleRef} />
        <HeroDescription ref={descriptionRef} />
        <HeroStats ref={statsRef} />
        <HeroCTA ref={ctaRef} />
      </div>
    </section>
  );
};

export default Hero;