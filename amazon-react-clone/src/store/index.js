import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemSlice";

const amazonStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    // fetchStatus: fetchStatusSlice.reducer,
    // bag: bagSlice.reducer,
  }
});

export default amazonStore;