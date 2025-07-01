import { PartnersGrid, PartnersHeader } from "@/components/Partners";
import { ContactBanner } from "@/components/Shared";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import LoadingPage from "@/components/ui/LoadingPage";
import { Suspense } from "react";
import { COMPANY_NAME } from "@/staticComponents/companyInfo";


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
      <main className="app-content">
        <Suspense fallback={<LoadingPage />}>
          <section id="partners">
            <div className="section-content min-h-[80vh]">
              <PartnersHeader />
              <PartnersGrid />
            </div>
          </section>
          <ContactBanner />         
        </Suspense>
      </main>
    </>
  )
}

export default PartnersPage
