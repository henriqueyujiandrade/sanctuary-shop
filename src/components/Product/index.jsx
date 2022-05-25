
import { Li } from "./styles"


import uuid from 'react-uuid'
import { useContext } from "react"
import { CartContext } from "../../Providers/cart"


const Product = ({product}) => {

    const {addToCart} = useContext(CartContext)

const {img,name,description, price} = product
const id = uuid()
const newProduct = {img, name, description, price,id}

return(

    <Li>
        <figure>
            <img src={product.img} alt='armadura'/>
        </figure>
        <div className="infos">
            <div className="title">
                <h2>{product.name}</h2>
            </div>
            <div className="description">
                <p>{product.description}</p>
            </div>        
            <span>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(product.price)}</span>
        </div>
        <div className="buttonDiv">
            <button  onClick={() => addToCart(newProduct)}>Adicionar ao Carrinho</button>
        </div>
    </Li>
)

}

export default Product