import React, { useEffect, useState } from "react";
import axiosInstance from "../../apis/config";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import "./movies.css";
function MovieList() {
  const [moviesArr, setMoviesArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const apiKey = "1592f2a94c764098cf6ff5e9504d72c8";
  // const handlePreviousPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // const handleNextPage = () => {
  //   setCurrentPage(currentPage + 1);
  // };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    axiosInstance
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: apiKey,
          category: "action",
        },
        headers: {
          "Accept-Language": "EN",
        },
      })
      .then((res) => setMoviesArr(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${currentPage}`
        );
        setMoviesArr(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchData();
  }, [currentPage]);

  return (
    <div
      className="row row-cols-1 row-cols-md-4 g-5"
      style={{ backgroundColor: "#1f1f1f", minHeight: "100vh" }}
    >
      {Array.isArray(moviesArr) &&
        moviesArr.map((movie, index) => (
          <div className="col" key={index}>
            <MovieCard movieItem={movie} index={index} />
          </div>
        ))}
      <div className="container mt-5">
        <nav className="d-flex justify-content-center mt-3">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 && "disabled"}`}>
              <Link
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </Link>
            </li>
            {[...Array(10)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 && "active"}`}
              >
                <Link
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Link>
              </li>
            ))}
            <li className={`page-item ${currentPage === 10 && "disabled"}`}>
              <Link
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className="pagination flex justify-center">
        <button
          className="btn btn-primary"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage} className="btn btn-primary">
          Next
        </button>
      </div> */}
    </div>
  );
}

export default MovieList;
