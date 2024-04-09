import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageContant";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    // Make an api call to GPT Api and get Movie results
    const gptQuery =
      "Act as a Movie recommendation system and suggest 5 movies(in comma seperated names," +
      "do not add bullets/numbers as sequence) for the query :" +
      searchText.current.value;
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = (gptResults.choices?.[0]?.message.content).split(",");

    // For each movie, I will search TMDB api for the details
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json?.results;
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[selectedLanguage].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
