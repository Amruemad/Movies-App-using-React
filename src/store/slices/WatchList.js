import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  listVal: [],
};
const watchlistSlice = createSlice({
  name: "watchList",
  initialState: INITIAL_STATE,
  reducers: {
    addToWatchlist: (state, action) => {
      state.listVal.push(action.payload);
    },
    removeFromWatchlist: (state, action) => {
      state.listVal = state.listVal.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;
