import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import { IoIosPlay } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import DetailPoster from "../Components/DetailPoster";

const TvShowDetailPage = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loader, setLoader] = useState(true);

  const API_KEY = "423dede6cb36563e80395b665b2c2f24";

  useEffect(() => {
    async function fetchTvSeries() {
      setLoader(true);

      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`,
      );

      const data = await res.json();
      setShow(data);
      setLoader(false);
    }

    fetchTvSeries();
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
            {/* 🎬 Banner */}
            <div
              className="show-main-banner-wrapper"
              style={{
                backgroundImage: show?.backdrop_path
                  ? `url(https://image.tmdb.org/t/p/original${show.backdrop_path})`
                  : "none",
              }}
            >
              <div className="show-banner-details-wrapper">
                <h1>{show?.original_name}</h1>

                <p>
                  <span>⭐ {show?.vote_average || "N/A"}</span> |{" "}
                  <span>{show?.first_air_date || "N/A"}</span> |{" "}
                  <span>
                    {show?.genres?.map((g) => g.name).join(" ● ") ||
                      "Not Available"}
                  </span>
                </p>

                <p className="show-overview">
                  {show?.overview
                    ? `${show.overview.slice(0, 150)}...`
                    : "No overview available"}
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

            {/* 📊 Info Strip */}
            <div className="show-info-wrapper">
              <p>🎭 Status : {show?.status || "N/A"}</p>
              <p>📅 First Air Date : {show?.first_air_date || "N/A"}</p>
              <p>📅 Last Air Date : {show?.last_air_date || "N/A"}</p>
              <p>🌍 Language : {show?.languages?.join(", ") || "N/A"}</p>
              <p>🏳️ Country : {show?.origin_country?.join(", ") || "N/A"}</p>
            </div>

            {/* 🖼 Poster + Details Component */}
            <DetailPoster
              name={show?.original_name}
              posterBg={show?.poster_path}
              rating={show?.vote_average?.toFixed(1)}
              overview={show?.overview}
              seasons={show?.number_of_seasons}
              episodes={show?.number_of_episodes}
              creators={show?.created_by}
            />
          </>
        )}
      </div>
    </>
  );
};

export default TvShowDetailPage;
