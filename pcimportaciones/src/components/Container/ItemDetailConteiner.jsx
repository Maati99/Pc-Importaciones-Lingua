/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import ItemDetail from '../Items/ItemDetail';
import { useParams } from 'react-router-dom';
import getItems from '../ItemsDelay/DetailDelay';

export const ProdDetail =[
{id: 1, title: `Placa de video`, price: 90000, urlPicture:`https://a9u7r3q3.stackpathcdn.com/media/catalog/product/cache/06072195fbc7592cd9b732dacf23ebb1/d/u/dual_3060_ti.png`, detail: `Geforce RTX 3060 Ti 8 gb`},
{id: 2, title: `Procesador`, price: 50000, urlPicture:`https://imgsob.s3.amazonaws.com/public/ryzen-7-3700X-1.jpg`, detail: `Ryzen 7 3700X 3.6 Ghz`},
{id: 4, title: `Fuente de poder`, price: 20000, urlPicture:`https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18490_Fuente_Corsair_CV650_650W_80_Plus_Bronze_No_incluye_cable_de_poder_543ac7f0-grn.jpg`, detail: `Fuente Corsair CV650 80 Plus Bronze 650w`},
{id: 3, title: `Memoria Ram`, price: 5000, urlPicture:`https://http2.mlstatic.com/D_NQ_NP_836534-MLA33052692087_112019-O.jpg`, detail: `Hyper X Fury Ddr4 8 gb 3200 Mhz`},
]

function ItemDetailConteiner() {
    const  [ProdDetail, setProdDetails] = useState({})
    const [loading, setloading] = useState (true)
  const { id } = useParams()
    useEffect(()=>{
        getItems.then ((componentes) => setProdDetails(componentes.find( (componente) => componente.id === parseInt(id))));setloading(false)
}, [id]); 
    return (
    <>
                    {loading ? <div className="container text-warning"><h2>CARGANDO PRODUCTOS</h2><img src="https://i.gifer.com/ZZ5H.gif" height="80" width="78"/></div> :
                    <h1 className="text-warning">DETALLE<ItemDetail ProdDetail = {ProdDetail}/></h1> }
     </>   
    )

}

export default ItemDetailConteiner


