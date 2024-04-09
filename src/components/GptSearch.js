import { BG_IMAGE } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img alt="logo" src={BG_IMAGE} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};
export default GptSearch;
