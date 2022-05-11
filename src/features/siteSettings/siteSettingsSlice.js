import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  settings: { _id: "", name: "", street: "", city: "", zip: "", state: "" },
};

const siteSettingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setSettings: (state, { payload }) => {
      state.settings = payload;
    },
    updateSettings: (state, { payload }) => {
      state.settings = payload;
    },
  },
});

export const { setLoading, setSettings, updateSettings } =
  siteSettingsSlice.actions;
export default siteSettingsSlice.reducer;
