import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import HeaderLink from "./HeaderLink";
import { useNavigate, useLocation } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      const heroElement = document.getElementById("hero");
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection("hero");
      }
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Add validation to prevent incorrect detection during initial load
      if (documentHeight < windowHeight) {
        // Page content not fully loaded yet, skip section detection
        return;
      }
      
      const scrolledToBottom =
        documentHeight <= scrollPosition + windowHeight + 50;

      if (scrolledToBottom) {
        setActiveSection("contact");
        return;
      }

      const sections = ["hero", "solutions", "references", "faq", "contact"];

      let maxVisibleSection = "";
      let maxVisibleHeight = 0;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const visibleHeight =
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          maxVisibleSection = section;
        }
      }

      if (maxVisibleSection) {
        setActiveSection(maxVisibleSection);
      }
    };

    // Delay initial check to allow page to load properly
    const initialCheck = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearTimeout(initialCheck);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation items for the header
  const allNavItems = [
    { to: "solutions", label: "Solutions" },
    { to: "/about", label: "About Us" },
    { to: "references", label: "References" },
    { to: "faq", label: "FAQ" },
    { to: "contact", label: "Contact Us" },
  ];

  // Filter nav items based on current page
  const navItems = location.pathname === "/" 
    ? allNavItems 
    : allNavItems.filter(item => item.to !== "references" && item.to !== "faq");

  return (
    <header
      id="header"
      className={`w-full sticky top-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg py-2"
          : "bg-amber-50/50 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div
          className="flex items-center gap-2 group cursor-pointer"
          onClick={handleLogoClick}
        >
          <div className="relative">
            <div
              className={`text-4xl font-black transition-all duration-300 header-logo ${
                isScrolled ? "text-amber-600" : "text-amber-700"
              }`}
            >
              <span className="text-black">TSS</span>
              <span className="text-amber-500">X</span>
            </div>
            <div
              className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-500 ${
                isScrolled ? "scale-x-100" : "scale-x-0"
              } group-hover:scale-x-100`}
            ></div>
          </div>
          <Sparkles
            className={`h-5 w-5 text-amber-500 opacity-0 transition-opacity duration-300 ${
              isScrolled ? "opacity-100" : ""
            } group-hover:opacity-100`}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden text-black font-medium md:flex items-center space-x-2">
          {navItems.map((item) => (
            <HeaderLink
              key={item.label}
              to={item.to}
              activeSection={activeSection}
              onClick={handleNavClick}
            >
              {item.label}
            </HeaderLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-amber-100/80 text-amber-700 hover:bg-amber-200/90 transition-colors duration-300"
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
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-2 p-4">
          {navItems.map((item) => (
            <HeaderLink
              key={item.to}
              to={item.to}
              activeSection={activeSection}
              onClick={handleNavClick}
            >
              {item.label}
            </HeaderLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
