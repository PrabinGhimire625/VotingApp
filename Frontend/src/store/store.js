import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import candidateSlice from "./candidateSlice";
import voteSlice from "./voteSlice";
import partySlice from "./partySlice";

const store=configureStore({
    reducer:{
        auth:authSlice,
        candidate:candidateSlice,
        vote:voteSlice,
        party:partySlice
    }
})

export default store