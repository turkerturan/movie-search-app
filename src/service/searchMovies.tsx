import { MovieItem } from "../types"


export async function searchMovies(query: string): Promise<MovieItem[] | undefined> {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`)

        const data = await response.json()

        return data.results.map((item: any) => {
            return {
                id: item.id,
                title: item.title,
                vote: Math.round(item.vote_average),
                poster: `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`,
                summary: item.overview,
                date: item.release_date
            }
        })
    } catch (error) {
        console.log(error)
    }
}   