// import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // ... existing reducers ...
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
