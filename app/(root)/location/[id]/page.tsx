import Location from "@/components/Location";
import { getLocation } from "@/actions/locations.action";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const location = await getLocation(id);

  return (
    <div className="container py-8">
      <Location location={location} detailed />
    </div>
  );
};

export default Page;
