import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { ProdDetail } from '../Container/ItemDetailConteiner';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [cambioB, setCambioB] = useState(false)
    const { addItem } = useContext(CartContext)

    const handlerSuma = () => {
      if(count < stock){
      setCount(count + 1);
      }
    };
    const handlerResta = () => {
      if(count > initial){
        setCount(count - 1);
      }
    };
    const handlerOnAdd = () => {
      onAdd (count)
      addItem(ProdDetail, count)
      setCount (initial)
      setCambioB(true)
    }
    
    return (
      <div className="conteiner">
        <button onClick={handlerResta} className="btn btn-info m-2">-</button>
        <label className="text-success">{count}</label>
        <button onClick={handlerSuma} className="btn btn-info m-2">+</button>
        {
          cambioB ?  
          <Link to='/cart'>
          <div><button className="btn btn-success">FINALIZAR COMPRA</button></div>
          </Link>
          : <div><button onClick={handlerOnAdd} className="btn btn-success">AGREGAR</button></div>
        }
          
       
        
      </div>
    );
  }

  export default ItemCount