import { CTAButton, Dropdown, DropdownItem, NavItem } from "@/components/Shared";
import { MobileMenu, LanguageSwitch } from ".";
import { useDeviceType, useHideOnScroll }  from "@/lib";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Shared";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation("common");
  const [mobileOpen, setMobileOpen] = useState(false);
  const device = useDeviceType();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  useHideOnScroll({ elementRef: headerRef, disabled: mobileOpen });

  return (
    <>
      <header ref={headerRef} className="app-header">
        <section className="header-content">
          <Logo onClick={() => setMobileOpen(false)}/>
          { device === 'desktop' && (
            <nav className="header-nav">
              <ul className="nav-list">
                <Dropdown label={t("header.nav.solutions")}>
                    <DropdownItem to="/solutions/observability"
                                  label={t("header.solutionLinks.links.observability")} />
                    <DropdownItem to="/solutions/asset-management"
                                  label={t("header.solutionLinks.links.assetManagement")} />
                    <DropdownItem to="/solutions/automation"
                                  label={t("header.solutionLinks.links.automation")} />
                    <DropdownItem to="/solutions/security"
                                  label={t("header.solutionLinks.links.security")} />
                    <DropdownItem to="/solutions/finops"
                                  label={t("header.solutionLinks.links.finops")} />
                </Dropdown>
                <NavItem to="/about"       label={t("header.nav.aboutUs")}   />
                <NavItem to="/references"  label={t("header.nav.references")} />
                <NavItem to="/partners"    label={t("header.nav.partners")}   />
              </ul>
            </nav>
          )}
          <div className="header-right">
            <ul className="nav-list flex-row">
              { device === 'desktop' && (
                <>
                  <li className="nav-item">
                    <LanguageSwitch/>
                  </li>
                  <li className="nav-item">
                    <CTAButton to="/contact" type="primary">
                      {t("header.contactUs")}
                    </CTAButton>
                  </li>
                </>
              )}
              { device === 'mobile' && (
                <>
                  <li className="nav-item">
                    <LanguageSwitch/>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-clickable"
                      onClick={() => setMobileOpen(!mobileOpen)}
                      aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    >
                      { mobileOpen ? <X className="w-12"/> : <Menu className="w-12"/> }
                    </button>
                  </li>
                </>
              )}

            </ul>
          </div>    
        </section>
      </header>
      { device === 'mobile' && (
        <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      )}
    </>
  );
};

export default Header;


