"use client";

import { useEffect, useState } from "react";
import { getLocations } from "@/actions/locations.action";
import { LocationModel } from "@/models/locations.model";
import Location from "@/components/Location";

const Page = () => {
  const [locations, setLocations] = useState<LocationModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      const locationsData = await getLocations();
      setLocations(locationsData ?? []);
      setIsLoading(false);
    };

    fetchLocations().then();
  }, []);

  return (
    <section className="container py-8">
      <h1 className="mb-6 text-3xl font-bold">Locations</h1>

      {isLoading ? (
        <p>Loading locations...</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <li
              key={location.id}
              className="rounded-md border border-input bg-card p-4 text-card-foreground"
            >
              <Location location={location} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Page;
