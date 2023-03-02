import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, MovieItem } from "../types";

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovieList(state, action: PayloadAction<MovieItem[]>) {
            state.movieList = action.payload
        },
        toggleFavorite(state, action: PayloadAction<MovieItem>) {
            const index = state.favoriteList.findIndex(item => item.id === action.payload.id)
            if (index > -1) {
                state.favoriteList.splice(index, 1)
            } else {
                state.favoriteList.push(action.payload)
            }
        },
        selectMovie(state, action: PayloadAction<MovieItem>) {
            state.selectedMovie = action.payload
        }
    }
})

export const { setMovieList, toggleFavorite, selectMovie } = movieSlice.actions