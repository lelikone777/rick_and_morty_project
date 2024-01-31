import {baseUrl} from "@/constants";

export async function getLocations() {
    const response = await fetch(`${baseUrl}/location`);
    if (!response.ok) {
        throw new Error('Failed to fetch data getLocs');
    }
    const data = await response.json();
    return data.results;
}

export async function getLocation(locationId: string) {
    const response = await fetch(`${baseUrl}/location/${locationId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch data getLoc');
    }
    return await response.json();
}

