import { Content, HeaderDefault } from "./styles"
import { FiShoppingCart } from "react-icons/fi";
import { useState} from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
import { useEffect } from "react";

const Header = () => {
    const [amount, setAmount] = useState(0)
    
    const {cart} = useContext(CartContext)

    useEffect(()=>{
        setAmount(cart.length)


    },[cart])

    return (
        <HeaderDefault>
            <Content>
            <Link to='/'>
            <section>
                <figure>
                    <img className="logoimg" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c5bb225-aaad-4c4b-a8d0-200f9e9c2b68/d8stqh1-fa896836-56dc-491e-8f65-2f5ea8941c8f.png/v1/fill/w_600,h_623,strp/sendai_athena_con_armadura_by_pallasatheneanohope_d8stqh1-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjNWJiMjI1LWFhYWQtNGM0Yi1hOGQwLTIwMGY5ZTljMmI2OFwvZDhzdHFoMS1mYTg5NjgzNi01NmRjLTQ5MWUtOGY2NS0yZjVlYTg5NDFjOGYucG5nIiwiaGVpZ2h0IjoiPD02MjMiLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzJjNWJiMjI1LWFhYWQtNGM0Yi1hOGQwLTIwMGY5ZTljMmI2OFwvcGFsbGFzYXRoZW5lYW5vaG9wZS00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.ti5Y488elKmHEookLuRDwLSPvMob9UeGnAzkrIiEkcY" alt="logo"/>
                </figure>
                <h1>Sanctuary<span className="dot">.</span>Shop</h1>
            </section>
            </Link>
            
            <div className="cart">
                <div className="cartContent">
                <Link to='/cart'>
                    <div className="cartIcon">
                        <FiShoppingCart/>                
                    </div>
                    </Link>
                    <span className="qtd">{amount}</span>
                </div>               
            </div>
            
        </Content>
        </HeaderDefault>
    )
}

export default Header