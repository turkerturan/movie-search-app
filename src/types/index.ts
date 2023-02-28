

export interface MovieState {
    movieList: MovieItem[]
    selectedMovie?: MovieItem
    favoriteList: MovieItem[]
}


export const initialState: MovieState = {
    movieList: [],
    selectedMovie: undefined,
    favoriteList: []
}


export interface MovieItem {
    id: string
    title: string
    vote: number
    poster: string
    summary: string
    date: string
}