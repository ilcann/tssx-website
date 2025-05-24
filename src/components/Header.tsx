import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

type HeaderLinkProps = {
  to: string;
  activeSection: string;
  onClick: (section: string) => void;
  children: React.ReactNode;
};

const HeaderLink = ({
  to,
  activeSection,
  onClick,
  children,
}: HeaderLinkProps) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-40}
      duration={800}
      onClick={() => onClick(to)}
      className={`relative group overflow-hidden px-3 py-2 rounded-full transition-all duration-500 ${
        activeSection === to
          ? "text-amber-600 bg-amber-100/50 font-bold"
          : "text-black hover:text-amber-600 hover:bg-amber-50/50"
      }`}
    >
      <span className="relative z-10">{children}</span>
      {activeSection === to && (
        <span className="absolute inset-0 bg-gradient-to-r from-amber-100/80 to-amber-200/50 rounded-full backdrop-blur-sm -z-0"></span>
      )}
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    handleNavClick("hero");

    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolledToBottom =
        documentHeight <= scrollPosition + windowHeight + 50;

      if (scrolledToBottom) {
        setActiveSection("contact");
        return;
      }

      const sections = [
        "hero",
        "solutions",
        "about",
        "detailed-solutions",
        "references",
        "faq",
        "contact",
      ];

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

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items for the header
  const navItems = [
    { to: "solutions", label: "Solutions" },
    { to: "about", label: "About Us" },
    { to: "detailed-solutions", label: "Detailed Solutions" },
    { to: "references", label: "References" },
    { to: "contact", label: "Contact Us" },
  ];

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
              className={`text-4xl font-black transition-all duration-300 ${
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
              key={item.to}
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
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-40}
              duration={800}
              onClick={() => handleNavClick(item.to)}
              className={`p-3 rounded-lg transition-colors duration-300 ${
                activeSection === item.to
                  ? "bg-amber-100 text-amber-700 font-medium"
                  : "text-black hover:bg-amber-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
