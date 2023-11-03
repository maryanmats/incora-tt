import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Feed } from "../../types/Feed";

export interface TypeState {
  posts: Feed[];
}

const initialState: TypeState = {
  posts: [],
};

export const feedsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setFeeds: (state, action: PayloadAction<Feed[]>) => {
      state.posts = action.payload;
    },
    deleteFeed: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    addFeed: (
      state,
      action: PayloadAction<{ title: string; body: string }>
    ) => {
      state.posts.push({
        id: state.posts.length + 1,
        title: action.payload.title,
        body: action.payload.body,
        userId: 3,
      });
    },
  },
});

export const { setFeeds, deleteFeed, addFeed } = feedsSlice.actions;

export default feedsSlice.reducer;
