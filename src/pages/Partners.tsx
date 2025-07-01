import { PartnersGrid, PartnersHeader } from "@/components/Partners";
import { ContactBanner } from "@/components/Shared";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const COMPANY_NAME = "TSS-X";

const PartnersPage = () => {
  const { t } = useTranslation('partners');
  
  return (
    <>
      <Helmet>
        <title>{t("title")} | {COMPANY_NAME}</title>
        <meta name="description" content={t("meta_description")} />
        <meta property="og:title" content={`${t("title")} | ${COMPANY_NAME}`} />
        <meta property="og:description" content={t("meta_description")} />
      </Helmet>
      <main>
        <section id="partners">
          <div className="section-content min-h-[80vh]">
            <PartnersHeader />
            <PartnersGrid />
          </div>
        </section>
        <ContactBanner />
      </main>
    </>
  )
}

export default PartnersPage
