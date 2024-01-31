import Location from "@/components/Location";
import {getLocation} from "@/actions/locations.action";

const Page = async ({params} : {params: {id: string}}) => {
    const location = await getLocation(params.id);
    return (
        <div><Location location={location}/></div>
    );
}

export default Page;