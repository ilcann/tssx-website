import Partners from "@/components/Partners/Partners";
import { Helmet } from "react-helmet-async";

const COMPANY_NAME = "TSS-X";

const PartnersPage = () => {
  return (
    <>
      <Helmet>
        <title>Partners | {COMPANY_NAME}</title>
        <meta name="description" content="Discover our trusted technology partners. We collaborate with industry leaders like BMC, GitLab, HashiCorp, and more to deliver innovative IT solutions and exceptional value to our clients." />
        <meta property="og:title" content={`Partners | ${COMPANY_NAME}`} />
        <meta property="og:description" content="Discover our trusted technology partners. We collaborate with industry leaders like BMC, GitLab, HashiCorp, and more to deliver innovative IT solutions and exceptional value to our clients." />
      </Helmet>
      <div>
        <Partners />
      </div>
    </>
  )
}

export default PartnersPage
