import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs:[],
    loading:false,
    error:null
    
};

export const dogSlice = createSlice({
    name:'dog',
    initialState,
    reducers:{
        setDogs(state, action){
            state.dogs = action.payload;
        },
        setDogById(state, action){
            const dog = state.dogs.find(d => d.id === action.payload.id);
            if (dog){
                Object.assign(dog, action.payload);
            }
        },

    },
});

export const {setDogById, setDogs} = dogSlice.actions;
export default dogSlice.reducer;