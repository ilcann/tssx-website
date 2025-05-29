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
      const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
      const scrollThreshold = 300; // Start hiding after 300px scroll

      if (headerRef.current) {
        if (scrollY > scrollThreshold) {
          if (scrollDirection === 'down') {
            // Scrolling down - hide header
            gsap.to(headerRef.current, {
              y: -100,
              opacity: 0,
              duration: 1,
              ease: "power2.out"
            });
          } else if (scrollDirection === 'up') {
            // Scrolling up - show header
            gsap.to(headerRef.current, {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power2.out"
            });
          }
        } else {
          // At the top - always show header
          gsap.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
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

    // Add scroll event listener
    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial state
    if (headerRef.current) {
      gsap.set(headerRef.current, { y: 0, opacity: 1 });
    }

    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
      className="w-full sticky top-0 z-40 backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-md py-3"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          className="flex items-center cursor-pointer group"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="text-4xl font-black">
            <span className="text-gray-800">TSS</span>
            <span className="text-amber-500">X</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <HeaderLink key={item.label} to={item.to} onClick={handleNavClick}>
              {item.label}
            </HeaderLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden w-10 h-10 rounded-lg bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors duration-200 flex items-center justify-center"
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
        className={`md:hidden absolute w-full bg-white border-b border-gray-200 shadow-lg transition-all duration-300 overflow-hidden ${
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
