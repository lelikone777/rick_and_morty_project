import { baseUrl } from "@/constants";

export async function getLocations() {
  const firstPageResponse = await fetch(`${baseUrl}location`, {
    cache: "no-store",
  });

  if (!firstPageResponse.ok) {
    throw new Error("Failed to fetch locations");
  }

  const firstPageData = await firstPageResponse.json();
  const totalPages = firstPageData.info?.pages ?? 1;

  if (totalPages === 1) {
    return firstPageData.results;
  }

  const restPageRequests = Array.from({ length: totalPages - 1 }, (_, i) =>
    fetch(`${baseUrl}location?page=${i + 2}`, { cache: "no-store" }),
  );

  const restPageResponses = await Promise.all(restPageRequests);
  const restPageData = await Promise.all(
    restPageResponses.map(async (response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch locations page");
      }

      return response.json();
    }),
  );

  return [
    ...firstPageData.results,
    ...restPageData.flatMap((page) => page.results),
  ];
}

export async function getLocation(locationId: string) {
  const response = await fetch(`${baseUrl}location/${locationId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch location");
  }

  return await response.json();
}
