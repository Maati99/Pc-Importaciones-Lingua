/* eslint-disable jsx-a11y/alt-text */
import { useAppContext } from "../Context/CartContext"
import { Link } from 'react-router-dom';

const Carrito = () => {
    const { cart, clear, removeProd, totalPrice } = useAppContext()
    console.log( cart )
if(cart.length >= 1){
  return(
<section className="container-fluid mt-2">
    <div className="card mt-3 bg-secondary bg-gradient">
      <button onClick={clear} className="btn btn-danger">LIMPIAR CARRITO</button>
        <div  className="container-fluid mt-2">
            <div  className="row">  
                    {cart.map(elem => 
                    <div key={elem.item.id} className="col mt-4">
                        <div className="card">
                            <button onClick={() => removeProd(elem.item.id)} className="btn btn-danger">Eliminar del Carrito</button>  
                            <img src={elem.item.urlPicture} className="card-img-top" height="300" width="500"/>
                                <div className="card-body">
                                    <h1 className="text-danger card-title">{elem.item.title}</h1>
                                    <h6 className="text-dark card-text">{elem.item.detail}</h6>
                                    <p className="card-text text-danger">${elem.item.price}</p>
                                    <p className="card-text text-danger">Cantidad: {elem.quantity}</p>
                                </div>
                        </div>
                    </div>)}
            </div>
        </div>
            <h4 className="text-warning mt-5">El precio total de su compra es de ${totalPrice()}</h4>
    </div>
</section>
    )
    }
    else{
        return(
        <div>
        <h1>CARRITO VACIO</h1>
        <Link to='/componentes'><button className="btn btn-danger"><h2>VOLVER A COMPRAR</h2></button></Link>
        </div>
    )}
}
export default Carrito