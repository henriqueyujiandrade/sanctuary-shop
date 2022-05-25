import { Route, Switch } from "react-router-dom";


import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

export default function Routes(){

    return (
        
        <Switch>
            <Route exact path='/' ><ProductPage/></Route>
            <Route exact path='/cart' ><CartPage/></Route>            
        </Switch>
        
    )
}