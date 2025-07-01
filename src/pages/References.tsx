import { PageHeader, ReferenceMap } from "@/components/Reference";
import { ContactBanner } from "@/components/Shared";
import { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import LoadingPage from "@/components/ui/LoadingPage";

const COMPANY_NAME = "TSS-X";

const References = () => {
  const { t } = useTranslation('references');
  
  return (
    <>
      <Helmet>
        <title>{t("title")} | {COMPANY_NAME}</title>
        <meta name="description" content={t("meta.description")} />
        <meta property="og:title" content={`${t("title")} | ${COMPANY_NAME}`} />
        <meta property="og:description" content={t("meta.description")} />
      </Helmet>
      <main className="app-content">
        <Suspense fallback={<LoadingPage />}>
          <PageHeader />
          <ReferenceMap/>
          <ContactBanner/>        
        </Suspense>
      </main>
    </>
  );
};

export default References;
