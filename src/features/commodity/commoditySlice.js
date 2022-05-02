import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  commodities: [],
};

const commoditySlice = createSlice({
  name: "commodity",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setCommodities: (state, { payload }) => {
      state.commodities = payload;
    },
  },
});

export const { setCommodities, setLoading } = commoditySlice.actions;
export default commoditySlice.reducer;
