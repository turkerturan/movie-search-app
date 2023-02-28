import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import MovieCard from '../Components/MovieCard'
import { RootState } from '../redux/store'
import { MovieItem } from '../types'

export default function FavoritePage() {

    let favoriteMovies = useSelector((state: RootState) => state.movies.favoriteList)

    let blankText = <h3 style={{ textAlign: 'center', fontSize: 50, fontFamily: 'fantasy' }}><Link to={"/"} style={{ textDecoration: 'none', color: 'black' }}>Search now and create your best list!</Link></h3>

    return (
        <div>
            <Header />
            {favoriteMovies.length ? <h1 style={{ display: 'block', margin: 40, textAlign: 'center', fontFamily: 'serif', fontSize: 50 }}>Your Favorite List</h1> : null}
            {favoriteMovies.length ? favoriteMovies.map((item: MovieItem) => <MovieCard key={item.id} item={item} />) : blankText}
        </div>
    )
}
