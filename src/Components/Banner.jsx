import { fetchPopularMovies } from "../Api/tmdb";
import { useState, useEffect } from "react";
import { IoIosPlay } from "react-icons/io";
import { CiCircleAlert } from "react-icons/ci";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPopularMovies();

        if (!data || data.length === 0) return;

        const randomMovie = data[Math.floor(Math.random() * data.length)];

        setMovie(randomMovie);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //   if (loading) {
  //     return (
  //       <div className="banner-skeleton">
  //         <div className="spinner"></div>
  //       </div>
  //     );
  //   }

  return (
    <div
      className="main-banner-wrapper"
      style={{
        backgroundImage: movie
          ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          : "none",
      }}
    >
      {loading ? (
        <div className="banner-skeleton">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="banner-content">
          <h1>{movie.title || movie.name}</h1>
          <p>{movie.overview?.slice(0, 150)}...</p>
          <div className="banner-btns">
            <button>
              <IoIosPlay size={20} />
              Play
            </button>
            <button>
              <CiCircleAlert size={20} />
              More Info
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
