import {createSlice} from  '@reduxjs/toolkit'
    const val = JSON.parse(localStorage.getItem("fav"))
const initialState = val || []


const favSlice = createSlice({
    name:"favorites",
    initialState,
    reducers:{
        setFav:(state,action)=>{
            
            state.push(action.payload)
            
            localStorage.setItem("fav", JSON.stringify(state));
        }
    }
})
export const {setFav} = favSlice.actions
export default favSlice.reducer