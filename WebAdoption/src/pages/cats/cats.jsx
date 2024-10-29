import { useEffect } from "react";
import { CatService } from "../../services/cat/catService";
import { useSelector, useDispatch } from "react-redux";
import { setCatById, setCats } from "../../redux/Slices/catSlice";
import Card from "../../components/card";

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
                console.error('Error fetching cats:', e);
            }
        };
        fetchCats();
    },[dispatch]);

    const handleSelect = async(catId) =>{
        try{
            const dataById = await catService.getCatById(catId);
            dispatch(setCatById(dataById))
        }catch(e){
            console.error("Error fetching cat by id:", e);
        }
    }

    return(
        <>
        <div className="page__cats">
            {cats.map(cat =>(
                <Card
                key={cat.id}
                imageUrl={cat.url}
                onOpenModal={()=>handleSelect(cat.id)}
                dataPet={cat}
                />
            ))}
        </div>
        </>
    )
};

export default Cats;