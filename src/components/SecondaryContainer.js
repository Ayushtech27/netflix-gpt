import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const langKey = useSelector((store) => store.config.lang);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          <MovieList
            title={lang[langKey].NOW_PLAYING}
            movies={movies.nowPlayingMovies}
          />
          <MovieList
            title={lang[langKey].TOP_RATED_MOVIES}
            movies={movies.topRatedMovies}
          />
          <MovieList
            title={lang[langKey].POPULAR}
            movies={movies.popularMovies}
          />
          <MovieList
            title={lang[langKey].UPCOMING_MOVIES}
            movies={movies.upcomingMovies}
          />
        </div>
        {/* 
      MonvieList - Popular
        - MovieCard * n
      MovieList - Trending
      MovieList - NowPlaying
      MovieList - Horror
     */}
      </div>
    )
  );
};
export default SecondaryContainer;
