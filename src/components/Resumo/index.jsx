import { ContainerResumo, TotalQtd } from "./styles"
import { useState} from "react";

import { toast } from "react-toastify";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
import { useEffect } from "react";

const Resumo = () =>{
    const [amount, setAmount] = useState(0)
    const [total, setTotal] = useState(0)
    
    const {cart} = useContext(CartContext)

    useEffect(()=>{
        setAmount(cart.length)
        setTotal(cart.reduce((a,b) => a + b.price,0))

    },[cart])

    


    return (
        <ContainerResumo>
            <h2>Resumo do pedido</h2>
            <TotalQtd>
            <p>Quantidade: <span>{amount}</span> </p>
            <p>Total: <span>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(total)}</span></p>
            </TotalQtd>
            <button onClick={()=> {
                if(cart.length>0){
                    toast.success('Compra Realizada!')
                }
                else{
                    toast.warn('Adicione items!')
                }
                }}>Finalizar Compra</button>
        </ContainerResumo>
    )
}

export default Resumo