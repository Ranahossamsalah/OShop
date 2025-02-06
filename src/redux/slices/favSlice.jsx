/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
  name: "fav",
  initialState: {
    favId: [],
    cartId: [],
    favNum: "",
    cartNum: "",
    totalPrice: 0,
  },

  reducers: {
    addFavId: (state, action) => {
      state.favId = [...state.favId, action.payload];
      state.favId = [...new Set(state.favId)];
      console.log(action.payload, state.favId);
    },
    addCartId: (state, action) => {
      state.cartId = [...state.cartId, action.payload];
      state.cartId = [...new Set(state.cartId)];
      console.log(action.payload, state.cartId);
    },

    deleteFavId: (state, action) => {
      const index = state.favId.indexOf(action.payload);
      state.favId.splice(index, 1);
      state.favId = [...state.favId];
      console.log(index, state.favId);
    },
    deleteCartId: (state, action) => {
      const index = state.cartId.indexOf(action.payload);
      state.cartId.splice(index, 1);
      state.cartId = [...state.cartId];
      console.log(index, state.cartId);
    },

    addFavNum: (state) => {
      let count = 0;
      if (state.favId != []) {
        for (const num of state.favId) {
          count++;
          state.favNum = count;
        }
        console.log(state.favNum);
      }
    },
    addCartNum: (state) => {
      let count = 0;
      if (state.cartId != []) {
        for (const num of state.cartId) {
          count++;
          state.cartNum = count;
        }
        console.log(state.cartNum);
      }
    },
    deleteFavNum: (state) => {
      state.favNum--;
      console.log("====================================");
      console.log(state.favNum);
      console.log("====================================");
    },
    addPrice: (state, action) => {
      state.totalPrice = state.totalPrice + action.payload;
      (state.totalPrice).toFixed(0)
    },
    // deleteCartNum: (state) => {
    //   state.cartNum--;
    //   console.log("====================================");
    //   console.log(state.cartNum);
    //   console.log("====================================");
    // },

    // DeleteFavId: (state, action) => {
    //   state.todos = state.todos.filter((item, index) => {
    //     return index !== action.payload;
    //   });
    // },
  },
});

export const {
  addFavId,
  addFavNum,
  addCartId,
  addCartNum,
  deleteFavId,
  deleteFavNum,
  deleteCartId,
  deleteCartNum,
  addPrice
} = favSlice.actions;
export default favSlice.reducer;
