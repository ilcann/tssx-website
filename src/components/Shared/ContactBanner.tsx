import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CTAButton } from "@/components/Shared";

const ContactBanner = () => {
  const { t } = useTranslation("common");

  return (
    <section id="contact">
      <div className="section-content">
        <div className="contact-banner">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="contact-banner-bg"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            aria-hidden="true"
          >
            <source src="/img/tssx/background.mp4" type="video/mp4" />
          </video>
          <div className="contact-banner-content">
            <h2 className="contact-banner-title">{t("contact_banner.title")}</h2>
            <p className="contact-banner-subtitle">{t("contact_banner.description")}</p>
            <CTAButton to="/contact" type="secondary" icon={<ExternalLink className="size-4" />}>
              {t("contact_banner.cta")}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
