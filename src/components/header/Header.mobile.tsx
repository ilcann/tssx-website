import HeaderLink from "./HeaderLink";
import ContactSales from "./ContactSales";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

const HeaderMobile = ({
  mobileMenuOpen,
  handleClose,
}: {
  mobileMenuOpen: boolean;
  handleClose: () => void;
}) => (
  <div
    className={`md:hidden absolute top-full left-0 w-full bg-neutral-900 transition-all duration-300 overflow-hidden z-50 ${
      mobileMenuOpen ? "h-screen opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <div className="flex flex-col p-6 gap-6 h-full justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
            <ContactSales />
            <LanguageSwitcher />
        </div>
        <nav className="flex flex-col gap-4 mt-4">
          {navItems.map((item, idx) => (
            <HeaderLink
              key={item.label}
              to={item.to}
              onClick={handleClose}
              variant={idx === navItems.length - 1 ? "cta" : "default"}
            >
              {item.label}
            </HeaderLink>
          ))}
        </nav>
      </div>
    </div>
  </div>
);

export default HeaderMobile;
