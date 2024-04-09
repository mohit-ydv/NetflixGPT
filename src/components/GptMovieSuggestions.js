import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;
  if (!movieNames) return "No movies found!";
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      <div>
        {movieNames.map((movie, i) => (
          <MovieList key={movie} title={movie} movies={movieResults[i]} />
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestions;
