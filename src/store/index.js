import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./slices/WatchList";

export default configureStore({
  reducer: {
    watchlist: watchlistReducer,
  },
});
