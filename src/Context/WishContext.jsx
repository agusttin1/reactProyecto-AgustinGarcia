import { createContext,useState } from "react";

export const WishContext = createContext()

const WishContexProvider = ({children}) =>{

    const [wish,setWish] = useState([])

const QtyInWish = () =>wish.reduce((acc,el) => acc + el, wish.length)
    const Existe = (id) => wish.some(WishProduct => WishProduct.id === id)

    const addToWishList = (item) => {

        if(!Existe(item.id)){
            setWish([...wish, item])
        }else{
            setWish([...wish])
        }
};
    return(
        <>

        <WishContext.Provider value={{addToWishList,wish,QtyInWish}}>
            {children}
        </WishContext.Provider>
        </>
    )
}

export default WishContexProvider
