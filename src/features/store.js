import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import loadSlice from "./load/loadSlice";
import siteSettingsSlice from "./siteSettings/siteSettingsSlice";
import tractorSlice from "./tractor/tractorSlice";
import trailerSlice from "./trailer/trailerSlice";
import driverSlice from "./driver/driverSlice";
import userSlice from "./user/userSlice";
import commoditySlice from "./commodity/commoditySlice";
import customerSlice from "./customer/customerSlice";
import eobrSlice from "./eobr/eobrSlice";
import ownerSlice from "./owner/ownerSlice";

const store = configureStore({
  reducer: {
    settings: siteSettingsSlice,
    auth: authSlice,
    owner: ownerSlice,
    trailer: trailerSlice,
    tractor: tractorSlice,
    driver: driverSlice,
    load: loadSlice,
    user: userSlice,
    commodity: commoditySlice,
    customer: customerSlice,
    eobr: eobrSlice,
  },
});

export default store;
