import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MovieItem } from "../types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavorite, selectMovie } from "../redux/movieSlice";

export default function MovieCard(props: { item: MovieItem }) {

    let movie = props.item

    const dispatch = useDispatch()


    return (
        <>
            < Card
                sx={{ maxWidth: 345, minWidth: 345, maxHeight: 800, marginLeft: 10, marginBottom: 7, display: "inline-block" }}
                onClick={() => dispatch(selectMovie(movie))}
            >
                <Link to={"/details"} style={{ textDecoration: 'none', color: 'black' }}>
                    <CardHeader
                        title={movie.title}
                        subheader={movie.date}
                    />
                    <CardMedia
                        component="img"
                        height="550"
                        width="100"
                        image={movie.poster}
                        alt={movie.title}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" noWrap>
                            {movie.summary}
                        </Typography>
                    </CardContent>
                </Link>
                <CardActions disableSpacing sx={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
                    <IconButton aria-label="add to favorites" onClick={() => dispatch(addToFavorite(movie))}>
                        <FavoriteIcon />
                    </IconButton>
                    <Typography sx={{ fontFamily: 'fantasy' }}>
                        Rating:{movie.vote}
                    </Typography>
                </CardActions>
            </Card>
        </>
    );
}
