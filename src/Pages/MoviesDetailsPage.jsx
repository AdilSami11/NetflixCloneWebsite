import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
const MoviesDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(true);
  const API_KEY = "423dede6cb36563e80395b665b2c2f24";

  // useEffect - fetching movie by Selected id:
  useEffect(() => {
    async function fetchingMovie() {
      setLoader(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
      );
      console.log(res);
      const data = await res.json();
      setMovie(data);
      setLoader(false);
    }
    fetchingMovie();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="movie-details-main-wrapper">
        <div className="movie-details-main-wrapper">
          {loader ? (
            "loading....."
          ) : (
            <div>
              <p>⭐ {movie?.vote_average || "not Available"}</p>
              <p>📅 {movie?.release_date || "..."}</p>
              <p>🔥 {movie?.popularity}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MoviesDetailsPage;
