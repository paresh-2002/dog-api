import { configureStore } from "@reduxjs/toolkit";
import { dogApiSlice } from "./api-slice.ts";

export const store = configureStore({
    reducer:{
        [dogApiSlice.reducerPath]: dogApiSlice.reducer
    },

    middleware:(getDefaultMiddleware) =>{
        return getDefaultMiddleware().concat(dogApiSlice.middleware)
    }
})


