import { referenceLocations } from "@/staticComponents/reference";

const ReferenceClientList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-left">
      {referenceLocations.map((ref) => (
        <div key={ref.country}>
          <h4 className="font-bold text-neutral-900 mb-1">{ref.country}</h4>
          <ul className="space-y-1">
            {ref.clients.map((client) => (
              <li key={client.name} className="text-amber-600">
                {client.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ReferenceClientList;