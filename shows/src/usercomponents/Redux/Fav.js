import {createSlice} from  '@reduxjs/toolkit'
    const val = localStorage.getItem("fav")
const initialState ={
    fav : [val] || []
}

const favSlice = createSlice({
    name:"favorites",
    initialState,
    reducers:{
        setFav:(state,action)=>{
            state.fav = action.payload
            let list  = []
            list.push(state.fav)
            localStorage.setItem("fav", list);
        }
    }
})
export const {setFav} = favSlice.actions
export default favSlice.reducer