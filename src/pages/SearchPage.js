import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/games/MovieCard";

const apiKey = "a81d4e5b8e6dbf25c635875f3d5925dd";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
        );
        setSearchResults(response.data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
    fetchData();
  }, [searchQuery]);

  return (
    <div className="search-page">
      <h1>Search Results for "{searchQuery}"</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {searchResults.map((movie, index) => (
          <div className="col" key={movie.id}>
            <div className="col" key={index}>
              <MovieCard movieItem={movie} index={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
