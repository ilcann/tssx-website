import React from "react";
import ClientCard from "@/components/Shared/ClientSlider/ClientCard";
import { referenceLocations } from "@/staticComponents/reference";

const allClients = referenceLocations.flatMap((loc) =>
  loc.clients.map((client) => ({
    ...client,
    country: loc.country,
  }))
);

const ReferencesClientList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 sm:p-2 md:p-4">
      {allClients.map((client) => (
        <ClientCard
          key={client.name + client.country}
          client={{
            name: client.name,
            logo: client.logo,
            url: client.link,
            country: client.country,
            logoType: client.logoType,
          }}
        />
      ))}
    </div>
  );
};

export default ReferencesClientList;
