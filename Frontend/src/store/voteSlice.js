import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../globals/enumStatus/Status";
import {APIAuthenticated } from "../http";

const voteSlice=createSlice({
    name:"vote",
    initialState:{
        vote:[],
        status:STATUS.LOADING
    },
    reducers:{
        setVote(state,action){
            state.vote=action.payload
            console.log(state.vote)
        },
        setStatus(state,action){
            state.status=action.payload
            console.log(  state.status)
        }
    }
})

export const  {setVote,setStatus} =voteSlice.actions
export default voteSlice.reducer


export function addVote(id){
    return async function addVoteThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await APIAuthenticated.post(`/user/vote/${id}`)
            console.log(response)
            if(response.status===200){
                dispatch(setStatus(STATUS.SUCCESS))
                dispatch(setVote(response.data.data))
            }
        }catch(err){
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}
