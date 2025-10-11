import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    searchValue : ""
}
const searchSlice = createSlice({
name:"search",
initialState,
reducers:{
    setValue:(state,action)=>{
        state.searchValue = action.payload;
    }
}


})
export const { setValue} = searchSlice.actions;
export default searchSlice.reducer;