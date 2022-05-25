
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import CartProduct from "../../components/CartProduct";
import Header from "../../components/Header"
import Resumo from "../../components/Resumo";
import { CartContext } from "../../Providers/cart";
import { ContainerCart, ContainerCartMain, ContainerMain, Ulcart, } from "./styles";


const CartPage = () => {
    const {cart} = useContext(CartContext)

    return (
        <ContainerCart>
            <Header/>
            <ContainerCartMain>
            <ContainerMain>
                <Ulcart>
                    {cart.map((prd,index)=> <CartProduct key={index} cartProduct={prd}  />)}
                </Ulcart>
            </ContainerMain>
            <Resumo/>
            </ContainerCartMain>
            <ToastContainer/>
        </ContainerCart>
    )
}

export default CartPage


