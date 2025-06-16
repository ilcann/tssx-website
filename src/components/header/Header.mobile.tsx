import HeaderLink from "./HeaderLink";
import ContactSales from "./ContactSales";
import LanguageSwitcher from "./LanguageSwitcher";
import SolutionsDropdown from "./SolutionsDropdown"; // Artık tek bileşende
import { useTranslation } from "react-i18next";

const HeaderMobile = ({
  mobileMenuOpen,
  handleClose,
}: {
  mobileMenuOpen: boolean;
  handleClose: () => void;
}) => {
  const { t } = useTranslation();

  const navItems = [
    { type: "link", to: "/", label: t("nav_home") },
    { type: "dropdown", label: t("nav_solutions") },
    { type: "link", to: "/about", label: t("nav_about") },
    { type: "link", to: "/contact", label: t("nav_contact") },
    { type: "link", to: "/references", label: t("nav_references") },
    { type: "link", to: "/partners", label: t("nav_partners") },
  ];

  return (
    <div
      className={`md:hidden absolute top-full left-0 w-full bg-neutral-900 transition-all duration-300 overflow-hidden z-50 ${
        mobileMenuOpen ? "h-screen opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="flex flex-col p-6 gap-6 h-full justify-between">
        {/* Üstteki sabit alan: Contact & Dil */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between">
            <ContactSales />
            <LanguageSwitcher />
          </div>

          {/* Menü butonları */}
          <nav className="flex flex-col gap-4 mt-4">
            {navItems.map((item) => {
              if (item.type === "dropdown") {
                return (
                  <SolutionsDropdown
                    key="solutions-mobile"
                    variant="mobile"
                    onLinkClick={handleClose}
                    label={item.label}
                  />
                );
              }

              return (
                <HeaderLink
                  key={item.label}
                  to={item.to!}
                  onClick={handleClose}
                >
                  {item.label}
                </HeaderLink>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
