import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../globals/enumStatus/Status";
import { API } from "../http";


const candidateSlice = createSlice({
    name: "candidate",
    initialState: {
        data: [],
        status: STATUS.LOADING,
        singleCandidate:null
    },
    reducers: {
        setCandidateData(state, action) {
            state.data = action.payload; // This is fine because Redux Toolkit uses Immer under the hood
        },
        setStatus(state, action) {
            state.status = action.payload; // Also fine
        },
        setSingleCandidate(state,action){
            state.singleCandidate=action.payload
        }
    }
});

export const { setCandidateData, setStatus,setSingleCandidate } = candidateSlice.actions;
export default candidateSlice.reducer;


export function fetchAllCandidate() {
    return async function fetchAllCandidateThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING)); 
        try {
            const response = await API.get("/admin/candidate"); 
            console.log(response)
            if (response.status === 200) {
                const { data } = response.data; 
                console.log(data)
                dispatch(setCandidateData(data)); 
                dispatch(setStatus(STATUS.SUCCESS)); 
            } else {
                dispatch(setStatus(STATUS.ERROR)); 
            }
        } catch (err) {
            console.error("Error fetching candidates:", err); 
            dispatch(setStatus(STATUS.ERROR)); 
        }
    };
}


export function fetchCandidateByParty(partyId) {
    return async function fetchCandidateByPartyThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const response = await API.get(`/admin/candidate/party/${partyId}`); // Use path parameter for partyId
            if (response.status === 200) {
                const { data } = response.data;
                dispatch(setCandidateData(data))
                dispatch(setStatus(STATUS.SUCCESS))
                
            } else {
                dispatch(setStatus(STATUS.ERROR));
            }
        } catch (err) {
            console.error("Error fetching candidates:", err);
            dispatch(setStatus(STATUS.ERROR));
        }
    };
}


export function fetchCandidateByCategory(categoryId) {
    return async function fetchCandidateByCategoryThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const response = await API.get(`/admin/candidate/category/${categoryId}`); // Use path parameter for partyId
            if (response.status === 200) {
                const { data } = response.data;
                dispatch(setCandidateData(data))
                dispatch(setStatus(STATUS.SUCCESS))
            } else {
                dispatch(setStatus(STATUS.ERROR));
            }
        } catch (err) {
            console.error("Error fetching candidates:", err);
            dispatch(setStatus(STATUS.ERROR));
        }
    };
}



export function fetchSingleCandidate(id) {
    return async function fetchSingleCandidateThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING)); 
        try {
            const response = await API.get(`/admin/candidate/${id}`); 
            console.log(response)
            if (response.status === 200) {
                const {data} = response.data
                console.log(data)
                dispatch(setSingleCandidate(data)); 
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
