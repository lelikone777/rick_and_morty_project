import { CharModel } from "@/models/chars.model";
import Image from "next/image";
import Link from "next/link";
import { lastDigitsUrl } from "@/lib/utils";

const Char = ({ char }: { char: CharModel }) => {
  return (
    <div>
      <Image src={char.image} alt={char.name} width={200} height={200} />
      <div>name: {char.name}</div>
      <div>status: {char.status}</div>
      <div>species: {char.species}</div>
      <div>gender: {char.gender}</div>
      <div>
        origin:{" "}
        <Link href={`/location/${lastDigitsUrl(char.origin.url)}`}>
          {char.origin.name}
        </Link>
      </div>
      <div>
        location:{" "}
        <Link href={`/location/${lastDigitsUrl(char.location.url)}`}>
          {char.location.name}
        </Link>
      </div>
      <ul>
        {char.episode.map((episode) => (
          <li key={char.id}>
            {" "}
            <Link href={`/episode/${lastDigitsUrl(episode)}`}>Episodes</Link>
          </li>
        ))}
      </ul>
      <div>
        <Link href="/">Back</Link>
      </div>
    </div>
  );
};

export default Char;
