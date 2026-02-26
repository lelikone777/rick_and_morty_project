import {getChar} from "@/actions/chars.action";
import Char from "@/components/Char";

const Page = async ({params} : {params: Promise<{id: string}>}) => {
    const {id} = await params;
    const char = await getChar(id);
    return (
        <div><Char char={char}/></div>
    );
}

export default Page;
