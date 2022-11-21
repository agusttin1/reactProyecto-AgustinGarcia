import { CiShoppingCart } from "react-icons/ci";
import "../App.css"


const Carrito = () =>{
    return(
        <div className="carrito">
            <CiShoppingCart className="iconsCar"/>
            <span className="contadorCarrito">89</span>
          </div>
    )
}



export default Carrito
