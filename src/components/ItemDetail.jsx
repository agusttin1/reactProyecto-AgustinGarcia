import {
  Img,
  CardDetail,
  CardImage,
  ContCard,
  DetailCont,
  Title,
  Description,
  Price,
  ContFooterDetail,
  SectionCaract,
  ContenedorCaract,
  ContenedorTitulo,
  ContenedorIndices,
  I,
  P,
  ContStock,
  BtnToCart,
  MainDetail
} from "../styles/components/ItemDetailContainer.Elements";
import ItemCount from "./ItemCount.jsx";
import { useState,useContext } from "react";
import Loader from "./Loader.jsx";
import { Link } from "react-router-dom";

import { CartContext } from "./CartContext.jsx";
import toast, { Toaster } from "react-hot-toast";

const ItemDetail = ({ items }) => {
  const [itemCount, setItemCount] = useState(0);

  const { addToCart } = useContext(CartContext);

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

  const onAdd = (qty) => {
    NotifyAdd(qty);
    setItemCount(qty);
    addToCart(items, qty);
};

return (
    <MainDetail>
    {items && items.image ? (
        <>
            
        <DetailCont>
            <ContCard>
              <CardImage>
                <Img src={items.image} />
              </CardImage>

              <CardDetail>
                <Title>{items.name}</Title>
                <Description>{items.details}</Description>
                <ContStock>Stock: {items.stock}</ContStock>
                <ContFooterDetail>
                  <Price>${items.price}</Price>
                  {itemCount === 0 ? (
                    <ItemCount
                    initial={itemCount}
                    stock={items.stock}
                    onAdd={onAdd}
                    />
                    ) : (
                        <Link to="/cart">
                      <BtnToCart>Ir al carrito</BtnToCart>
                    </Link>
                  )}
                </ContFooterDetail>
              </CardDetail>
            </ContCard>
          </DetailCont>

          <SectionCaract>
            <ContenedorCaract>
              <ContenedorTitulo>
                <h2>Caracteristicas del producto</h2>
              </ContenedorTitulo>
              <ContenedorIndices>
                <P>
                  Numero de paginas:<I>{items.caracteristicas.nPaginas}</I>
                </P>
                <P>
                  Formato:<I>{items.caracteristicas.Formato}</I>
                </P>
                <P>
                  Color:<I>{items.caracteristicas.Color}</I>
                </P>
              </ContenedorIndices>
            </ContenedorCaract>
          </SectionCaract>
                  </>
        
        ) : (
            <Loader />
            )}
            <Toaster position="bottom-right" reverseOrder={false} />
    </MainDetail>
  );
};

export default ItemDetail;
