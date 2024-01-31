export interface CharsModel {
    id: number;
    name: string;
    url: string;
}


export interface CharModel {
    id: string;
    name: string;
    url: string;
    image: string;
    status: string;
    species: string;
    gender: string;
    origin: {
        url: string;
        name: string;
    }
    location: {
        url: string;
        name: string;
    };
    episode: string[];
}