
import {useContext} from "react"
import { CartContext } from "./CartContext"
import { ContenedorCart } from "../styles/components/Cart"
import CartEmpty from "./CartEmptyContainer"


const Cart = () =>{
    const {CartList,deleteThis,ClearCart,TotalPrice} = useContext(CartContext)


    return CartList.length > 0 ?(
       <ContenedorCart>

        {  CartList.map(item =>
        
        <div className="ContCart">
        <div className="ContTitulo">
            <h1>MI CARRITO</h1>
        </div>
<div className="Carrito" style={{display:'flex',alignItems:'center'}}>
<div className="div" key={item.id} style={{display:'flex'}}>

<div className="IMAGE" style={{height:'200px', width:'200px'}}>
<img style={{height:'100%', width:'100%', objectFit:'cover'}}src={item.image} alt="" />
</div>
<div className="nombre">
<p>{item.name}</p>
</div>
<div className="cantidad">
<p>{item.cantidad}</p>
</div>
<div className="subtotal">
<p>Subtotal:{TotalPrice()}</p>
</div>
<button onClick={() => deleteThis(item.id)}>borrar</button>
</div>
</div>
         </div>
    
     
 

     )}
        
       </ContenedorCart>
    
    ):(
        <CartEmpty/>
    )
}


{/* <button onClick={()=>ClearCart()}>Limpiar all</button> */}
export default Cart
