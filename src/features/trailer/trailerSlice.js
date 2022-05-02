import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  trailers: [],
};

const trailerSlice = createSlice({
  name: "trailer",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setTrailers: (state, { payload }) => {
      state.trailers = payload;
    },
  },
});

export const { setLoading, setTrailers } = trailerSlice.actions;
export default trailerSlice.reducer;
