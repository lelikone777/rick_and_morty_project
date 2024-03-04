import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const CharCard = ({ char }: { char: any }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <div className="relative h-[460px] w-full">
            <Image
              src={char.image}
              alt={`${char.name} image`}
              fill={true}
              className="object-cover"
            />
          </div>
        </CardHeader>
        <CardFooter>
          <p className=" text-2xl">{char.name}</p>
          <p className={char.species}></p>
        </CardFooter>
      </Card>
    </>
  );
};

export default CharCard;
