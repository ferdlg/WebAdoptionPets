import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    pets:[],
    loading:false,
    error:null
};

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        setPets(state, action){
            state.pets = action.payload;
        },
        addToAdopted(state, action) {
            const petExists = state.pets.find(pet => pet.id === action.payload.id);
            if (!petExists) {
                state.pets.push({ ...action.payload, adopted: true });
            }
        },
        deleteFromAdopted(state,action){
            const pet = state.pets.find(d => d.id === action.payload.id);
            if(pet)
            {
                pet.adopted = false;
            }
        }
    }
});

export const {setPets, deleteFromAdopted, addToAdopted} = cartSlice.actions;
export default cartSlice.reducer;
