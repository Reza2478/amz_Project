import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cluster:'all'
}

const filterSilce= createSlice({
    name:'filter',
    initialState,
    reducers:{
        changecluster:(state,action)=>{
            state.cluster=action.payload
        }
    }
})

export default filterSilce.reducer;
export const {changecluster} =filterSilce.actions;
