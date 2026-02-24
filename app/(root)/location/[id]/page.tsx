import Location from "@/components/Location";
import { getLocation } from "@/actions/locations.action";

const Page = async ({ params }: { params: { id: string } }) => {
  const location = await getLocation(params.id);

  return (
    <div className="container py-8">
      <Location location={location} detailed />
    </div>
  );
};

export default Page;
