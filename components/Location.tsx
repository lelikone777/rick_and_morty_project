import {LocationModel} from "@/models/locations.model";
import {lastDigitsUrl} from "@/lib/utils/utils";
import Link from "next/link";

const Location = ({location}: {location: LocationModel}) => {
    return (
        <div>
            <h1>{location.name}</h1>
            <p>{location.type}</p>
            <p>{location.dimension}</p>
            <ul className='flex flex-col'>

                    {location.residents.map((resident) => {
                        return <li> <Link href={`/char/${lastDigitsUrl(resident)}`}>{resident}</Link> </li>;
                    })}
            </ul>

        </div>
    );
}

export default Location;