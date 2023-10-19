import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlice";

const store = configureStore({
    reducer:{
        wishListReducer:wishlistSlice
    }
})

export default store;