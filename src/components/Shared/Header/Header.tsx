import { CTAButton, Dropdown, DropdownItem, NavItem, Logo } from "@/components/Shared";
import { MobileMenu, LanguageSwitch } from ".";
import { useDeviceType, useHideOnScroll } from "@/lib";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { buildPath } from "@/lib";
import { slugs } from "@/routes/slugs";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation("common");

  const lang = i18n.language.startsWith("tr") ? "tr" : "en";
  const device = useDeviceType();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  useHideOnScroll({ elementRef: headerRef, disabled: mobileOpen });

  const links = {
    about: buildPath(lang, "about"),
    references: buildPath(lang, "references"),
    partners: buildPath(lang, "partners"),
    contact: buildPath(lang, "contact"),
    solutions: slugs[lang].solutions,
  };

  const solutionItems = Object.entries(slugs[lang].solutionList).map(([key, path]) => ({
    href: `/${lang}/${links.solutions}/${path}`,
    label: t(`header.solutionLinks.links.${key}`),
  }));

  return (
    <>
      <header ref={headerRef} className="app-header">
        <section className="header-content">
          <Logo onClick={() => setMobileOpen(false)} />

          {device === "desktop" && (
            <nav className="header-nav">
              <ul className="nav-list">
                <Dropdown label={t("header.nav.solutions")}>
                  {solutionItems.map(({ href, label }) => (
                    <DropdownItem key={href} to={href} label={label} />
                  ))}
                </Dropdown>
                <NavItem to={links.about} label={t("header.nav.aboutUs")} />
                <NavItem to={links.references} label={t("header.nav.references")} />
                <NavItem to={links.partners} label={t("header.nav.partners")} />
              </ul>
            </nav>
          )}

          <div className="header-right">
            <ul className="nav-list flex-row">
              <li className="nav-item">
                <LanguageSwitch />
              </li>

              {device === "desktop" ? (
                <li className="nav-item">
                  <CTAButton to={links.contact} type="primary">
                    {t("header.contactUs")}
                  </CTAButton>
                </li>
              ) : (
                <li className="nav-item">
                  <button
                    className="nav-clickable"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  >
                    {mobileOpen ? <X className="w-12" /> : <Menu className="w-12" />}
                  </button>
                </li>
              )}
            </ul>
          </div>
        </section>
      </header>

      {device === "mobile" && (
        <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      )}
    </>
  );
};

export default Header;
