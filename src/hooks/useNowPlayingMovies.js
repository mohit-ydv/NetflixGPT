import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovieList = async () => {
    const response = await fetch(
      "https://try.readme.io/https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    // if (!nowPlayingMovies) getNowPlayingMovieList();
    // OR
    !nowPlayingMovies && getNowPlayingMovieList();
  }, []);
};
export default useNowPlayingMovies;
