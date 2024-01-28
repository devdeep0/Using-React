import { configureStore } from "@reduxjs/toolkit";
import cartslice from "../Slice/Slice"

const store = configureStore({
    reducer:{
        cart : cartslice,
    }
})
export default store;