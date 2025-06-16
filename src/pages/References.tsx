import { Helmet } from "react-helmet-async";
import ReferencesPage from "@/components/Reference/References";
import { useTranslation } from "react-i18next";

const COMPANY_NAME = "TSS-X";

const References = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>References | {COMPANY_NAME}</title>
        <meta name="description" content={t("meta_references_description")} />
        <meta property="og:title" content={`References | ${COMPANY_NAME}`} />
        <meta property="og:description" content={t("meta_references_description")} />
      </Helmet>
      <ReferencesPage />
    </>
  );
};

export default References;
