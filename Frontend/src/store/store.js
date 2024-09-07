import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import candidateSlice from "./candidateSlice";
import voteSlice from "./voteSlice";
import partySlice from "./partySlice";
import categorySlice from "./categorySlice";

const store=configureStore({
    reducer:{
        auth:authSlice,
        candidate:candidateSlice,
        vote:voteSlice,
        party:partySlice,
        category:categorySlice
    }
})

export default store