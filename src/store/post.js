import axios from "axios";
import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response.data);
  return response.data;
});

const postAdapter = createEntityAdapter();
export const postSelectors = postAdapter.getSelectors((state) => state.posts);

const postSlice = createSlice({
  name: "post",
  initialState: postAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

export default postSlice.reducer;
