import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  customers: [],
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setCustomers: (state, { payload }) => {
      state.customers = payload;
    },
  },
});

export const { setCustomers, setLoading } = customerSlice.actions;
export default customerSlice.reducer;
