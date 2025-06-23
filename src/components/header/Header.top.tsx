import { useNavigate, useLocation } from "react-router";
import ContactSales from "./ContactSales";
import LanguageSwitcher from "./LanguageSwitcher";

const HeaderTop = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="hidden md:flex container mx-auto px-6 justify-between items-center">
      {/* Left: Logo */}
      <div className="flex items-center cursor-pointer ml-8" onClick={handleLogoClick}>
        <img
          src="img/tssx/tssx-light-logo.png"
          alt="TSS-X Logo"
          height="25"
          className="h-8 brightness-100"
        />
      </div>

      {/* Right: Contact & Language */}
      <div className="flex items-center gap-4">
        <ContactSales />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default HeaderTop;
