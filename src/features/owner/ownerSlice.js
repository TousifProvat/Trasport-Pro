import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  owners: [],
};

const ownerSlice = createSlice({
  name: "owner",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setOwners: (state, { payload }) => {
      state.owners = payload;
    },
  },
});

export const { setLoading, setOwners } = ownerSlice.actions;
export default ownerSlice.reducer;
