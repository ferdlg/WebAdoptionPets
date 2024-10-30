import { configureStore } from "@reduxjs/toolkit";
import dogReducer from "./Slices/dogSlice";
import catReducer from "./Slices/catSlice";


const store = configureStore({
    reducer:{
        dog: dogReducer, 
        cat: catReducer
    }
})
export default store;