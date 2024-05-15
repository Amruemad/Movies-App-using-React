import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../../store/slices/WatchList";
import React from "react";
import axiosInstance from "../../apis/config";
function MovieCard({ movieItem }) {
  console.log(movieItem);
  const navigate = useNavigate();
  const { adult, title, release_date, status, poster_path } = movieItem;

  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.listVal);
  const isMovieInWatchlist = watchlist.some((item) => item.id === movieItem.id);

  const handleToggleWatchlist = () => {
    if (isMovieInWatchlist) {
      dispatch(removeFromWatchlist(movieItem.id));
    } else {
      dispatch(addToWatchlist(movieItem));
    }
  };
  return (
    <div className="card my-1 " style={{ backgroundColor: " white" }}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "#3a416f" }}>
          {title}
        </h5>
        <p className="card-text" style={{ color: "#3a416f" }}>
          {release_date}
        </p>
        <div className="d-flex align-items-center justify-content-between">
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/movie/${movieItem.id}`)}
            style={{ backgroundColor: "#3a416f" }}
          >
            View
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={`bi ${
              isMovieInWatchlist ? "bi-heart-fill" : "bi-heart"
            }`}
            viewBox="0 0 16 16"
            style={{
              color: isMovieInWatchlist ? "#3a416f" : "gray",
              cursor: "pointer",
            }}
            onClick={handleToggleWatchlist}
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default MovieCard;
