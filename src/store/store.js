import { configureStore } from "@reduxjs/toolkit";
import post from "./Feature/Post/postSlice"
export const store = configureStore({
    reducer:{
        post:post,
    }
})