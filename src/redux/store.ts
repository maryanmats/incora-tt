import { configureStore } from "@reduxjs/toolkit";
import feedsSlice from "./slice/feedCreateSlice";

export const store = configureStore({
  reducer: { posts: feedsSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
