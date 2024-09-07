import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../globals/enumStatus/Status";
import { API } from "../http";

const categorySlice=createSlice({
    name:'category',
    initialState:{
        category:[],
        status:STATUS.LOADING
    },
    reducers:{
        setCategory(state,action){
            state.category=action.payload
        },
        setStatus(state,action){
            state.status=action.payload
        }
    }
})

export const {setCategory,setStatus}=categorySlice.actions
export default categorySlice.reducer


//fetch category
export function fetchCategory(){
    return async function fetchCategoryThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await API.get("/admin/category")
            if(response.status===200){
                const {data}=response.data
                dispatch(setCategory(data))
                dispatch(setStatus(STATUS.SUCCESS))
            }else{
                dispatch(setStatus(STATUS.ERROR))
            }
        }catch(err){
            console.error("Error fetching categories:", err);
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}