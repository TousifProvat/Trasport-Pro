import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  eobrs: [],
};

const eobrSlice = createSlice({
  name: "eobr",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setEobrs: (state, { payload }) => {
      state.eobrs = payload;
    },
  },
});

export const { setEobrs, setLoading } = eobrSlice.actions;
export default eobrSlice.reducer;
