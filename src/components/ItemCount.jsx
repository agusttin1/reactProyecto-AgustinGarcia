import { useState,useEffect } from "react";

import {BtnAdd,BtnSub,ContBtnDetail,Count} from "../styles/components/ItemCount.Elements";
import { ButtonDetail } from "../styles/components/ItemDetailContainer.Elements";

 const ItemCount = ({initial ,onAdd,stock}) =>{
    const[count,setCount] = useState(initial)

    const decrease = () =>{

            setCount(count - 1)
    }
    
    const increase = () =>{
    
            setCount(count + 1)
    }


    useEffect(()=>{
        setCount(initial)
    },[initial])

    return(
    
    <ContBtnDetail>
 <BtnSub disabled={count == 0} onClick={decrease}>-</BtnSub>
 <Count>{count}</Count>
 <BtnAdd disabled={ count >= stock } onClick={increase}>+</BtnAdd>

 <ButtonDetail disabled={stock <= 0 || count == 0} onClick={()=>onAdd(count)}>Añadir al carrito</ButtonDetail> 
  
    
    </ContBtnDetail>

    )

}

export default ItemCount
