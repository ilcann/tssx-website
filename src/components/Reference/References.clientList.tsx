import React from "react";
import ClientCard from "@/components/Reference/ClientCard";
import { referenceLocations } from "@/staticComponents/reference";

const allClients = referenceLocations.flatMap((loc) =>
  loc.clients.map((client) => ({
    ...client,
    country: loc.country,
  }))
);

const ReferencesClientList: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-2 sm:p-4 md:p-6">
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
