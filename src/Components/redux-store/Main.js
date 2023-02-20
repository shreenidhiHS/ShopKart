import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import dataSlice from "./DataSlice";


const store =configureStore({
    reducer:{
        auth:authSlice.reducer,
        data:dataSlice.reducer
    }
})

export default store