import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import MoviesRow from "../Components/MoviesRow";
import {
  fetchPopularMovies,
  fetchTrendingMovies,
  fetchTopRatedMovies,
  fetchActionMovies,
  fetchComedyMovies,
} from "../Api/tmdb";
const MainNetflixPage = () => {
  return (
    <div>
      <>
        <Navbar />
        <Banner />
        <MoviesRow title={"Popular Movies"} fetchingApi={fetchPopularMovies} />
        <MoviesRow title={"Trending"} fetchingApi={fetchTrendingMovies} />
        <MoviesRow title={"Top Rated"} fetchingApi={fetchTopRatedMovies} />
        <MoviesRow title={"Action Movies"} fetchingApi={fetchActionMovies} />
        <MoviesRow title={"Comeday Movies"} fetchingApi={fetchComedyMovies} />
      </>
    </div>
  );
};

export default MainNetflixPage;
