import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import { getMovie } from "./Services";
import { setCurrentMovie } from "./state/movieReducer";
import { RootState } from "./state/store";

export default function Movie() {
  const { movieID } = useParams();
  const currentMovie = useSelector(
    (state: RootState) => state.movies.currentMovie
  );

  const dispatch = useDispatch();

  console.log(currentMovie);
  // console.log(movieID);

  useEffect(() => {
    if (movieID) {
      getMovie(movieID).then((res) => {
        const movieData = res.data;

        dispatch(setCurrentMovie(movieData));
      });
    }

    return () => {
      dispatch(setCurrentMovie(undefined));
    };
  }, []);

  return (
    <div>
      <Nav />
      <h1>MOVIE</h1>
      <h3>{currentMovie?.Title}</h3>
      <img src={currentMovie?.Poster} alt="" />
      <h3>{currentMovie?.Year}</h3>
    </div>
  );
}
