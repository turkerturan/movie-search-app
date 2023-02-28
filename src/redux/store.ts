import { configureStore } from '@reduxjs/toolkit';
import { movieSlice } from './movieSlice';

export const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>