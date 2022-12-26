import { createContext, useState } from "react";


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


const CalcTaxes = ()=> TotalPrice() * 0.18

const TotalPrice = () => CartList.reduce((acc,el) => acc + el.cantidad * el.price,0)

const ClearCart=()=>{

return setCartList([])

}

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
         setCartList}}>
    {children}
    </CartContext.Provider>
);
};
