import { useEffect, useState } from "react";
import { DogService } from "../../services/dog/dogService";
import { useSelector, useDispatch } from "react-redux";
import { setDogById, setDogs } from "../../redux/Slices/dogSlice";
import Card from "../../components/card";
import '../../assets/styles/pages/_pets.css'; 

const Dogs = ()=>{

    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dog.dogs);
    const dogService = new DogService;

    useEffect(()=>{
        const fetchDogs = async()=>{
            try{
                const data = await dogService.getDogs();
                dispatch(setDogs(data));
            }catch(e){
                console.error('Error fetching dogs:', e);
            }
        };
        fetchDogs();
    },[dispatch]);

    const handleSelect = async(dogId) =>{
        try{
            const dataById = await dogService.getDogById(dogId);
            dispatch(setDogById(dataById));
        }catch(e){
            console.error("Error fetching dog by id:", e);
        }
        
    }
    return(
        <>
        <div className="page__dogs">
            {dogs.map(dog =>(
                <Card
                key={dog.id}
                imageUrl={dog.url}
                onOpenModal={()=>handleSelect(dog.id)}
                dataPet={dog}
                />
            ))}
        </div>
        </>
    )
};

export default Dogs;