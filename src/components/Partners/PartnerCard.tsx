interface Partner {
  name: string;
  logo: string;
  url?: string;
}

const PartnerCard: React.FC<{ partner: Partner }> = ({ partner }) => {
  const content = (
    <div className="flex flex-col items-center justify-center h-40 w-56 bg-amber-50/80 rounded-2xl shadow-lg p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-16 object-contain mb-3"
        loading="lazy"
      />
      <span className="text-base font-semibold text-neutral-800 mt-1 truncate w-full text-center">
        {partner.name}
      </span>
    </div>
  );

  return partner.url ? (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={partner.name}
      className="focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 focus-visible:ring-offset-2 rounded-2xl transition"
    >
      {content}
    </a>
  ) : (
    content
  );
};

export default PartnerCard; 