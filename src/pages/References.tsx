import { Helmet } from "react-helmet-async";
import ReferencesPage from "@/components/Reference/References";
import { useTranslation } from "react-i18next";

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
      <ReferencesPage />
    </>
  );
};

export default References;
