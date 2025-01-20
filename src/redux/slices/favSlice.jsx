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
      // state.favId.push(action.payload);
      state.favId = [...state.favId, action.payload];
      state.favId = [...new Set(state.favId)];

      console.log(action.payload, state.favId);
    },
    addFavNum: (state) => {
      let count = 0;
      if (state.favId != []) {
        for (const num of state.favId) {
          count++;
          state.favNum = count;
        }
        console.log(state.favNum); // 6
      }
    },
    // DeleteFavId: (state, action) => {
    //   state.todos = state.todos.filter((item, index) => {
    //     return index !== action.payload;
    //   });
    // },
  },
});

export const { addFavId, addFavNum } = favSlice.actions;
export default favSlice.reducer;
