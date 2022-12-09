import { Img,CardDetail,CardImage,ContCard,DetailCont,Title ,Description,Price,ContFooterDetail,SectionCaract,ContenedorCaract,ContenedorTitulo,ContenedorIndices,I,P,ContStock,BtnToCart} from "../styles/components/ItemDetailContainer.js";
import  ItemCount from "./ItemCount.jsx";
import { useState } from "react";
import Loader from "./Loader.jsx";
import { Link } from "react-router-dom";



const ItemDetail = ({items}) =>{
    const [itemCount,setItemCount] = useState(0)
    const onAdd = (qty)=>{
        alert(`compraste ${qty} unidades.`)
        setItemCount(qty)
    
    }
       
return(
 <>
    {
items && items.image ?
<main>

        <DetailCont>
        <ContCard>
            <CardImage>
                <Img src={items.image}/>
            </CardImage>

            <CardDetail>
                <Title>{items.name}</Title>
                <Description>{items.details}</Description>
                <ContStock>Stock: {items.stock}</ContStock>
                <ContFooterDetail>
                <Price>${items.price}</Price>
{
    itemCount === 0
    ?
    <ItemCount initial={itemCount} stock={items.stock} onAdd={onAdd}/>
    :
    <Link to="/cart"><BtnToCart>Ir al carrito</BtnToCart></Link>
}

                </ContFooterDetail>
                
            </CardDetail>

           
        </ContCard>
    </DetailCont> 

    <SectionCaract>
        <ContenedorCaract>

    <ContenedorTitulo>
        <ContenedorTitulo><h2>Caracteristicas del producto</h2></ContenedorTitulo>
    </ContenedorTitulo>
    <ContenedorIndices>
        <P>Numero de paginas:<I>{items.caracteristicas.nPaginas}</I></P>
        <P>Formato:<I>{items.caracteristicas.Formato}</I></P>
        <P>Color:<I>{items.caracteristicas.Color}</I></P>
    </ContenedorIndices>
        </ContenedorCaract>
    </SectionCaract>

</main>
   
    : <Loader/>
}
    </>
)
}




export  default ItemDetail
