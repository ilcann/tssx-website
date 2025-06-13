import { ExternalLink } from "lucide-react";
import React from "react";
import "@/components/Reference/ClientSlider.css";

export type Client = {
  name: string;
  logo: string;
  url?: string;
  country?: string;
  logoType?: string;
};

interface ClientCardProps {
  client: Client;
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  const logoClass = `logo-image ${
    client.logoType === "light" ? "logo-light" : "logo-dark"
  }`;

  const content = (
    <>
      <div className="flex items-center justify-center h-16 w-24 rounded-xl bg-white/80 border border-gray-200 shadow-sm transition group-hover:shadow-md">
        <img
          src={client.logo}
          alt={client.name}
          className={`${logoClass} p-2 max-h-12`}
        />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="font-semibold truncate max-w-[120px] text-neutral-900">
          {client.name}
        </span>
        {client.country && (
          <span className="text-xs text-amber-700 mt-0.5">{client.country}</span>
        )}
      </div>
      {client.url && (
        <ExternalLink className="ml-1 h-4 w-4 opacity-60 group-hover:opacity-100 transition" />
      )}
    </>
  );

  return client.url ? (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl p-3 transition hover:bg-amber-50 hover:shadow-md cursor-pointer"
      aria-label={`Visit ${client.name} website`}
      title={`Visit ${client.name} website`}
    >
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 opacity-70 cursor-default shadow-sm">
      {content}
    </div>
  );
};

export default ClientCard;
