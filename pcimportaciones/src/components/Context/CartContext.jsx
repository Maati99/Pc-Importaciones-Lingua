import { useState } from "react"
import { createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

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

    const removeItem = (itemId) => {
        const cartFilter = cart.filter(elem => elem.item.id !== itemId )
        return setCart(cartFilter)
    }

    return(
        <CartContext.Provider value={{addItem, clear, removeItem}}>
                {children}
        </CartContext.Provider>    
    )
}
