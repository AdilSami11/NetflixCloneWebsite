import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import { IoIosPlay } from "react-icons/io";
import { GoPlus } from "react-icons/go";

const TvShowDetailPage = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loader, setLoader] = useState(true);
  const API_KEY = "423dede6cb36563e80395b665b2c2f24";

  // useEffect - fetching movie by Selected id:
  useEffect(() => {
    async function fetchingTvSeries() {
      setLoader(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`,
      );
      console.log(res);
      const data = await res.json();
      console.log(data);
      setShow(data);
      setLoader(false);
    }
    fetchingTvSeries();
  }, [id]);
  return (
    <>
      <Navbar />
      <div className="show-detail-main-wrapper">
        {loader ? (
          <h1 style={{ color: "#fff", textAlign: "center" }}>
            Please Wait Fetching ....
          </h1>
        ) : (
          <>
            <div
              className="show-main-banner-wrapper"
              style={{
                backgroundImage: show
                  ? `url(https://image.tmdb.org/t/p/original${
                      show.backdrop_path
                    })`
                  : "none",
              }}
            >
              <div className="show-banner-details-wrapper">
                <h1>{show.original_name}</h1>
                <p>
                  <span>⭐{show?.vote_average || "NuN"}</span> |
                  <span>{show?.first_air_date || "NuN"}</span> |
                  <span>
                    {show.genres?.map((g) => g.name).join(" ● ") ||
                      "Not Available"}
                  </span>
                </p>
                <p className="show-overview">
                  {show.overview?.slice(0, 150)}...
                </p>
                <div className="show-banner-btns">
                  <button>
                    <IoIosPlay size={20} />
                    Play
                  </button>
                  <button>
                    <GoPlus size={20} />
                    Watchlist
                  </button>
                </div>
              </div>
            </div>

            {/* show info Wrapper */}
            <div className="show-info-wrapper">
              <p>🎭Status : {show.status}</p>
              <p>📅 First air date : {show.first_air_date}</p>
              <p>📅 Last air date : {show.last_air_date}</p>
              <p>🌍 Language : {show?.languages || "NuN"}</p>
              <p>🏳️ Country : {show?.origin_country || "Not Available"}</p>
            </div>
            {/* poster + info wrapper */}
            <div className="poster-info-wrapper">
              <div className="poster-img-wrap">
                <img
                  src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                  alt={show.original_name}
                />
              </div>
              <div className="poster-detail-wrap">
                <div className="name__rating_wrap">
                  <h2>{show.original_name}</h2>
                  <p className="review-stars">
                    ⭐ {show.vote_average?.toFixed(1)}
                  </p>
                </div>
                <p className="show-overview">
                  <strong>Overview:</strong> <br />
                  {show.overview || "No description available for this show."}
                </p>
                <p className="seasons">Seasons : {show.number_of_seasons}</p>
                <p className="episodes">Episodes : {show.number_of_episodes}</p>

                {show.created_by?.length > 0 && (
                  <p className="creator">
                    <strong>Created by: </strong>{" "}
                    {show.created_by
                      ?.map((c) => c.name || "Not Available")
                      .join(", ")}
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TvShowDetailPage;
