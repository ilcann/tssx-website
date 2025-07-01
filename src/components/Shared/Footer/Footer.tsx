import { useTranslation } from "react-i18next";
import { footerLinks, footerContactItems } from "./footer.constants";
import { RouterLink, Logo } from "@/components/Shared";

const Footer = () => {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <section className="footer-content">
        <div className="footer-columns">
          <div className="footer-column lg:col-span-4">
            <Logo /> 
            <p className="footer-text">
              {t("footer.brand.description")}
            </p>
            <p className="footer-caption">
              {t("footer.brand.caption")}
            </p>
            <p className="footer-caption pt-4">
              {t('footer.copyright', { year: currentYear })}
            </p>
          </div>
          <div className="footer-column lg:ml-6 lg:col-span-2">
            <h3 className="footer-heading">
              {t("footer.companyLinks.title")}
            </h3>
            <ul className="footer-list">
              {footerLinks.companyLinks.map(({ href, labelKey })=> (
              <li key={href}><RouterLink to={href} className="footer-link">{t(labelKey)}</RouterLink></li>
              ))}
            </ul>
          </div>
          <div className="footer-column lg:mr-6 lg:col-span-3">
            <h3 className="footer-heading">
              {t("footer.solutionLinks.title")}
            </h3>
            <ul className="footer-list">
              {footerLinks.solutionLinks.map(({ href, labelKey })=> (
              <li key={href}><RouterLink to={href} className="footer-link">{t(labelKey)}</RouterLink></li>
              ))}
            </ul>
          </div>
          <div className="footer-column lg:col-span-3">
            <h3 className="footer-heading">{t("footer.contactUs.title")}</h3>
            <ul className="footer-list">
              {footerContactItems.map(({ icon: Icon, lines }, idx) => (
                <li key={idx} className="flex flex-row gap-4">
                  <Icon className="text-amber-700" size={16} />
                  <div className="flex flex-col gap-1">
                    {lines.map((line, lineIdx) =>
                      typeof line === "string" ? (
                        <p key={lineIdx} className="footer-text">{line}</p>
                      ) : (
                        <a
                          key={lineIdx}
                          href={line.href}
                          className="footer-link"
                        >
                          {line.text}
                        </a>
                      )
                    )}
                  </div>
                </li>
              ))}              
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
