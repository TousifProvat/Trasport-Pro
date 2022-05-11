import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  drivers: [],
};

const driverSlice = createSlice({
  name: "driver",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setDrivers: (state, { payload }) => {
      state.drivers = payload;
    },
  },
});

export const { setDrivers, setLoading } = driverSlice.actions;
export default driverSlice.reducer;
