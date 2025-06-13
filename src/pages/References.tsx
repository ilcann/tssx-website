import ReferenceMain from "@/components/Reference/References"
import { Helmet } from "react-helmet-async";

const COMPANY_NAME = "TSS-X";

const References = () => {
  return (
    <>
      <Helmet>
        <title>References | {COMPANY_NAME}</title>
        <meta name="description" content="See why leading organizations trust us. Explore our global client references and success stories in IT infrastructure and digital transformation." />
        <meta property="og:title" content={`References | ${COMPANY_NAME}`} />
        <meta property="og:description" content="See why leading organizations trust us. Explore our global client references and success stories in IT infrastructure and digital transformation." />
      </Helmet>
      <div>
        <ReferenceMain />
      </div>
    </>
  )
}

export default References
