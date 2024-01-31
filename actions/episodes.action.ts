import {baseUrl} from "@/constants";

export async function getEpisodes() {
    const response = await fetch(`${baseUrl}/episode`);
    if (!response.ok) {
        throw new Error('Failed to fetch data getLocs');
    }
    const data = await response.json();
    return data.results;
}

export async function getEpisode(episodeId: string) {
    const response = await fetch(`${baseUrl}/episode/${episodeId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch data getLoc');
    }
    return await response.json();
}

