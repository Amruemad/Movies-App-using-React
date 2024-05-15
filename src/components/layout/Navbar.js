import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom"; // Import NavLink
import AppContext from "../context/Lang";
import { useState, useEffect } from "react";
import axiosInstance from "../../apis/config";
import "./style.css";
import SignForm from "../../pages/SignForm";
export default function Navbar() {
  const { lang, setLang } = useContext(AppContext);
  const [movies, setMovies] = useState([]);
  const apiKey = "1592f2a94c764098cf6ff5e9504d72c8";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${lang}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchData();
  }, [lang, apiKey]);
  const watchlistLength = useSelector(
    (state) => state.watchlist.listVal.length
  );

  function toggleDirection() {
    setLang(lang === "en" ? "ar" : "en");
    document.documentElement.dir = lang === "en" ? "rtl" : "ltr";
  }
  const [activeNav, setActiveNav] = useState(null);
  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary ${
        lang === "ar" ? "rtl" : "ltr"
      }`}
      style={{ backgroundColor: "#3a416f" }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div
          className="navbar-brand"
          style={{ fontWeight: "bold", color: "#3a416f" }}
        >
          Movies App
        </div>
        <div className="navbar-nav">
          <NavLink
            className="nav-link"
            aria-current="page"
            to="/"
            activeClassName="active"
            id="nav-link"
            onClick={() => setActiveNav("/")}
            style={{
              color: "#3a416f",
              fontWeight: "bold",
              textDecoration: activeNav === "/" ? "underline" : "none",
              paddingBottom: activeNav === "/" ? "8px" : "0",
            }}
          >
            Movies
          </NavLink>
          <NavLink
            className="nav-link"
            aria-current="page"
            to="/api/sign-up"
            activeClassName="active"
            id="nav-link"
            onClick={() => setActiveNav("/api/sign-up")}
            style={{
              color: "#3a416f",
              fontWeight: "bold",
              textDecoration:
                activeNav === "/api/sign-up" ? "underline" : "none",
              paddingBottom: activeNav === "/api/sign-up" ? "8px" : "0",
            }}
          >
            SignUp
          </NavLink>
          <NavLink
            className="nav-link"
            to="/watchlist"
            activeClassName="active"
            id="nav-link"
            onClick={() => setActiveNav("/watchlist")}
            style={{
              color: "#3a416f",
              fontWeight: "bold",
              textDecoration: activeNav === "/watchlist" ? "underline" : "none",
              paddingBottom: activeNav === "/watchlist" ? "8px" : "0",
            }}
          >
            Watchlist ({watchlistLength})
          </NavLink>
          <NavLink
            className="nav-link"
            to="/about-us"
            activeClassName="active"
            id="nav-link"
          >
            AR
          </NavLink>
        </div>
        <div className="navbar-nav">
          <button
            className="btn btn-secondary"
            onClick={toggleDirection}
            style={{ backgroundColor: "#3a416f" }}
          >
            Language {lang}
          </button>
        </div>
      </div>
    </nav>
  );
}
