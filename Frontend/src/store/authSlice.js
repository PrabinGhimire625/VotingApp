import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../globals/enumStatus/Status";
import { API, APIAuthenticated } from "../http";
import Profile from "../pages/auth/profile/Profile";
import { act } from "react";

const authSlice=createSlice({
    name: "auth",
    initialState:{
        data: [],
        status: STATUS.LOADING,
        token:"",
        profile:""
    },
    reducers:{
        setUserData(state,action){
            state.data=action.payload
        },
        setStatus(state,action){
            state.status=action.payload
        },
        resetStatus(state){
            state.status=STATUS.LOADING
        },
        setToken(state,action){
            state.token=action.payload
            console.log(state.token)
        },
        setProfile(state,action){
            state.profile=action.payload
            console.log(state.profile)
        }
    }
})

export const {setUserData,setStatus,setToken,resetStatus,setProfile} =authSlice.actions
export default authSlice.reducer

//register user
export function registerUser(data){
    return async function registerUserThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await API.post("/user/register",data)
            console.log(response)
            if(response.status===200){
                dispatch(setStatus(STATUS.SUCCESS))
            }
        }catch(err){
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}

//login user
export function loginUser(data){
    return async function loginUserThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await API.post("/user/login",data)
            if(response.status===200){
                const {token,data}=response.data
                dispatch(setStatus(STATUS.SUCCESS))
                dispatch(setProfile(data))
                dispatch(setToken(token))
                localStorage.setItem('token',token)      
            }
        }catch(err){
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}

//login user
export function userProfile(){
    return async function userProfile(dispatch){
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await APIAuthenticated.get("/user/profile")
            console.log(response)
            if(response.status===200){
                const {data}=response.data
                dispatch(setProfile(data)) 
                dispatch(setStatus(STATUS.SUCCESS))
            }else{
                dispatch(setStatus(STATUS.ERROR))
            }
        }catch(err){
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}

