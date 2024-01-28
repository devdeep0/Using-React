import {createSlice} from '@reduxjs/toolkit'

const initialState = [];
const cartslice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        add(state, action){
            state.push(action.payload)
        }
    }
})

export const {add} = cartslice.actions;
export default cartslice.reducer