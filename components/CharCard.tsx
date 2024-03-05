import Image from "next/image";
import Link from "next/link";
const CharCard = ({ char }: { char: any }) => {
  return (
    <Link href={`/char/${char.id}`}>
      <div className=" relative h-[460px] w-full">
        <Image
          src={char.image}
          alt={`${char.name} image`}
          fill={true}
          className="rounded object-cover"
        />
      </div>
      <div className="max-xs:px-4">
        <p className="text-2xl">{char.name}</p>
        <p className="text-xl opacity-60">{char.species}</p>
      </div>
    </Link>
  );
};

export default CharCard;
