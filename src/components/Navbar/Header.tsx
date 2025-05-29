import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import HeaderLink from "./HeaderLink";
import { useNavigate, useLocation } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      // Always scroll to top of hero section
      const heroElement = document.getElementById("hero");
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Fallback to scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate("/");
    }
  };

  // Navigation items for the header
  const allNavItems = [
    { to: "solutions", label: "Solutions" },
    { to: "/about", label: "About Us" },
    { to: "references", label: "References" },
    { to: "faq", label: "FAQ" },
    { to: "contact", label: "Contact Us" },
  ];

  // Filter nav items based on current page
  const navItems =
    location.pathname === "/"
      ? allNavItems
      : allNavItems.filter(
          (item) => item.to !== "references" && item.to !== "faq"
        );

  return (
    <header
      id="header"
      className="w-full sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-lg py-2"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div
          className="flex items-center gap-2 group cursor-pointer"
          onClick={handleLogoClick}
        >
          <div className="relative">
            <div className="text-4xl font-black transition-all duration-300 header-logo text-amber-600">
              <span className="text-black">TSS</span>
              <span className="text-amber-500">X</span>
            </div>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
          </div>
          <Sparkles className="h-5 w-5 text-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden text-black font-medium md:flex items-center space-x-2">
          {navItems.map((item) => (
            <HeaderLink key={item.label} to={item.to} onClick={handleNavClick}>
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
