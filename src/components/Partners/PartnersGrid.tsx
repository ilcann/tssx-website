const partners = [
  { name: "bmc", logo: "/img/partners/bmc.svg" , url: "https://www.bmc.com/"},
  { name: "GitLab", logo: "/img/partners/gitlab.png" , url: "https://about.gitlab.com/"},
  { name: "Ridge Security", logo: "/img/partners/ridge_security.jpeg" , url: "https://ridgesecurity.ai/"},
  { name: "DEVICE42", logo: "/img/partners/device42.webp" , url: "https://www.device42.com/"},
  { name: "HashiCorp", logo: "/img/partners/hashicorp.svg" , url: "https://www.hashicorp.com/en"},
  { name: "Zabbix", logo: "/img/partners/zabbix.png" , url: "https://www.zabbix.com/"},
];

const PartnersGrid = () => (
  <div className="w-full flex justify-center items-center pt-2">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 gap-x-8">
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
            className="h-16 max-w-[120px] object-contain filter grayscale group-hover:grayscale-0 transition duration-300 mb-2"
            loading="lazy"
          />
          <span className="text-sm text-neutral-500 mt-1 text-center truncate w-full opacity-80 group-hover:opacity-100 transition">{partner.name}</span>
        </a>
      ))}
    </div>
  </div>
);

export default PartnersGrid; 