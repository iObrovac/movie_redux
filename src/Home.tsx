import React, { useEffect } from "react";
import Nav from "./Nav";

import type { RootState } from "./state/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./state/counterReducer";
import { getBatmanMovies } from "./Services";
import { setMovies } from "./state/movieReducer";
import { Link } from "react-router-dom";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const movies = useSelector((state: RootState) => state.movies.value);
  const dispatch = useDispatch();

  useEffect(() => {
    getBatmanMovies().then((res) => {
      console.log(res);
      const movieList = res.data.Search;
      dispatch(setMovies(movieList));
    });
  }, []);

  return (
    <div>
      <Nav />
      <h1>HOME</h1>
      <hr />
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
      <hr />
      {movies?.map((movie) => (
        <div key={movie.imdbID}>
          <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
        </div>
      ))}
    </div>
  );
}
