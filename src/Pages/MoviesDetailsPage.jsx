import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import Banner from "../Components/Banner";
import { IoIosPlay } from "react-icons/io";
import { RiMovie2AiLine } from "react-icons/ri";
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
      console.log(data);
      setMovie(data);
      setLoader(false);
    }
    fetchingMovie();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="movie-details-main-wrapper">
        {loader ? (
          <h1 style={{ color: "#fff", textAlign: "center" }}>Laoding ....</h1>
        ) : (
          <>
            <div
              className="movie-img-wrapper"
              style={{
                backgroundImage: movie
                  ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                  : "Error",
              }}
            >
              <div className="movie--banner--details">
                <h2>{movie?.original_title || "movie-title"}</h2>
                <p>{movie.overview?.slice(0, 150) || "Moview_Overview"}...</p>
                <div className="action--btns">
                  <button>
                    <IoIosPlay size={20} />
                    Play
                  </button>
                  <button>
                    <RiMovie2AiLine size={20} />
                    My List
                  </button>
                </div>
              </div>
            </div>
            <div className="about-movie-info">
              <p>⭐ Ratings : {movie?.vote_average || "not Available"}</p>
              <p>📅 Release Date : {movie?.release_date || "..."}</p>
              <p>🔥Popularity : {movie?.popularity}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MoviesDetailsPage;
