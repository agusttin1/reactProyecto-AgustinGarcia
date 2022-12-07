import { Img,CardDetail,CardImage,ContCard,DetailCont,Title ,Description,Price,ButtonDetail,ContFooterDetail,SectionCaract,ContenedorCaract,ContenedorTitulo,ContenedorIndices,I,P} from "../styles/components/ItemDetailContainer.js";
import Loader from "./Loader.jsx";



const ItemDetail = ({items}) =>{
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
                
                <ContFooterDetail>
                <Price>${items.price}</Price>
                <ButtonDetail>Añadir al carrito</ButtonDetail>
                
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
