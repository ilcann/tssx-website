import { Menu, X } from "lucide-react";
import HeaderLink from "./HeaderLink";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

const HeaderBottom = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) => {
  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <div className="container mx-auto px-6 flex justify-between items-center">
      {/* Logo */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex md:hidden items-center cursor-pointer"
      >
        <img
          src="img/tssx/tssx-light-logo.png"
          alt="TSS-X Logo"
          height="25"
          className="h-7 brightness-100"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-between items-center ml-6">
        {/* Left links */}
        <div className="flex space-x-6">
          {navItems.slice(0, -1).map((item) => (
            <HeaderLink
              key={item.label}
              to={item.to}
              onClick={handleNavClick}
              variant="default"
            >
              {item.label}
            </HeaderLink>
          ))}
        </div>

        {/* Right CTA */}
        <div>
          <HeaderLink
            to={navItems[navItems.length - 1].to}
            onClick={handleNavClick}
            variant="cta"
          >
            {navItems[navItems.length - 1].label}
          </HeaderLink>
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden w-10 h-10 rounded-lg bg-amber-600 text-white hover:bg-amber-700 flex items-center justify-center"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={
          mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  );
};

export default HeaderBottom;
