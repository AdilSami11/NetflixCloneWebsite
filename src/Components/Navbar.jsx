import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import profile2 from "../assets/ProfilePicture_2.png";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="logo">
        <Link to={"/home"} style={{ textDecoration: "none" }}>
          <h1>Netflix</h1>
        </Link>
      </div>
      <div className="nav-links-wrapper">
        <Link to="/home" style={{ textDecoration: "none", color: "#fff" }}>
          Home
        </Link>
        <Link to="/tv-shows" style={{ textDecoration: "none", color: "#fff" }}>
          TV Shows
        </Link>
        <Link to="/movies" style={{ textDecoration: "none", color: "#fff" }}>
          Movies
        </Link>
        <Link to="/latest" style={{ textDecoration: "none", color: "#fff" }}>
          New & Popular
        </Link>
      </div>
      <div className="profile-info-wrapper">
        <IoSearch color="#fff" size={20} />
        <FaBell color="#fff" size={20} />
        <img src={profile2} alt="profile" width={30} height={30} />
        <IoMdArrowDropdown color="#fff" size={20} />
      </div>
    </div>
  );
};

export default Navbar;
