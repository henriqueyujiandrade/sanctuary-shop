
import { LiCart } from "./styles"



import { FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";



const CartProduct = ({cartProduct}) => {
    const {removeFromCart} = useContext(CartContext)
    
    return(
    
        <LiCart id={cartProduct.id}>
            <figure>
                <img src={cartProduct.img} alt='armadura'/>
            </figure>
            <div className="infos" id={cartProduct.id}>
                <div className="title">
                    <h2>{cartProduct.name}</h2>
                </div>
                <div className="description">
                    <p>{cartProduct.description}</p>
                </div>        
                <span>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(cartProduct.price)}</span>
            </div>
            <div className="buttonDiv">
                <button onClick={() => removeFromCart(cartProduct.id)} ><FaTrash/></button>
            </div>
        </LiCart>
    )
    
    }
    
    export default CartProduct