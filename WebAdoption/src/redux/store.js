import { configureStore } from "@reduxjs/toolkit";
import dogReducer from "./Slices/dogSlice";
import catReducer from "./Slices/catSlice";
import cartReducer from "./Slices/cartSlice"


const store = configureStore({
    reducer:{
        dog: dogReducer, 
        cat: catReducer,
        cart: cartReducer
    }
})
export default store;