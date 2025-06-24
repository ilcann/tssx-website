import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import FooterLink from "./FooterLink";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-neutral-900 text-neutral-200 pt-12 pb-4">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-4">
            <div className="mb-8">
              <img
                src="img/tssx/tssx-light-logo.png"
                alt="TSS-X Logo"
                className="h-7 mb-4 brightness-100"
              />
              <p className="text-neutral-300 text-sm leading-relaxed mb-4 max-w-sm">
                {t("footer_description")}
              </p>
              <p className="text-neutral-400 text-xs mb-4">
                {t("footer_tagline")}
              </p>
            </div>
            <div className="flex space-x-2">
              <a
                href="https://www.linkedin.com/company/tss-x/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 p-2 rounded-md hover:bg-amber-700 transition-all duration-300 group"
                aria-label={t("footer_linkedin_aria")}
                title={t("footer_linkedin_title")}
              >
                <Linkedin
                  size={16}
                  className="text-neutral-300 group-hover:text-white transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">{t("footer_company_heading")}</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="/about">{t("footer_about_us")}</FooterLink>
              </li>
              <li>
                <FooterLink href="#solutions">{t("footer_our_solutions")}</FooterLink>
              </li>
              <li>
                <FooterLink href="/references">{t("footer_references")}</FooterLink>
              </li>
              <li>
                <FooterLink href="/partners">{t("footer_partners")}</FooterLink>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-white">{t("footer_solutions_heading")}</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="/solutions/observability">
                  {t("footer_solution_observability")}
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/solutions/asset-management">
                  {t("footer_solution_asset_management")}
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/solutions/automation">{t("footer_solution_automation")}</FooterLink>
              </li>
              <li>
                <FooterLink href="/solutions/security">{t("footer_solution_security")}</FooterLink>
              </li>
              <li>
                <FooterLink href="/solutions/finops">{t("footer_solution_finops")}</FooterLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t("footer_contact_us_heading")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  className="mr-2 mt-1 text-amber-700 flex-shrink-0"
                  size={16}
                />
                <span className="text-neutral-300 text-sm leading-relaxed">
                  İçerenköy yolu cd. Bodur İş Merkezi
                  <br />
                  No:8-11, Ataşehir, İstanbul
                  <br />
                  34752
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-amber-700 flex-shrink-0" size={16} />
                <a
                  href="mailto:info@tss-x.com"
                  className="text-neutral-300 text-sm hover:text-amber-400 transition-colors duration-300"
                >
                  info@tss-x.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone
                  className="mr-2 mt-1 text-amber-700 flex-shrink-0"
                  size={16}
                />
                <div className="space-y-1">
                  <a
                    href="tel:+905458522713"
                    className="block text-neutral-300 text-sm hover:text-amber-400 transition-colors duration-300"
                  >
                    +90 545 852 2713
                  </a>
                  <a
                    href="tel:+905322164040"
                    className="block text-neutral-300 text-sm hover:text-amber-400 transition-colors duration-300"
                  >
                    +90 532 216 4040
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-3 md:mb-0">
            {t("footer_copyright", { year: currentYear })}
          </p>
          <div className="flex flex-wrap justify-center space-x-6 text-neutral-400 text-sm">
            <FooterLink href="/about">{t("footer_about_us")}</FooterLink>
            <FooterLink href="#contact">{t("footer_contact_us_heading")}</FooterLink>
            <FooterLink
              href="https://www.linkedin.com/company/tss-x/"
              isExternal
            >
              {t("footer_linkedin")}
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
