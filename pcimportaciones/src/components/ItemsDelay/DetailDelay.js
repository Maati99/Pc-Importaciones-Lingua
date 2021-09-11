import { ProdDetail } from "../Container/ItemDetailConteiner";

const getItems = new Promise ((resolve)=>{
    setTimeout(() =>{
        resolve(ProdDetail)
    },2000);
    
})

console.log(getItems)

export default getItems