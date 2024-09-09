import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../globals/enumStatus/Status";
import { API, APIAuthenticated } from "../http";

const dataSlice=createSlice({
    name:'data',
    initialState:{
        users:[],
        candidates:[],
        votes:[],
        category:[],
        party:[],
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
        setCategory(state,action){
            state.category=action.payload
        },
        setParty(state,action){
            state.party=action.payload
        },
        setStatus(state,action){
            state.status=action.payload
        },
        setDeleteUserById(state, action){
            const index=state.users.findIndex(user=>user._id===action.payload.userId) 
            state.users.splice(index, 1)  
        },
        setDeleteCandidateById(state,action){
            const index=state.candidates.findIndex(candidate=>candidate._id===action.payload.candidateId)
            state.candidates.splice(index,1)
        }
    }
})

export const {setUser,setCandidates,setVotes,setStatus,setDeleteUserById,setDeleteCandidateById,setCategory,setParty}=dataSlice.actions
export default dataSlice.reducer

//fetch all the user
export function fetchAllUser(){
    return async function fetchAllUserThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await APIAuthenticated.get("/user")
            console.log(response)
            if(response.status===200){
                const {data}=response.data
                console.log(data)
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

//delete each the user
export function deleteuser(userId){
    return async function deleteuserThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await APIAuthenticated.delete(`/user/${userId}`)
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

//fetch all the candidates
export function fetchAllCandidate(){
    return async function fetchAllCandidateThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await APIAuthenticated.get("/admin/candidate")
            console.log(response)
            if(response.status===200){
                const {data}=response.data
                console.log(data)
                dispatch(setCandidates(data))
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

//delete each candidate
export function deleteCandidate(candidateId){
    return async function deleteCandidateThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await APIAuthenticated.delete(`/admin/candidate/${candidateId}`)
            console.log(response)
            if(response.status===200){
                dispatch(setDeleteCandidateById({candidateId}))
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

//fetch all the category
export function fetchAllCategory(){
    return async function fetchAllCategoryThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await APIAuthenticated.get("/admin/category")
            console.log(response)
            if(response.status===200){
                const {data}=response.data
                console.log(data)
                dispatch(setCategory(data))
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


//fetch all the party
export function fetchAllParty(){
    return async function fetchAllPartyThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await APIAuthenticated.get("/admin/party")
            console.log(response)
            if(response.status===200){
                const {data}=response.data
                console.log(data)
                dispatch(setParty(data))
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