import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img className="" src={BG_URL} alt="background-pic" />
      </div>
      {/* GPT Search Bar */}
      <GptSearchBar />
      {/* GPT Movie Suggestions */}
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
