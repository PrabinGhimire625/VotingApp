import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../globals/enumStatus/Status";
import { API,APIAuthenticated}  from "../http/index"

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
            console.log(state.status)
        },
        resetStatus(state){
            state.status=STATUS.LOADING
        },
        setToken(state,action){
            state.token=action.payload
           console.log( state.token)
        },
        setProfile(state,action){
            state.profile=action.payload
            
        }
    }
})

export const {setUserData,setStatus,setToken,resetStatus,setProfile} =authSlice.actions
export default authSlice.reducer

//login user
export function loginUser(data) {
    return async function loginUserThunk(dispatch) {
      dispatch(setStatus(STATUS.LOADING));
      try {
        const response = await API.post('/user/login', data);
        if (response.status === 200) {
          const { token, data } = response.data;
          console.log(token)
          if (data.role !== 'admin') {
            throw new Error('Only admins can log in.');
          }
          dispatch(setStatus(STATUS.SUCCESS));
    
          dispatch(setToken(token));
          localStorage.setItem('token', token);
        }
      } catch (err) {
        dispatch(setStatus(STATUS.ERROR));
      }
    };
  }
  

//login user
// export function userProfile(){
//     return async function userProfile(dispatch){
//         dispatch(setStatus(STATUS.LOADING))
//         try{
//             const response=await APIAuthenticated.get("/user/profile")
//             console.log(response)
//             if(response.status===200){
//                 const {data}=response.data
//                 dispatch(setProfile(data)) 
//                 dispatch(setStatus(STATUS.SUCCESS))
//             }else{
//                 dispatch(setStatus(STATUS.ERROR))
//             }
//         }catch(err){
//             dispatch(setStatus(STATUS.ERROR))
//         }
//     }
// }


