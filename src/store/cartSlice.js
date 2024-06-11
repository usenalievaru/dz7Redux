import {createSlice} from "@reduxjs/toolkit";

const cartSlice= createSlice(
    {
        name:'cart',
        initialState:[],
        reducers:{
            addGood:(state, action) =>{
                state.push(action.payload)
            }
        }
    }
)
export const cartReducer= cartSlice.reducer
export const {addGood}= cartSlice.actions