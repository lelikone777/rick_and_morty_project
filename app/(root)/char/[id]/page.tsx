import {getChar} from "@/actions/chars.action";
import Char from "@/components/Char";

const Page = async ({params} : {params: {id: string}}) => {
    const char = await getChar(params.id);
    return (
        <div><Char char={char}/></div>
    );
}

export default Page;