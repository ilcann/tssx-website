import { useRef, useEffect } from "react";
import gsap from "gsap";
import { referenceLocations } from "@/staticComponents/reference";
import "./ClientSlider.css";
import SpecialText from "../ui/SpecialText";
import AnimatedText from "../ui/AnimatedText";

const ClientSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderTrackRef = useRef<HTMLDivElement>(null);

  const lightLogos = [
    "Turkiye Finans Katılım Bankası",
    "TatMetal",
    "Rakbank",
  ];
  const allClients = referenceLocations.flatMap((location) =>
    location.clients.map((client) => ({
      name: client.name,
      logo: client.logo,
      country: location.country,
    }))
  );

  const duplicatedClients = [...allClients, ...allClients, ...allClients];

  const getLogoClass = (clientName: string) => {
    const isLight = lightLogos.includes(clientName);
    return `logo-image ${isLight ? "logo-light" : "logo-dark"}`;
  };

  useEffect(() => {
    if (!sliderRef.current || !sliderTrackRef.current) return;

    const track = sliderTrackRef.current;
    const slider = sliderRef.current;
    let cleanup: (() => void) | null = null;

    const updateAnimation = () => {
      setTimeout(() => {
        const trackWidth = track.scrollWidth;

        const singleSetWidth = trackWidth / 3;

        const tl = gsap.timeline({ repeat: -1 });

        tl.to(track, {
          x: -singleSetWidth,
          duration: allClients.length * 4,
          ease: "none",
        });

        tl.set(track, { x: 0 });

        const handleMouseEnter = () => {
          tl.pause();
        };

        const handleMouseLeave = () => {
          tl.resume();
        };

        slider.addEventListener("mouseenter", handleMouseEnter);
        slider.addEventListener("mouseleave", handleMouseLeave);

        cleanup = () => {
          tl.kill();
          slider.removeEventListener("mouseenter", handleMouseEnter);
          slider.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, 500);
    };

    updateAnimation();

    return () => {
      if (cleanup) cleanup();
    };
  }, [allClients.length]);

  return (
    <div className="py-12 my-12 overflow-hidden">
      <div className="container w-full flex flex-col items-center justify-center mx-auto px-4 mb-8">
              <SpecialText
                id="references-special-text"
                className="text-2xl font-bold text-center text-neutral-900 mb-2"
              >
                <AnimatedText text="Trusted by Leading Organizations" />
              </SpecialText>

              <span className="text-center text-neutral-600">
                Our clients across the globe trust us with their IT
                infrastructure
              </span>
            </div>
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <h3 className="text-xl font-bold text-neutral-900 mb-2">
            Our Trusted Clients
          </h3>
        </div>
      </div>

      <div ref={sliderRef} className="flex overflow-hidden whitespace-nowrap">
        <div
          ref={sliderTrackRef}
          className="flex items-center gap-12"
          style={{ width: "fit-content" }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${client.country}-${index}`}
              className="flex items-center gap-3 flex-shrink-0"
            >
              {/* Logo */}
              <div className="logo-container w-40 h-24">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className={getLogoClass(client.name)}
                  loading="lazy"
                />
              </div>
              {/* Client Name */}
              {!client.logo && (
                <span className="text-sm text-amber-700 font-medium whitespace-nowrap">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;
