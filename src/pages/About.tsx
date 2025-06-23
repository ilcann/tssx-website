import { Meta } from "@/components/About";
import { Success, Overview, Hero, Team, Timeline, Stats } from "@/components/About";
import { ContactBanner } from "@/components/Shared";

const AboutPage = () => {
  return (
    <>
      <Meta />
      <main id="about" className="container flex flex-col mx-auto">
          <Hero />
          <Stats />
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
