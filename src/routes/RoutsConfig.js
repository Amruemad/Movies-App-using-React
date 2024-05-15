import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Games from "../pages/Games";
// import MoviesDetails from "../pages/MoviesDetails";
// import AboutUs from "../pages/AboutUs";
// import NotFound from "../pages/NotFound";
// import SearchPage from "../pages/SearchPage";
// import WatchList from "../pages/WatchList";

const Games = React.lazy(async () => import("../pages/Games"));
const MoviesDetails = React.lazy(() => import("../pages/MoviesDetails"));
const AboutUs = React.lazy(() => import("../pages/AboutUs"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const SearchPage = React.lazy(() => import("../pages/SearchPage"));
const WatchList = React.lazy(() => import("../pages/WatchList"));
const SignForm = React.lazy(() => import("../pages/SignForm"));
const Success = React.lazy(() => import("../pages/Success"));
export default function RoutesConfig() {
  return (
    <Suspense fallback={<h1>Please Wait Loading......</h1>}>
      <Routes>
        <Route path="" element={<Games />} />
        <Route path="movie/:id" element={<MoviesDetails />} />
        <Route path="watchlist" element={<WatchList />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/api/sign-up" element={<SignForm />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
