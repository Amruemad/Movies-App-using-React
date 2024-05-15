import React, { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import axiosInstance from "../apis/config";
import "./MoviesDetails.css";

export default function MovieDetails() {
  const [movieDetails, setmovieDetails] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(params);
  console.log(movieDetails);
  useEffect(() => {
    axiosInstance
      .get(`/${params.id}?api_key=1592f2a94c764098cf6ff5e9504d72c8`)
      .then((res) => setmovieDetails(res.data))
      .catch((err) => navigate("/"));
  }, []);
  console.log(movieDetails);

  return (
    <>
      <div className="container">
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt="Movie Poster"
            className="my-5"
          />
        </div>
        <div className="details" style={{ backgroundColor: "white" }}>
          <h2>
            <span> {movieDetails.title} </span>{" "}
          </h2>
          <p>
            Overview : <span> {movieDetails.overview} </span>{" "}
          </p>
          <p>
            Date : <span> {movieDetails.release_date} </span>{" "}
          </p>
          <p>
            Vote Average : <span> {movieDetails.vote_average} </span>{" "}
          </p>
          <p>
            Vote Count : <span> {movieDetails.vote_count} </span>{" "}
          </p>
          <p>
            Original Language ; <span> {movieDetails.original_language} </span>{" "}
          </p>

          <p>
            Popularity :<span>{movieDetails.popularity}</span>{" "}
          </p>
          <span className="btn" id="btn">
            {" "}
            Action
          </span>
          <span className="btn" id="btn">
            {" "}
            Crime
          </span>
          <span className="btn" id="btn">
            {" "}
            Thriller
          </span>
        </div>
      </div>
    </>
  );
}
