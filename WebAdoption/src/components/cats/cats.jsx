import { useEffect } from "react";
import { CatService } from "../../services/cat/catService";
import { useSelector, useDispatch } from "react-redux";
import { setCatById, setCats } from "../../redux/Slices/catSlice";


const Cats = ()=>{

    const dispatch = useDispatch();
    const cats = useSelector(state => state.cat.cats);
    const catService = new CatService;

    useEffect(()=>{
        const fetchCats = async()=>{
            try{
                const data = await catService.getCats();
                dispatch(setCats(data));
            }catch(e){
                throw new Error('Error fetching cats:', e);
            }
        };
        fetchCats();
    },[dispatch])
    
    console.log('cats:',cats)
    return(
        <>
        <div>
            {cats.map(cat =>(
            <img key={cat.id} src={cat.url} />
            ))}
        </div>
        </>
    )
};

export default Cats;