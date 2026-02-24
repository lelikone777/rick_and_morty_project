import { EpisodeModel } from "@/models/episodes.model";
import Link from "next/link";
import { lastDigitsUrl } from "@/lib/utils";

const Episode = ({ episode }: { episode: EpisodeModel }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">{episode.name}</h2>
      <p>Air date: {episode.air_date}</p>
      <p>
        Episode: {" "}
        <Link href={`/episode/${lastDigitsUrl(episode.url)}`} className="underline">
          {episode.episode}
        </Link>
      </p>
      <p>Characters in episode: {episode.characters.length}</p>
    </div>
  );
};

export default Episode;
