import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { referenceLocations } from "@/staticComponents/reference";
import { Building2 } from "lucide-react";

const ClientSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderTrackRef = useRef<HTMLDivElement>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  // Flatten all clients from all countries
  const allClients = referenceLocations.flatMap((location) =>
    location.clients.map((client) => ({
      name: client.name,
      logo: client.logo,
      country: location.country,
    }))
  );

  // Duplicate the clients array for seamless loop
  const duplicatedClients = [...allClients, ...allClients];

  const handleImageError = (logoPath: string) => {
    setImageErrors(prev => new Set(prev).add(logoPath));
  };

  useEffect(() => {
    if (!sliderRef.current || !sliderTrackRef.current) return;

    const track = sliderTrackRef.current;
    const slider = sliderRef.current;

    // Get the width of the track after rendering
    const updateAnimation = () => {
      const trackWidth = track.scrollWidth;

      // Set up the infinite animation
      const tl = gsap.timeline({ repeat: -1 });

      // Start from 0, move to -50% (half of the duplicated content)
      tl.fromTo(track, 
        { x: 0 },
        {
          x: -trackWidth / 2, // Move exactly half the width (one complete set)
          duration: allClients.length * 3, // 3 seconds per client for smooth reading
          ease: "none",
        }
      ).set(track, { x: 0 }); // Reset instantly to beginning

      // Pause on hover
      const handleMouseEnter = () => {
        tl.pause();
      };

      const handleMouseLeave = () => {
        tl.resume();
      };

      slider.addEventListener("mouseenter", handleMouseEnter);
      slider.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        tl.kill();
        slider.removeEventListener("mouseenter", handleMouseEnter);
        slider.removeEventListener("mouseleave", handleMouseLeave);
      };
    };

    // Wait for DOM to be fully rendered
    const timer = setTimeout(updateAnimation, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [allClients.length]);

  return (
    <div className="py-12 overflow-hidden">
      <div
        ref={sliderRef}
        className="flex overflow-hidden whitespace-nowrap"
      >
        <div
          ref={sliderTrackRef}
          className="flex items-center gap-8"
          style={{ width: "fit-content" }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${client.country}-${index}`}
              className="flex items-center bg-white rounded-lg shadow-md px-6 py-4 border border-amber-200 hover:shadow-lg transition-shadow duration-300 flex-shrink-0 min-w-[280px]"
            >
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 overflow-hidden">
                {imageErrors.has(client.logo) ? (
                  <Building2 size={20} className="text-amber-600" />
                ) : (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-full h-full object-contain"
                    onError={() => handleImageError(client.logo)}
                    loading="lazy"
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-neutral-900 text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                  {client.name}
                </h4>
                <p className="text-xs text-neutral-500">{client.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;
