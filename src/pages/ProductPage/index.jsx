
import { useContext } from "react";
import Header from "../../components/Header"
import Product from "../../components/Product"
import { ProductContext } from "../../Providers/product";
import { Container } from "./styles"

import { ContainerList, Ul } from "./styles";





const ProductPage = () => {
    const {product} = useContext(ProductContext)

    return(
        <Container>
        <Header/>
        <ContainerList>
        <Ul>
            {product.map((prd)=> <Product key={prd.id} product={prd}  />)}
        </Ul>
        </ContainerList>
        
        
        </Container>
    )
        
}

export default ProductPage