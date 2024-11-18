import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productsSlice";
export const store = configureStore({
    reducer:{
        products:productSlice.reducer,
    }
});