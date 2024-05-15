import React from "react";
import GamesList from "./../components/games/MoviesList";
import "../components/games/movies.css";
export default function Games() {
  return (
    <div className="my-5 container">
      <GamesList />;
    </div>
  );
}
