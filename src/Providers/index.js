import { CartProvider } from "./cart"
import { ProductProvider } from "./product"


const Providers = ({children}) => {

    return (
        <ProductProvider>
            <CartProvider>
                {children}
            </CartProvider>

        </ProductProvider>
    )
}

export default Providers