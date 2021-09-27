/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import ItemDetail from '../Items/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from "../../firebase";

function ItemDetailConteiner() {
    const  [ProdDetail, setProdDetails] = useState({})
    const [loading, setloading] = useState (true)
    const { idDetail } = useParams()
// Logica del detalle
    useEffect(()=>{
        const dataBase = getFirestore()
        dataBase.collection('componentesDetail').doc(idDetail).get()
        .then(resp => {
            if(resp.exists){
                setProdDetails({id: resp.id, ...resp.data()})
            }
        } )
        .catch(error=>console.log(error))
        .finally(()=> setloading(false))
}, [idDetail]);
    return (
    <>
                    {loading ? <div className="container text-warning"><h2>CARGANDO PRODUCTOS</h2><img src="https://i.gifer.com/ZZ5H.gif" height="80" width="78"/></div> :
                    <h1 className="text-warning">DETALLE<ItemDetail ProdDetail = {ProdDetail}/></h1> }
     </>
    )

}

export default ItemDetailConteiner


