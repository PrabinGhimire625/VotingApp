import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../globals/enumStatus/Status";
import { API } from "../http";

const candidateSlice=createSlice({
    name:"candidate",
    initialState:{
        data:[],
        status:STATUS.LOADING
    },
    reducers:{
        setCandidateData(state,action){
            state.data=action.payload
            console.log(state.data)
        },
        setStatus(state,action){
            state.status=action.payload
            console.log(state.status)
        }
    }
})

const {setCandidateData,setStatus} =candidateSlice.actions
export default candidateSlice

export function fetchAllCandidate(){
    return async function fetchAllCandidateThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await API.get("/admin/candidate")
            console.log(response)
            if(response.status===200){
                const {data}=response.data
                console.log(data)
               dispatch(setCandidateData(data))
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