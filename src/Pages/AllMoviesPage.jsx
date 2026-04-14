import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { AllMovies } from "../Api/tmdb";

const AllMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AllMovies(page);

        setMovies((prev) => [...prev, ...data]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [page]);
  return (
    <>
      <Navbar />
      <div className="movies-main-wrapper">
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
    </>
  );
};

export default AllMoviesPage;
