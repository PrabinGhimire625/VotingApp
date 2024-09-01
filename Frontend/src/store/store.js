import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import candidateSlice from "./candidateSlice";

const store=configureStore({
    reducer:{
        auth:authSlice,
        candidate:candidateSlice
    }
})

export default store