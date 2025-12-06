export interface IMovie {
    id: string;
    title: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    release_date: string;
    overview: string;
    genres: { id: number; name: string }[];
    homepage: string;
}

export interface IMovieDetail extends IMovie {
    tagline: string;
    vote_count: number;
    original_title: string;
    status: string;
    runtime: number;
    production_countries: { iso_3166_1: string; name: string }[];
    spoken_languages: { iso_639_1: string; english_name: string }[];
    imdb_id: string;
}

export interface ICredit {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
}

export interface IVideo {
    id: string;
    key: string;
    name: string;
    site: string;
    type: string;
}

export interface IProvider {
    provider_id: number;
    provider_name: string;
    logo_path: string;
}

export interface IProvidersResponse {
    link: string;
    flatrate?: IProvider[];
    rent?: IProvider[];
    buy?: IProvider[];
    [key: string]: any;
}
