import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//read action
export const getAllProducts = createAsyncThunk(
  "getAllProducts",
  async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/product/all-products");
      console.log("#Response", response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

//create action
export const addProduct = createAsyncThunk(
  "addProduct",
  async (formData) => {
    console.log("**************API O DATA**************", formData);
    try {
      const response = await axios.post("http://localhost:8080/api/v1/product/add-product", formData);
      console.log("**************API I DATA**************", response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const productDetailsSlice = createSlice({
  name: "productDetailsSlice",
  initialState: {
    providers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    })
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
    builder.addCase(addProduct.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    })
    builder.addCase(addProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  }

});

export default productDetailsSlice.reducer;