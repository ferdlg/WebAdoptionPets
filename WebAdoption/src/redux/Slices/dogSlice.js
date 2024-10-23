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
            state.dogs.find(d => d.id === action.payload.id);
        },
        addToAdopted(state, action){
            const dog = state.dogs.find(d => d.id === action.payload.id);
            if(dog){
                dog.adopted = !dog.adopted;
            }
        },
    },
});

export const {setDog, setDogs, addToAdopted} = dogSlice.actions;
export default dogSlice.reducer;