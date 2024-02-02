import Image from "next/image";
const CharCard = ({ char }: { char: any }) => {
  return (
    <>
      <div className=" relative h-[460px] w-full">
        <Image
          src={char.image}
          alt={`${char.name} image`}
          fill={true}
          className="object-cover"
        />
      </div>
      <p className="text-2xl">{char.name}</p>
    </>
  );
};

export default CharCard;
