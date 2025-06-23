import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderTop from "./Header.top";
import HeaderBottom from "./Header.bottom";
import MobileNavigation from "./Header.mobile";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let lastScrollY = 0;
    let ticking = false;

    const updateHeader = () => {
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > lastScrollY ? "down" : "up";
      const scrollThreshold = window.innerHeight * 0.3;

      if (headerRef.current) {
        if (scrollY <= 10) {
          gsap.to(headerRef.current, { y: 0, opacity: 1, duration: 0.3 });
        } else if (scrollY > scrollThreshold) {
          gsap.to(headerRef.current, {
            y: scrollDirection === "down" ? -100 : 0,
            opacity: scrollDirection === "down" ? 0 : 1,
            duration: 0.5,
          });
        } else {
          gsap.to(headerRef.current, { y: 0, opacity: 1, duration: 0.3 });
        }
      }

      lastScrollY = scrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    gsap.set(headerRef.current, { y: 0, opacity: 1 });

    return () => {
      window.removeEventListener("scroll", onScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <header ref={headerRef} className="w-full sticky top-0 z-40 bg-neutral-900 border-b border-b-black shadow-xl py-5">
      <div className="flex flex-col gap-y-3">
        {!mobileMenuOpen && <HeaderTop />}
        <HeaderBottom mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <MobileNavigation mobileMenuOpen={mobileMenuOpen} handleClose={() => setMobileMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
