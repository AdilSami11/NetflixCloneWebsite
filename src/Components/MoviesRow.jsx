import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const MoviesRow = ({ title, fetchingApi }) => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchingApi();

        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [fetchingApi]);

  return (
    <div className="main-row-wrapper">
      <h2 style={{ marginLeft: "25px", color: "#fff" }}>{title}</h2>
      <div className="movies_row_wrapper">
        {movies.map((movie) => (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            key={movie.id}
            onClick={() => navigation(`/movie/${movie.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesRow;
