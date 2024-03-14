import { createSlice } from "@reduxjs/toolkit";

const gtpSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGtpSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGtpSearchView } = gtpSlice.actions;
export default gtpSlice.reducer;
