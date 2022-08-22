import axios from "axios";

export const baseURL = "http://www.omdbapi.com/?apikey=67e6aeeb&";

export const batmanURL = baseURL + "s=batman";

export const getBatmanMovies = () => {
  return axios.get(batmanURL);
};

export const getMovie = (movieId: string) => {
  return axios.get(baseURL + "i=" + movieId);
};
