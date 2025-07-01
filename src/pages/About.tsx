import { Meta } from "@/components/About";
import { Success, Overview, PageHeader, Team, Timeline } from "@/components/About";
import { ContactBanner } from "@/components/Shared";

const AboutPage = () => {
  return (
    <>
      <Meta />
      <main id="about">
          <PageHeader />
          <Overview />
          <Team />
          <Timeline />
          <Success />
          <ContactBanner />
      </main>
    </>
  );
};

export default AboutPage;
