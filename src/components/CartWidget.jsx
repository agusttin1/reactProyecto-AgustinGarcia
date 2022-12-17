


import { NoContador,CarritoCont,Icon, ContadorCart } from "../styles/components/CartWidget";

import { useContext } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";


import { CartContext } from "./CartContext";
const Carrito = () =>{

    const {QtyInCart} = useContext(CartContext)
    return(


        
        <CarritoCont>
            <Link to="/cart">
            <Icon />

            </Link>
{

QtyInCart() === 0 ? <NoContador></NoContador> : <ContadorCart>({QtyInCart()}) </ContadorCart>  

}
            
            



        
          </CarritoCont>
    )
}



export default Carrito
