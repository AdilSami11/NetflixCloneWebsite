import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { AllTVSeries } from "../Api/tmdb";
import { useNavigate } from "react-router-dom";

const TvShowsPage = () => {
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  const [sortBy, setSortBy] = useState("popularity.desc");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);

        const data = await AllTVSeries(page, sortBy);
        setShows((prev) => [...prev, ...data]);

        setLoader(false);
      } catch (error) {
        console.error(error);
        setLoader(false);
      }
    };

    fetchData();
  }, [page, sortBy]);

  // reset when filter changes
  useEffect(() => {
    setShows([]);
    setPage(1);
  }, [sortBy]);

  return (
    <>
      <Navbar />

      <div className="main-tv-shows-wrapper">
        <div className="sorting-wrapper">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="popularity.desc">Most Popular</option>
            <option value="vote_average.desc">Top Rated</option>
            <option value="first_air_date.desc">Newest</option>
          </select>
        </div>
        {loader && shows.length === 0 ? (
          <h1 style={{ color: "#fff", textAlign: "center" }}>Loading...</h1>
        ) : (
          <>
            <div className="shows-title-wrapper">
              <h1>TV Shows</h1>
            </div>
            <div className="container">
              <div className="tv-shows-cards-wrapper">
                {shows.map((show) => (
                  <img
                    key={show.id}
                    src={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
                    alt={show.name}
                    onClick={() => navigate(`/show/${show.id}`)}
                  />
                ))}
              </div>

              <div className="load-more-btn">
                <button onClick={() => setPage((prev) => prev + 1)}>
                  Load More
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TvShowsPage;
