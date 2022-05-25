import { createContext, useEffect, useState } from "react";



export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('@Kenzie:Cart')) || [])
    

   useEffect(()=> {
    localStorage.setItem('@Kenzie:Cart', JSON.stringify(cart))
   },[cart])


    const addToCart = (product) => {
        setCart([...cart, product])       
        
    }
    
    const removeFromCart = (id) =>{    
        const list = cart.filter((product) => product.id !== id)
        setCart(list)
              
    }
    
    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}


