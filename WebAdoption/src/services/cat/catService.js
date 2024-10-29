export class CatService{
    constructor(){
        this.baseUrl = import.meta.env.VITE_CAT_API_URL;
    }

    async getCats(){
        try{
            const apiKey = import.meta.env.VITE_CAT_API_KEY;
            const request = await fetch(`${this.baseUrl}search?has_breeds=true&limit=10`,{
                method : 'GET', headers :{ 'x-api-key': apiKey},
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
    async getCatById(id){
        try{
            const response = await fetch(`${this.baseUrl}${id}`)
            .catch((e)=>{
                console.log(`Error: ${e.message}`);
            });
            const data = await response.json();
            return data;
        }catch (e){
            console.log(`Error:${e.message}`);
            throw e;
        } finally{
            console.log(`Finalizado`);
        }
    }
}