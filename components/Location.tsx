import { LocationModel } from "@/models/locations.model";
import { lastDigitsUrl } from "@/lib/utils";
import Link from "next/link";

const Location = ({
  location,
  detailed = false,
}: {
  location: LocationModel;
  detailed?: boolean;
}) => {
  const locationId = lastDigitsUrl(location.url);

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">
        <Link href={`/location/${locationId}`} className="underline">
          {location.name}
        </Link>
      </h2>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
      <p>Residents: {location.residents.length}</p>

      {detailed && location.residents.length > 0 && (
        <ul className="mt-2 flex flex-col gap-y-1">
          {location.residents.map((resident) => (
            <li key={resident}>
              <Link href={`/char/${lastDigitsUrl(resident)}`} className="underline">
                {resident}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Location;
