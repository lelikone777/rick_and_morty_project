"use client";

import { useEffect, useState } from "react";
import { getEpisodes } from "@/actions/episodes.action";
import { EpisodeModel } from "@/models/episodes.model";
import Episode from "@/components/Episode";

const Page = () => {
  const [episodes, setEpisodes] = useState<EpisodeModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const episodesData = await getEpisodes();
      setEpisodes(episodesData ?? []);
      setIsLoading(false);
    };

    fetchEpisodes().then();
  }, []);

  return (
    <section className="container py-8">
      <h1 className="mb-6 text-3xl font-bold">Episodes</h1>

      {isLoading ? (
        <p>Loading episodes...</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {episodes.map((episode) => (
            <li
              key={episode.id}
              className="rounded-md border border-input bg-card p-4 text-card-foreground"
            >
              <Episode episode={episode} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Page;
