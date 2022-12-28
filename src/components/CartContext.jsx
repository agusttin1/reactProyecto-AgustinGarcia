import { createContext, useState } from "react";
import  toast  from "react-hot-toast";


export const CartContext = createContext();


export const CartContextProvider = ({ children }) => {

    const [CartList, setCartList] = useState([]);


const Existe = (id) => CartList.some(verifyId => verifyId.id === id)

const QtyInCart = () => CartList.reduce((acc,el)=> acc + el.cantidad, 0) 

const TotalPerItem = (id) =>{
    let index = CartList.map(item => item.id).indexOf(id)
    let calc = CartList[index].price * CartList[index].cantidad

    return calc

}


const TotalWithTax = () =>{
  return (TotalPrice() + CalcTaxes()).toFixed(2)

}

const CalcTaxes = ()=> TotalPrice() * 0.18

const TotalPrice = () => CartList.reduce((acc,el) => acc + el.cantidad * el.price,0)

const ClearCart=()=> setCartList([])



const addToCart = (item, qty) => {

    if(Existe(item.id)){
        setCartList(CartList.map(TheSame =>{
            return TheSame.id === item.id ? {...TheSame , cantidad: TheSame.cantidad + qty} : TheSame
        }))
    }else{

        setCartList([
                ...CartList,
                {
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    price: item.price,
                    cantidad: qty,
                },
                ]);

    }

};


const deleteThis = (id) => {
    let refreshArray = CartList.filter((item) => item.id !== id);
    setCartList(refreshArray);
};
const NotifyAdd = (qty) =>

    toast.success(
      `Se ha Agregado ${
        qty == 1 ? `${qty} producto` : ` ${qty} productos`
      } al carrito`,
      {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
        duration: 1000,
      }
      );
    



      
      
return (
    <CartContext.Provider value={{ 
         CartList,
         addToCart, 
         deleteThis,
         ClearCart,
         TotalPerItem,
         QtyInCart,
         TotalPrice,
         CalcTaxes,
         setCartList,
         NotifyAdd,
         TotalWithTax}}>
    {children}
    </CartContext.Provider>
);
};
