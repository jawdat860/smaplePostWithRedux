import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const init = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
  },
];
export const post = createSlice({
  name: "post",
  initialState: init,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content) => {
        return {
          payload: {
            id: nanoid(),
            title: title,
            content: content,
          },
        };
      },
    },
  },
});
export const postSelecter = (state) => state.post;
export const { addPost } = post.actions;
export default post.reducer;
