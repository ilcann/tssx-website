import Partners from "@/components/Partners/Partners";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const COMPANY_NAME = "TSS-X";

const PartnersPage = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>Partners | {COMPANY_NAME}</title>
        <meta name="description" content={t("meta_partners_description")} />
        <meta property="og:title" content={`Partners | ${COMPANY_NAME}`} />
        <meta property="og:description" content={t("meta_partners_description")} />
      </Helmet>
      <div>
        <Partners />
      </div>
    </>
  )
}

export default PartnersPage
