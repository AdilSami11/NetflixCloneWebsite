import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { AllMovies } from "../Api/tmdb";
import { useNavigate } from "react-router-dom";

const AllMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AllMovies(page);
        setMovies((prev) => [...prev, ...data]);
        setLoader(false);
      } catch (error) {
        console.error(error);
        setLoader(true);
      }
    };
    fetchData();
  }, [page]);
  return (
    <>
      <Navbar />
      <div className="movies-main-wrapper">
        {loader ? (
          <h1 style={{ color: "#fff", textAlign: "center" }}>Laoding</h1>
        ) : (
          <div>
            <div className="movies--page--title">
              <h2>All Movies</h2>
            </div>
            <div className="container">
              <div className="movies-cards-wrapper">
                {movies.map((movie) => (
                  <img
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    onClick={() => navigate(`/movie/${movie.id}`)}
                  />
                ))}
              </div>
              <div className="load-more-btn">
                <button onClick={() => setPage((prev) => prev + 1)}>
                  Load More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllMoviesPage;
