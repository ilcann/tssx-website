import { useTranslation } from "react-i18next";
import { Accordion, AccordionItem, NavItem, RouterLink } from "@/components/Shared";

type MobileMenuProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { t } = useTranslation("common");
  return (
    <div className={`mobile-menu ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <nav className="mobile-nav">
        <ul className="nav-list flex-col">
          <Accordion
            label={t("header.nav.solutions")}
          >
            <AccordionItem to="/solutions/observability"
                          label={t("header.solutionLinks.links.observability")} 
                          onClick={onClose}/>
            <AccordionItem to="/solutions/asset-management"
                          label={t("header.solutionLinks.links.assetManagement")}
                          onClick={onClose}/>
            <AccordionItem to="/solutions/automation"
                          label={t("header.solutionLinks.links.automation")}
                          onClick={onClose}/>
            <AccordionItem to="/solutions/security"
                          label={t("header.solutionLinks.links.security")}
                          onClick={onClose}/>
            <AccordionItem to="/solutions/finops"
                          label={t("header.solutionLinks.links.finops")}
                          onClick={onClose}/>           
          </Accordion>
          <NavItem to="/about"      onClick={onClose} label={t("header.nav.aboutUs")}    className="border-b border-neutral-700"/>
          <NavItem to="/references" onClick={onClose} label={t("header.nav.references")} className="border-b border-neutral-700"/>
          <NavItem to="/partners"   onClick={onClose} label={t("header.nav.partners")}/>
          <li className="nav-item"><RouterLink to="/contact" onClick={onClose} className="header-cta w-full">{t("header.contactUs")}</RouterLink></li>
        </ul>
      </nav>
    </div>
  );
};
