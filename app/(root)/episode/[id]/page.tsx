import {getLocation} from "@/actions/locations.action";
import Location from "@/components/Location";
import Episode from "@/components/Episode";

const Page = async ({params} : {params: {id: string}}) => {
    const episode = await getLocation(params.id);
    return (
        <div><Episode episode={episode}/></div>
    );
}

export default Page;