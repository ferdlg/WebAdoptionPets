export class DogService {
    constructor(){
        this.baseUrl = import.meta.env.VITE_DOG_API_URL;
    }

    async getDogs(){
        try{
            const apiKey = import.meta.env.VITE_DOG_API_KEY;
            const request = await fetch(`${this.baseUrl}?limit=10`,{method:'GET', headers:{
                'x-api-key': apiKey,
            },
        });
            
            if(!request.ok){
                throw new Error(`Error: ${response.statusText}`);
            }
            console.log(request);

            const data = await  request.json();
            console.log('Data: ',data);
            return data;
            
        } catch(e){
            throw new Error(`Status Code ${e}`);
        };
    }

    async getDogById(id){
        try{
            const response = await fetch(`${this.baseUrl}${id}`)
            .catch((e)=>{
                console.log(`Error: ${e.message}`);
            });
            const data = await response.json;
            return data;
        }catch (e){
            console.log(`Error:${e.message}`);
            throw e;
        } finally{
            console.log(`Finalizado`);
        }
    }
}