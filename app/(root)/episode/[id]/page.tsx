import { getEpisode } from "@/actions/episodes.action";
import Episode from "@/components/Episode";

const Page = async ({ params }: { params: { id: string } }) => {
  const episode = await getEpisode(params.id);

  return (
    <div className="container py-8">
      <Episode episode={episode} />
    </div>
  );
};

export default Page;
