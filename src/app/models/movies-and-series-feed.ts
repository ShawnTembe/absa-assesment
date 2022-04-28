export interface MoviesAndSeriesFeed {
    total: number;
    entries: Entries[];
}

export interface Entries {
    title: string;
    description: string;
    programType: string;
    images: PosterArt;
    releaseYear: number;
}

export interface PosterArt {
    url: string;
    width: number;
    height: number;
}

