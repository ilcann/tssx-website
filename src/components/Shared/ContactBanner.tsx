import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CTAButton } from "@/components/Shared";

const ContactBanner = () => {
  const { t } = useTranslation("common");

  return (
    <section id="contact">
        <div className="contact-banner">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="contact-banner-bg"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            aria-hidden="true"
          >
            <source src="/img/tssx/background-composed.mp4" type="video/mp4" />
          </video>
          <div className="section-content">
            <div className="relative flex flex-col items-center gap-block">
              <div className="flex flex-col gap-element text-center">
                <h2 className="title-section text-white">{t("contact_banner.title")}</h2>
                <p className="text-body text-white/90">{t("contact_banner.description")}</p>
              </div>
              <CTAButton to="/contact" type="secondary" icon={<ChevronRight className="size-6 md:size-7 xl:size-8" />}>
                {t("contact_banner.cta")}
              </CTAButton>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ContactBanner;
