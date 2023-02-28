import React, { useState } from 'react'
import Header from '../Components/Header'
import MovieCard from '../Components/MovieCard'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../service/searchMovies';
import { MovieItem } from '../types';
import { setMovieList } from '../redux/movieSlice';
import { RootState } from '../redux/store';

export default function SearchPage() {

    const [query, setQuery] = useState("")

    const dispatch = useDispatch()

    const movieList = useSelector((state: RootState) => state.movies.movieList)

    async function onSearch() {
        const list = await searchMovies(query)
        dispatch(setMovieList(list || []))
    }

    const welcome = <h1 style={{ fontFamily: 'serif', fontSize: 50, textAlign: 'center', margin: 60 }}>Welcome to MOVIEW</h1>


    return (
        <div>
            <Header />
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, maxWidth: '100ch', display: 'flex', margin: 'auto', marginTop: 6 },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-controlled"
                    label="Search a movie"
                    value={query}
                    placeholder=""
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setQuery(event.target.value);

                    }}
                    onKeyDown={event => {
                        if (event.key === "enter") { onSearch() }
                    }}
                />
                <Button variant="outlined" sx={{ fontSize: 15 }} startIcon={<SearchIcon />} onClick={onSearch} >Search</Button>
            </Box>
            <span style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                <ol>
                    {movieList.length ? movieList.map((item: MovieItem) => <MovieCard key={item.id} item={item} />) : welcome}
                </ol>
            </span>
        </div>
    )
}
