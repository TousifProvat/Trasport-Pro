import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  auth: { isAuthenticated: false, user: {}, token: "" },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setAuth: (state, { payload }) => {
      state.auth = payload;
    },
  },
});

export const { setAuth, setLoading } = authSlice.actions;
export default authSlice.reducer;
