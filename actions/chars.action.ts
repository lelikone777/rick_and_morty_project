import {baseUrl} from "@/constants";

export async function getChars() {
    const requests = Array.from({ length: 42 }, (_, i) =>
        fetch(`${baseUrl}/character/?page=${i + 1}`)
    );

    const responses = await Promise.all(requests);

    const data = await Promise.all(
        responses.map(async (response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch data from getChars');
            }
            return response.json();
        })
    );

    // Combine results from all pages into a single array
    const combinedResults = data.reduce(
        (accumulator, current) => accumulator.concat(current.results),
        []
    );

    return combinedResults;
}


export async function getChar(charId: string) {
    const response = await fetch(`${baseUrl}/character/${charId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch data getChar');
    }
    return await response.json();
}

