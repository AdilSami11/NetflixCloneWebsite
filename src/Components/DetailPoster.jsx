import React from "react";

const DetailPoster = ({
  name,
  posterBg,
  rating,
  overview,
  seasons,
  episodes,
  creators,
  status,
}) => {
  return (
    <div className="poster-info-wrapper">
      {/* Poster */}
      <div className="poster-img-wrap">
        <img
          src={posterBg ? `https://image.tmdb.org/t/p/w500${posterBg}` : ""}
          alt={name || "poster"}
        />
      </div>

      {/* Details */}
      <div className="poster-detail-wrap">
        <div className="name__rating_wrap">
          <h2>{name || "No Title"}</h2>
          <p className="review-stars">⭐ {rating || "N/A"}</p>
        </div>

        <p className="show-overview" style={{ color: "#fff" }}>
          <strong>Overview:</strong> <br />
          {overview || "No description available for this show."}
        </p>
        {seasons && (
          <p className="seasons">
            {" "}
            <strong>Seasons :</strong> {""} {seasons || "N/A"}
          </p>
        )}
        {episodes && (
          <p className="episodes">
            <strong>Episodes :</strong> {""} {episodes || "N/A"}
          </p>
        )}

        {creators?.length > 0 && (
          <p className="creator">
            <strong>Created by: </strong>{" "}
            {creators.map((c) => c.name).join(", ")}
          </p>
        )}

        {status && (
          <p className="status">
            <strong>Status : </strong>
            {status || "N/A"}
          </p>
        )}
      </div>
    </div>
  );
};

export default DetailPoster;
