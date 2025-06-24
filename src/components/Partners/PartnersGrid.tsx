import { partners } from "@/staticComponents/partners";

const PartnersGrid = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 py-6 md:py-12 px-6">
      {partners.map((partner) => (
        <a
          key={partner.name}
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={partner.name}
          className="flex flex-col items-center group"
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="h-16 max-w-[200px] object-contain filter grayscale group-hover:grayscale-0 transition duration-300 mb-2"
            loading="lazy"
          />
          <span className="text-sm text-neutral-500 mt-1 text-center truncate w-full opacity-80 group-hover:opacity-100 transition">{partner.name}</span>
        </a>
      ))}
    </div>
  );
  }

export default PartnersGrid;