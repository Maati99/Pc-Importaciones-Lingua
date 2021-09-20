import { useState } from "react"
import { useContext } from "react"
import { createContext } from "react"

const CartContext = createContext()
export const useAppContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
     console.log(cart)

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
           const CartUpdate = [...cart];
           CartUpdate.forEach((element) => {
               if(element.item.id === item.id){
                    element.quantity = element.quantity + quantity
               }
           });
           setCart(CartUpdate)
        }else{
             setCart([...cart,{item,quantity}])
        }
    }

   
       const isInCart = (id) => {
           return cart.find(element => element.item.id === id)
       }
   

    const clear = () => {
        setCart([])
    }

    const removeProd = (itemId) => {
        const cartFilter = cart.filter(elem => elem.item.id !== itemId )
        return setCart(cartFilter)
    }

    const totalPrice =()=>{
        return cart.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.price)), 0) 
      }
    
    const cartCant = () => {
        return cart.reduce( (acum, valor)=> acum + valor.quantity, 0) 
      }
    
    return(
        <CartContext.Provider value={{cart, addItem, clear, removeProd, totalPrice, cartCant}}>
                {children}
        </CartContext.Provider>    
    )
}

export default CartContextProvider