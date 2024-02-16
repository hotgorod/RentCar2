import { configureStore } from "@reduxjs/toolkit";

import advertSlice from "./advertSlice";
import favouriteSlice from "./favouriteSlice";

const store = configureStore({
  reducer: {
    favourite: favouriteSlice,
    adverts: advertSlice,
  },
});
export default store;
