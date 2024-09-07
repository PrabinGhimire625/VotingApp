import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import dataSlice from "./dataSlice";

const store=configureStore({
    reducer:{
        auth:authSlice,
        data:dataSlice
    }
})

export default store