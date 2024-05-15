import React from "react";
import MovieCard from "../components/games/MovieCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function WatchList() {
  const watchlist = useSelector((state) => state.watchlist.listVal);
  const watchlistLength = useSelector(
    (state) => state.watchlist.listVal.length
  );
  return (
    <>
      {watchlistLength === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFF",
            flexDirection: "column",
          }}
          className="my-5"
        >
          <h1>NO MOVIES IN WATCHLIST</h1>
          <Link
            to="/"
            className="btn btn-primary"
            style={{ marginBottom: "20px" }}
          >
            Go to Home Page
          </Link>
        </div>
      ) : (
        <>
          <h2
            style={{ display: "flex", justifyContent: "center", color: "#FFF" }}
          >
            Watchlist
          </h2>
          <div className="container row row-cols-3 row-cols-md-4 g-5">
            {watchlist.map((movie, index) => (
              <div className="col" key={index}>
                <MovieCard movieItem={movie} index={index} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
