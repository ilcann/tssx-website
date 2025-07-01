import { Meta } from "@/components/About";
import { Success, Overview, PageHeader, Team, Timeline } from "@/components/About";
import { ContactBanner } from "@/components/Shared";
import { Suspense } from "react";
import LoadingPage from "@/components/ui/LoadingPage";

const AboutPage = () => {
  return (
    <>
      <Meta />
      <main className="app-content">
        <Suspense fallback={<LoadingPage />}>
          <PageHeader />
          <Overview />
          <Team />
          <Timeline />
          <Success />
          <ContactBanner />
        </Suspense>
      </main>
    </>
  );
};

export default AboutPage;
