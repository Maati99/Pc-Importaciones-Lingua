/* eslint-disable jsx-a11y/alt-text */
import { NavLink } from "react-router-dom";

function ProductsDom ({ items }){
    return(
    items.map((elem) =>( 
                <div key={elem.id} className="col-xxl mt-4">
                    <div className="card card-block">
                        <img src={elem.pictureUrl} className="card-img-top" height="300" width="500"/>
                        <div className="card-body">                 
                            <h1 className="text-danger card-title">{elem.title}</h1>
                            <p className="card-text text-danger">${elem.price}</p>
                            <NavLink activeClassName="d-none" className="d-block btn btn-dark" to={`/componentes/${elem.id}`}>Detalle Especifico</NavLink>
                            <NavLink to={`/detalle/${elem.idDetail}`} className='btn btn-success mt-5'>Ir a comprar</NavLink>
                        </div>
                    </div>
                </div>
        )))
};


export default ProductsDom