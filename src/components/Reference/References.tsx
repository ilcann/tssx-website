import DecorativeBackground from "@/components/ui/DecorativeBackground";
import ReferencesMap from "./Reference.map";
import ReferencesClientList from "./References.clientList";
import ReferenceStats from "./References.stats";
import ReferencesHeader from "./Reference.header";

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
      <section id="references">
        <div className="container mx-auto px-4">
          <ReferencesHeader />
          <ReferenceStats />
          <ReferencesMap />
          <ReferencesClientList />
        </div>
      </section>
    </DecorativeBackground>
  );
};

export default References;
