import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";
import HeaderLink from "./HeaderLink";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    let lastScrollY = 0;
    let ticking = false;

    const updateHeader = () => {
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > lastScrollY ? "down" : "up";
      const scrollThreshold = window.innerHeight * 0.5; // 50% of screen height
      if (headerRef.current) {
        // Always show header when near the top
        if (scrollY <= 10) {
          gsap.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        } else if (scrollY > scrollThreshold) {
          if (scrollDirection === "down") {
            gsap.to(headerRef.current, {
              y: -100,
              opacity: 0,
              duration: 0.5,
              ease: "power2.out",
            });
          } else if (scrollDirection === "up") {
            gsap.to(headerRef.current, {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        } else {
          // Smooth transition in the middle range
          gsap.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          });
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

    // Initial state
    if (headerRef.current) {
      gsap.set(headerRef.current, { y: 0, opacity: 1 });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/solutions", label: "Solutions" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <header
      ref={headerRef}
      id="header"
      className="w-full sticky top-0 z-40 backdrop-blur-sm bg-neutral-900 border-b border-b-black shadow-xl py-3"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          className="flex items-center cursor-pointer group"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src="img/tssx/tssx-light-logo.png"
            alt="TSS-X Logo"
            width="90"
            height="25"
            className="h-7 brightness-100"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <HeaderLink key={item.label} to={item.to} onClick={handleNavClick}>
              {item.label}
            </HeaderLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden w-10 h-10 rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={
            mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-neutral-900 border-b border-neutral-700 shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-4">
          {navItems.map((item) => (
            <HeaderLink key={item.to} to={item.to} onClick={handleNavClick}>
              {item.label}
            </HeaderLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
