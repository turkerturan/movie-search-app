import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, MovieItem } from "../types";

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovieList(state, action: PayloadAction<MovieItem[]>) {
            state.movieList = action.payload
        },
        addToFavorite(state, action: PayloadAction<MovieItem>) {
            //            for (let i = 0; i < state.favoriteList.length; i++) {
            //                if (action.payload.id === state.favoriteList[i].id) {
            //                    state.favoriteList = state.favoriteList.filter(item => item.id !== action.payload.id)
            //                } else {
            state.favoriteList.push(action.payload)
            //                }
            //            }
        },
        selectMovie(state, action: PayloadAction<MovieItem>) {
            state.selectedMovie = action.payload
        }
    }
})

export const { setMovieList, addToFavorite, selectMovie } = movieSlice.actions