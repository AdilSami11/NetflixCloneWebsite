import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { ProfileContext } from "../Context/ProfileContext";
const Navbar = () => {
  const { profile } = useContext(ProfileContext);
  return (
    <div className="navbar-wrapper">
      <div className="logo">
        <Link to={"/"} style={{ textDecoration: "none" }}>
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
        <FaBell color="#fff" size={20} className="notification-icon" />
        <img
          src={profile?.img}
          alt="profile"
          width={30}
          height={30}
          className="profile-pic"
        />
        <span className="profile-name" style={{ color: "#fff" }}>
          {profile.name}
        </span>
        <IoMdArrowDropdown
          color="#fff"
          size={20}
          className="info-dropdown-icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
