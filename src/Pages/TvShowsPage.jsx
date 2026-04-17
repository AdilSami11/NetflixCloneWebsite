import React from "react";
import Navbar from "../Components/Navbar";
import { AllTVSeries } from "../Api/tmdb";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const TvShowsPage = () => {
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      try {
        const data = await AllTVSeries(page);
        setShows((prev) => [...prev, ...data]);
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
      <div className="main-tv-shows-wrapper">
        {loader ? (
          <h1 style={{ color: "#fff", textAlign: "center" }}>Loading....</h1>
        ) : (
          <>
            <div className="shows-title-wrapper">
              <h1>Tv Shows</h1>
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
