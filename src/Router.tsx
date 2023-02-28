import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import FavoritePage from './Pages/FavoritePage'
import MovieDetailsPage from './Pages/MovieDetailsPage'
import SearchPage from './Pages/SearchPage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <SearchPage />
    },
    {
        path: "/details",
        element: <MovieDetailsPage />
    },
    {
        path: "/favorites",
        element: <FavoritePage />
    }
]);

export default function Router() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}