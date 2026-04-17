import React from "react";
import Navbar from "../Components/Navbar";
// import { useParams } from "react-router-dom";
const TvShowDetailPage = () => {
  // const { id } = useParams();

  return (
    <>
      <Navbar />
      <div className="show-detail-main-wrapper">
        <h1>Details Page</h1>
      </div>
    </>
  );
};

export default TvShowDetailPage;
