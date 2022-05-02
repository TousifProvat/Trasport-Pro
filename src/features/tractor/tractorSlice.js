import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  tractors: [],
};

const tractorSlice = createSlice({
  name: "tractor",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setTractors: (state, { payload }) => {
      state.tractors = payload;
    },
  },
});

export const { setLoading, setTractors } = tractorSlice.actions;
export default tractorSlice.reducer;
