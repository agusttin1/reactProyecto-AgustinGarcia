
import {ContCarritoVacio, PmsjErr,StyledLink } from "../styles/components/Cart.Elements"
import {MdOutlineRemoveShoppingCart} from "react-icons/md"



const CartEmpty = () =>{
return(
<ContCarritoVacio>
<MdOutlineRemoveShoppingCart style={{color:'var(--color-primary)' ,  fontSize:'200px'}}/>
<PmsjErr>Carrito Vacio</PmsjErr>
<PmsjErr>Agregue algunos productos para poder comprar</PmsjErr>
<StyledLink to='/'>Ir a comprar</StyledLink>
</ContCarritoVacio>

)

}
export default CartEmpty
