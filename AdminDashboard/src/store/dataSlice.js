import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../globals/enumStatus/Status";
import { API } from "../http";

const dataSlice=createSlice({
    name:'data',
    initialState:{
        users:[],
        candidates:[],
        votes:[],
        status:STATUS.LOADING
    },
    reducers:{
        setUser(state,action){
            state.users=action.payload
        },
        setCandidates(state,action){
            state.candidates=action.payload
        },
        setVotes(state,action){
            state.votes=action.payload
        },
        setStatus(state,action){
            state.status=action.payload
        },
        setDeleteUserById(state, action){
            const index=state.users.findIndex(user=>user._id===action.payload.userId) 
            state.users.splice(index, 1)  
        },
    }
})

export const {setUser,setCandidates,setVotes,setStatus,setDeleteUserById}=dataSlice.actions
export default dataSlice.reducer

//fetch all the user
export function fetchAllUser(){
    return async function fetchAllUserThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await API.get("/user")
            if(response.status===200){
                const {data}=response.data
                dispatch(setUser(data))
                dispatch(setStatus(STATUS.SUCCESS))
            }else{
                dispatch(setStatus(STATUS.ERROR))
            }
        }catch(err){
            console.log(err)
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}


//fetch all the user
export function deleteuser(userId){
    return async function deleteuserThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await API.delete(`/user/${userId}`)
            console.log(response)
            if(response.status===200){
                dispatch(setDeleteUserById({userId}))
                dispatch(setStatus(STATUS.SUCCESS))
            }else{
                dispatch(setStatus(STATUS.ERROR))
            }
        }catch(err){
            console.log(err)
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}


