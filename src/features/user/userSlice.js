import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
});

export const { setLoading, setUsers } = userSlice.actions;
export default userSlice.reducer;
