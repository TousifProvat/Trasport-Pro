import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  loads: [],
};

const loadSlice = createSlice({
  name: "load",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setLoads: (state, { payload }) => {
      state.loads = payload;
    },
  },
});

export const { setLoading, setLoads } = loadSlice.actions;
export default loadSlice.reducer;
