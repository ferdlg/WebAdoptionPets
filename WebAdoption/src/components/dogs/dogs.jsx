import { useEffect } from "react";
import { DogService } from "../../services/dog/dogService";
import { useSelector, useDispatch } from "react-redux";
import { setDog, setDogs } from "../../redux/Slices/dogSlice";


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
                throw new Error('Error fetching dogs:', e);
            }
        };
        fetchDogs();
    },[dispatch])
    
    console.log('dogs:',dogs)
    return(
        <>
        <div>
            {dogs.map(dog =>(
            <img key={dog.id} src={dog.url} />
            ))}
        </div>
        </>
    )
};

export default Dogs;