import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//read action
export const getAllPosts = createAsyncThunk(
  "getAllPosts",
  async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/post/all-posts");
      console.log("#Response", response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

//create action
export const createPost = createAsyncThunk(
  "createPost",
  async (data) => {
    console.log("**************API O DATA**************", data);
    try {
      const response = await axios.post("http://localhost:8080/api/v1/post/create-post", data);
      console.log("**************API I DATA**************", response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const postDetailsSlice = createSlice({
  name: "postDetails",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
    // .addCase(createPost.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(createPost.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.posts = action.payload;
    // })
    // .addCase(createPost.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // })
  }

});

export default postDetailsSlice.reducer;