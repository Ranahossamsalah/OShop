/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
  name: "fav",
  initialState: {
    favId: [],
    favNum: "",
  },

  reducers: {
    addFavId: (state, action) => {
      state.favId = [...state.favId, action.payload];
      state.favId = [...new Set(state.favId)];
      console.log(action.payload, state.favId);
    },

    deleteFavId: (state, action) => {
      const index = state.favId.indexOf(action.payload);
      state.favId.splice(index, 1);
      state.favId = [...state.favId];
      console.log(index, state.favId);
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
    deleteFavNum: (state) => {
      state.favNum--;
      console.log('====================================');
      console.log(state.favNum);
      console.log('====================================');
    },

    // DeleteFavId: (state, action) => {
    //   state.todos = state.todos.filter((item, index) => {
    //     return index !== action.payload;
    //   });
    // },
  },
});

export const { addFavId, addFavNum, deleteFavId, deleteFavNum } =
  favSlice.actions;
export default favSlice.reducer;
