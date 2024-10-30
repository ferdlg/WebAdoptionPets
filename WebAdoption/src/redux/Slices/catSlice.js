import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats:[],
    loading:false,
    error:null
    
};

export const catSlice = createSlice({
    name:'cat',
    initialState,
    reducers:{
        setCats(state, action){
            state.cats = action.payload;
        },
        setCatById(state, action){
            state.cats.find(d => d.id === action.payload.id);
        },
        
    },
});

export const {setCats, setCatById} = catSlice.actions;
export default catSlice.reducer;