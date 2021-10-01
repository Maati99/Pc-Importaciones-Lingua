import ProductsDom from '../Items/itemList'
import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";

function ItemListContainer () {

    const  [items, setItems] = useState([])
    const {id} = useParams()
// Logica del catalogo
    useEffect(()=>{
        const dataBase = getFirestore()
        const dbQuery = dataBase.collection('componentes')
            const queryCondition = id ? dbQuery.where('id', '==', id)
            :
            dbQuery
            queryCondition.get()
            .then(data => {
                if(data.size===0){
                    console.log('Nos encontramos sin stock')
                }
                setItems( data.docs.map(item => ({ id: item.data().id, ...item.data() })))
            })

    }, [id]);
return(
    <section>
        <h1 className="text-warning mt-3">COMPONENTES Y PERIFERICOS</h1>
        <div  className="container mt-2">
            <div  className="row">
                <ProductsDom items = { items }/>
            </div>
        </div>
    </section>
    );
}

export default ItemListContainer