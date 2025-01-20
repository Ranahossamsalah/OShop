/** @format */

import { configureStore } from "@reduxjs/toolkit";
import  favSlice  from "./slices/favSlice";

//store
export const store = configureStore({ reducer: { favSlice: favSlice } });

