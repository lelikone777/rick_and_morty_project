import { baseUrl } from "@/constants";

export async function getEpisodes() {
  const firstPageResponse = await fetch(`${baseUrl}episode`, {
    cache: "no-store",
  });

  if (!firstPageResponse.ok) {
    throw new Error("Failed to fetch episodes");
  }

  const firstPageData = await firstPageResponse.json();
  const totalPages = firstPageData.info?.pages ?? 1;

  if (totalPages === 1) {
    return firstPageData.results;
  }

  const restPageRequests = Array.from({ length: totalPages - 1 }, (_, i) =>
    fetch(`${baseUrl}episode?page=${i + 2}`, { cache: "no-store" }),
  );

  const restPageResponses = await Promise.all(restPageRequests);
  const restPageData = await Promise.all(
    restPageResponses.map(async (response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch episodes page");
      }

      return response.json();
    }),
  );

  return [
    ...firstPageData.results,
    ...restPageData.flatMap((page) => page.results),
  ];
}

export async function getEpisode(episodeId: string) {
  const response = await fetch(`${baseUrl}episode/${episodeId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch episode");
  }

  return await response.json();
}
