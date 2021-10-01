/* eslint-disable jsx-a11y/alt-text */
import { useAppContext } from "../Context/CartContext"
import { Link } from 'react-router-dom';
import { useState } from "react";
import { getFirestore } from "../../firebase";
import firebase from "firebase/app"

const Carrito = () => {
    const { cart, clear, removeProd, totalPrice } = useAppContext()

    const initial = {
        name: '',
        phone:'',
        email:'',
    }

    const [clientDate, setClientDate] = useState(initial)

    function handlerChange (e){
        setClientDate(
            {
                ...clientDate,
                [e.target.name]: e.target.value
            }
        )
    }

    function handlerSubmit (e){
        e.preventDefault()
        const clientOrder = {
            buyer: clientDate,
            items: cart,
            total: totalPrice(),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        }
        const dataBase = getFirestore()
        const orderClient = dataBase.collection('orders')
        orderClient.add(clientOrder)
        .then(order => alert(`la orden de compra es: ${order.id}`))
        .catch(error => console.log(error))
        .finally(()=>{
            setClientDate(initial)
            clear()
        })
    }

if(cart.length >= 1){
  return(
<section className="container-fluid mt-2">
      <button onClick={clear} className="btn btn-danger">LIMPIAR CARRITO</button>
                    <div className="overflow-auto mt-4 mb-5 border border-light">
                        <table className="bg-white mb-0 table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Cantidad</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Descripción</th>
                                    <th>Eliminar del carrito</th>
                                    </tr>
                            </thead>
                    {cart.map(elem =>
                            <tbody key={elem.item.id} >
                                <tr>
                                    <td>{elem.quantity}</td>
                                    <td><img src={elem.item.urlPicture}  height="80" width="80"/><div>{elem.item.title}</div></td>
                                    <td><div>${elem.item.price}</div></td>
                                    <td><div><p>{elem.item.detail}</p></div></td>
                                    <td><div><button onClick={() => removeProd(elem.item.id)} className="btn btn-danger">X</button></div></td>
                                </tr>
                            </tbody>)}
            </table>
            <h4 className="text-warning mt-5">El precio total de su compra es de ${totalPrice()}</h4>
    </div>
        <form onChange={handlerChange} onSubmit={handlerSubmit}>
                <input className="m-3" placeholder="Nombre y apellido" type="text" name="name" value={clientDate.name}/>
                <input className="m-3" placeholder="Telefono" type="text" name="phone" value={clientDate.phone} />
                <input className="m-3" placeholder="Email" type="email" name="email" value={clientDate.email} />
                <div><button className="btn btn-success">Finalizar compra</button></div>
        </form>
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