import { createContext, useState } from "react";
import defaultProducts from "../../db/db";


export const ProductContext = createContext()

export const ProductProvider = ({children}) => {
    const [product, setProduct] = useState(defaultProducts)

    return(
        <ProductContext.Provider value={{product}}>
            {children}
        </ProductContext.Provider>
    )
}