import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import { ProfileContext } from "../Context/ProfileContext";
const Navbar = () => {
  const context = useContext(ProfileContext);
  const profile = context?.profile;
  const [menu, setMenu] = useState(false);

  return (
    <div className="navbar-wrapper">
      <div className="logo">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1>Netflix</h1>
        </Link>
      </div>
      <div className={`nav-links-wrapper ${menu ? "active" : ""}`}>
        <Link
          to="/home"
          style={{ textDecoration: "none", color: "#fff" }}
          onClick={() => setMenu(false)}
        >
          Home
        </Link>
        <Link
          to="/movies"
          style={{ textDecoration: "none", color: "#fff" }}
          onClick={() => setMenu(false)}
        >
          Movies
        </Link>
        <Link
          to="/tv-shows"
          style={{ textDecoration: "none", color: "#fff" }}
          onClick={() => setMenu(false)}
        >
          TV Shows
        </Link>
        <Link
          to="/latest"
          style={{ textDecoration: "none", color: "#fff" }}
          onClick={() => setMenu(false)}
        >
          New & Popular
        </Link>
      </div>
      <div className="profile-info-wrapper">
        <IoSearch color="#fff" size={20} />
        <FaBell color="#fff" size={20} className="notification-icon" />
        <img
          src={profile?.img || "none"}
          alt="profile"
          width={30}
          height={30}
          className="profile-pic"
        />
        <span className="profile-name" style={{ color: "#fff" }}>
          {profile?.name || "Guest"}
        </span>
        <IoMdArrowDropdown
          color="#fff"
          size={20}
          className="info-dropdown-icon"
        />

        <div className="hamburger-menu" onClick={() => setMenu(!menu)}>
          {menu ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
