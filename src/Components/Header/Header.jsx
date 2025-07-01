import React, { useState } from "react";
import "./Header.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div style={{ marginTop: "12px" }}>
      <div className="Header_Subcontainer">
        <div className="Header_logo_image">
          <Link to="/">
            <img style={{ width: "100%" }} src="https://beefit.in/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className={`Header_Span_container ${menuOpen ? 'open' : ''}`}>
          <Link style={{ textDecoration: "none" }} to="/">
            <span className={getLinkClass("/")}>HOME</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Aboutus">
            <span className={getLinkClass("/Aboutus")}>ABOUT US</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/classes">
            <span className={getLinkClass("/classes")}>CLASSES</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/services">
            <span className={getLinkClass("/services")}>SERVICES</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/OurTeam">
            <span className={getLinkClass("/OurTeam")}>OUR TEAM</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contact">
            <span className={getLinkClass("/contact")}>CONTACT</span>
          </Link>
        </div>
        <div className="Header_logo-container">
          {searchOpen && (
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
          )}
          <span onClick={toggleSearch}>
            {searchOpen ? <FaTimes /> : <FaSearch />}
          </span>
          <span className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </span>
        </div>
      </div>
    </div>
  );
};
