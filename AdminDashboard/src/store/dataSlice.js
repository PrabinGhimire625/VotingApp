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
        singleCandidate:null,
        singleCategory:null,
        singleParty:null,
        status:STATUS.LOADING
    },
    reducers:{
        setStatus(state,action){
            state.status=action.payload
        },
        resetStatus(state){
            state.status=STATUS.LOADING

        },
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
        setSingleCandidate(state,action){
            state.singleCandidate=action.payload
        },
        setSingleCategory(state,action){
            state.singleCategory=action.payload
        },
        setSingleParty(state,action){
            state.singleParty=action.payload
        },
        setDeleteUserById(state, action){
            const index=state.users.findIndex(user=>user._id===action.payload.userId) 
            state.users.splice(index, 1)  
        },
        setDeleteCandidateById(state,action){
            const index=state.candidates.findIndex(candidate=>candidate._id===action.payload.candidateId)
            state.candidates.splice(index,1)
        },
        setDeleteCategoryById(state,action){
            const index=state.category.findIndex(cate=>cate._id=action.payload.categoryId)
            state.category.splice(index,1)
        },
        setDeletePartyById(state,action){
            const index=state.party.findIndex(part=>part._id==action.payload.partyId)
            state.party.splice(index,1)
        },
        setUpdateCategory(state, action) {
            const index = state.category.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.category[index] = {
                    ...state.category[index], 
                    categoryName: action.payload.categoryData 
                };
            }
        },
        setUpdateParty(state, action) {
            const index = state.party.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.party[index] = {
                    ...state.party[index], 
                    ...action.payload.partyData 
                };
            }
        },
        setUpdateCandidate(state, action) {
            const index = state.candidates.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.candidates[index] = {
                    ...state.candidates[index], 
                    ...action.payload.candidateData 
                };
            }
        }
    }
})

export const {setUser,setSingleCategory,setUpdateCandidate,setSingleParty,setSingleCandidate,setUpdateParty,setUpdateCategory,setCandidates,resetStatus,setDeletePartyById,setVotes,setStatus,setDeleteCategoryById,setDeleteUserById,setDeleteCandidateById,setCategory,setParty}=dataSlice.actions
export default dataSlice.reducer


//use Section
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





//candidate Section

//add candidates
export function addCandidate(candidateData){
    return async function addCandidateThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
        try {
            const response = await APIAuthenticated.post('/admin/candidate',candidateData,{
                headers : {
                    "Content-Type" : "multipart/form-data"
                }
            })
            if(response.status === 200){
                dispatch(setStatus(STATUS.SUCCESS))
            }else{
                dispatch(setStatus(STATUS.ERROR))
            }
        } catch (error) {
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

//fetch single candidate
export function fetchSingleCandidate(id){
    return async function fetchSingleCandidateThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try{
            const response=await API.get(`/admin/candidate/${id}`)
            console.log(response)
            if(response.status===200){
                const {data}=response.data
                console.log(data)
                dispatch(setSingleCandidate(data))
                dispatch(setStatus(STATUS.SUCCESS))
            }else{
                dispatch(setStatus(STATUS.ERROR))
            }
        }catch{
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}

//update candidate
export function updateCandidate(candidateData,id){
    return async function updateCandidateThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try{
            const response=await APIAuthenticated.patch(`/admin/candidate/${id}`,candidateData,{
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            })
            console.log(response)
            if(response.status===200){
                const {data}=response.data
                dispatch(setUpdateCandidate({id,candidateData}))
                dispatch(setStatus(STATUS.SUCCESS))
            }else{
                dispatch(setStatus(STATUS.ERROR))
            }
        }catch{
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







//categorySection

//add category
export function addCategory(categoryData){
    return async function addCategoryThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await APIAuthenticated.post("/admin/category",categoryData)
            console.log(response)
            if(response.status === 200){
                dispatch(setStatus(STATUS.SUCCESS))
            }else{
                dispatch(setStatus(STATUS.ERROR))
            }
        }catch(err){
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

//fetch single category
export function fetchSingleCategory(id) {
    return async function fetchSingleCategoryThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING)); 
        try {
            const response = await API.get(`/admin/category/${id}`); 
            console.log(response)
            if (response.status === 200) {
                const {data} = response.data
                console.log(data)
                dispatch(setSingleCategory(data)); 
                dispatch(setStatus(STATUS.SUCCESS)); 
            } else {
                dispatch(setStatus(STATUS.ERROR)); 
            }
        } catch (err) {
            console.error("Error fetching single candidates:", err); 
            dispatch(setStatus(STATUS.ERROR)); 
        }
    };
}

//delete each category
export function deleteCategory(categoryId){
    return async function deleteCategoryThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await APIAuthenticated.delete(`/admin/category/${categoryId}`)
            console.log(response)
            if(response.status===200){
                dispatch(setDeleteCategoryById({categoryId}))
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

// update category
export function updateCategory(categoryData, id) {
    return async function updateCategoryThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const response = await APIAuthenticated.patch(`/admin/category/${id}`, categoryData);
            console.log(response)
            if (response.status === 200) {
                dispatch(setStatus(STATUS.SUCCESS));
                dispatch(setUpdateCategory({ id, categoryData })); // Use the correct category field
            } else {
                dispatch(setStatus(STATUS.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(STATUS.ERROR));
        }
    };
}





//party section

//add party
export function addParty(partyData){
    return async function addPartyThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
        try {
            const response = await APIAuthenticated.post('/admin/party',partyData,{
                headers : {
                    "Content-Type" : "multipart/form-data"
                }
            })
            if(response.status === 200){
                dispatch(setStatus(STATUS.SUCCESS))
            }else{
                dispatch(setStatus(STATUS.ERROR))
            }
        } catch (error) {
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

//fetch single party
export function fetchSingleParty(id) {
    return async function fetchSinglePartyThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING)); 
        try {
            const response = await API.get(`/admin/party/${id}`); 
            console.log(response)
            if (response.status === 200) {
                const {data} = response.data
                console.log(data)
                dispatch(setSingleParty(data)); 
                dispatch(setStatus(STATUS.SUCCESS)); 
            } else {
                dispatch(setStatus(STATUS.ERROR)); 
            }
        } catch (err) {
            console.error("Error fetching single party:", err); 
            dispatch(setStatus(STATUS.ERROR)); 
        }
    };
}

//delete each party
export function deleteParty(partyId){
    return async function deletePartyThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await APIAuthenticated.delete(`/admin/party/${partyId}`)
            console.log(response)
            if(response.status===200){
                dispatch(setDeletePartyById({categoryId}))
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

// update party
export function updateParty(partyData, id) {
    return async function updatePartyThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const response = await APIAuthenticated.patch(`/admin/party/${id}`, partyData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            console.log(response);
            if (response.status === 200) {
                dispatch(setStatus(STATUS.SUCCESS));
                dispatch(setUpdateParty({ id, partyData }));
            } else {
                dispatch(setStatus(STATUS.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(STATUS.ERROR));
        }
    };
}
