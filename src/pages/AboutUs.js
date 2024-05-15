import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom"; // Import NavLink
import AppContext from "../components/context/Lang";
import { useState, useEffect } from "react";
import axiosInstance from "../apis/config";
import MovieCard from "../components/games/MovieCard";
export default function AboutUs() {
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
  return (
    <div
      className="row row-cols-1 row-cols-md-4 g-5"
      style={{ backgroundColor: "#1f1f1f", minHeight: "100vh" }}
    >
      {Array.isArray(movies) &&
        movies.map((movie, index) => (
          <div className="col" key={index}>
            <MovieCard movieItem={movie} index={index} />
          </div>
        ))}
    </div>
  );
}
