import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Header from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Button } from "@mui/material";
import { toggleFavorite } from "../redux/movieSlice";

export default function MovieDetailsPage() {

  const selectedMovie = useSelector((state: RootState) => state.movies.selectedMovie)

  const dispatch = useDispatch()

  return (

    <>
      <Header />
      <Card sx={{ display: "flex", alignItems: "center", margin: "auto", border: 'none' }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto", marginLeft: 10 }}>
            <Typography component="div" variant="h3" sx={{ textAlign: 'center', fontFamily: 'fantasy', color: 'black', fontSize: 100 }}>
              {selectedMovie?.title}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              component="div"
              sx={{ margin: 15 }}
            >
              {selectedMovie?.summary}
            </Typography>
          </CardContent>
          {selectedMovie ? <Button sx={{ fontFamily: 'serif', fontSize: 20 }} onClick={() => dispatch(toggleFavorite(selectedMovie))}>Add to favorite </Button> : null}
        </Box>
        <CardMedia
          component="img"
          sx={{ minwidth: 400, maxWidth: 400, margin: 15 }}
          image={selectedMovie?.poster}
          alt={selectedMovie?.title}
        />
      </Card>
    </>

  );
}
