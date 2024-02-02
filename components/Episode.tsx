import { EpisodeModel } from "@/models/episodes.model";
import Link from "next/link";
import { lastDigitsUrl } from "@/lib/utils";

const Episode = ({ episode }: { episode: EpisodeModel }) => {
  return (
    <>
      <div>
        <div>{episode.name}</div>
        <div>air_date: {episode.air_date}</div>
        <div>
          episode:
          <Link href={`/episode/${lastDigitsUrl(episode.url)}`}>
            {episode.episode}
          </Link>
        </div>
        <div>characters {episode.characters}</div>
      </div>
    </>
  );
};

export default Episode;
