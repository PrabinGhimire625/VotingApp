import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../globals/enumStatus/Status";
import { API } from "../http";

const partySlice=createSlice({
    name:'party',
    initialState:{
        party:[],
        status:STATUS.LOADING
    },
    reducers:{
        setParty(state,action){
            state.party=action.payload
        },
        setStatus(state,action){
            state.status=action.payload
        }
    }
})

export const {setParty,setStatus}=partySlice.actions
export default partySlice.reducer

// export function addParty(){
//     return async function addPartyThunk(dispatch) {
//         dispatch(setStatus(STATUS.LOADING))
//         try{
//             const response=await API.post("/admin/party")
//             if(response.status===200){
//                 const {data}=response.data
//                 dispatch(setStatus(STATUS.SUCCESS))
//             }else{
//                 dispatch(setStatus(STATUS.ERROR))
//             }
//         }catch(err){
//             dispatch(setStatus(STATUS.ERROR))
//         }
//     }
// }



//fetch party
export function fetchParty(){
    return async function fetchPartyThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await API.get("/admin/party")
            if(response.status===200){
                const {data}=response.data
                dispatch(setParty(data))
                dispatch(setStatus(STATUS.SUCCESS))
            }else{
                dispatch(setStatus(STATUS.ERROR))
            }
        }catch(err){
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}