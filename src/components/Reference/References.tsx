import DecorativeBackground from "@/components/ui/DecorativeBackground";
import ReferencesMap from "./Reference.map";
import ReferenceStats from "./References.stats";
import ReferencesHeader from "./Reference.header";
import { ContactBanner } from "../Shared";

const References = () => {
  return (
    <DecorativeBackground
      variant="light"
      elements={[
        {
          position: "top-right",
          size: "lg",
          opacity: "high",
          intensity: "medium",
        },
        {
          position: "bottom-left",
          size: "lg",
          opacity: "medium",
          intensity: "medium",
        },
        {
          position: "center-right",
          size: "sm",
          opacity: "low",
          intensity: "medium",
        },
      ]}
      className="bg-gradient-to-b from-neutral-50 to-neutral-100"
    >
      <main id="references" className="container mx-auto flex flex-col">
        <ReferencesHeader />
        <ReferenceStats />
        <ReferencesMap />
        <ContactBanner />
      </main>
    </DecorativeBackground>
  );
};

export default References;
