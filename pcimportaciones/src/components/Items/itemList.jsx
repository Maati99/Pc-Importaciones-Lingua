/* eslint-disable jsx-a11y/alt-text */
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';


function ProductsDom ({ items }){
    const [cambioB, setCambioB] = useState(true)
    const handlerChange = () => {
        setCambioB(false)
    }
    return(
    items.map((elem) =>(
                <div key={elem.id} className={ cambioB ? "col-lg-4 mb-4" : "col"}>
                    <div className="card">
                        <img src={elem.pictureUrl} className="card-img-top" height="300" width="500"/>
                        <div className="card-body">
                            <h1 className="text-danger card-title">{elem.title}</h1>
                            <p onClick={handlerChange} className="card-text text-danger">${elem.price}</p>
                            <NavLink  activeClassName="d-none" onClick={() => alert ('PULSAR EN EL PRECIO PARA ACOMODAR LA TARJETA')} className="d-block btn btn-dark" to={`/componentes/${elem.id}`}>Detalle Especifico</NavLink>
                            <NavLink to={`/detalle/${elem.idDetail}`} className='btn btn-success mt-5'>Ir a comprar</NavLink>
                        </div>
                    </div>
                </div>
        )))
};


export default ProductsDom