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
    products: [],
    cartItems: [],
    quantity: 1,
    totalPrice: 0,
    totalQuantity: 0,
    loading: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const check = state.cartItems.some((el) => el._id === action.payload._id);
      if (check) {
        alert("Already Item in Cart");
      } else {
        alert("Item Add successfully");
        const total = action.payload.price;
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: state.quantity, totalPrice: state.totalPrice },
        ];
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      const index = state.cartItems.findIndex((el) => el._id === action.payload);
      let quantity = state.cartItems[index].quantity;
      const qtyInc = ++quantity;
      state.cartItems[index].quantity = qtyInc;
      const price = state.cartItems[index].productPrice;
      const total = price * qtyInc;
      state.cartItems[index].totalPrice = total;

    },
    decreaseItemQuantity: (state, action) => {
      if (state.quantity == 0) {
        state.quantity = 0;
      }
      else {
        state.quantity -= 1;
      }

    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          console.log("carttotal", cartTotal);
          console.log("cartitem", cartItem);
          const { price, quantity } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

  },
  extraReducers: (builder) => {

    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
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
      state.products = action.payload;
    })
    builder.addCase(addProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  }

});

export const { addToCart, getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity, } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;