import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import candidateSlice from "./candidateSlice";
import voteSlice from "./voteSlice";

const store=configureStore({
    reducer:{
        auth:authSlice,
        candidate:candidateSlice,
        vote:voteSlice
    }
})

export default store