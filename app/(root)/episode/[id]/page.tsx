import { getEpisode } from "@/actions/episodes.action";
import Episode from "@/components/Episode";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const episode = await getEpisode(id);

  return (
    <div className="container py-8">
      <Episode episode={episode} />
    </div>
  );
};

export default Page;
