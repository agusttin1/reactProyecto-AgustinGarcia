import { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import {
  ContenedorCart,
  ContCart,
  InfoCart,
  TextName,
  IconTrash,
  BtnAmount,
  BtnClear,
  Wrapper,
  ContTitulo,
  BuyCont,
  Impuesto,
  ContInfo,
  PriceOld,
  PriceTotal,
  TotalFin,
  Totals,
  WrapperBuy,
  TituloWrapper,
  ImpuestoPrice,
  ImgCont,
  Img,
  Nombre,
  DataPrice,
  SubtotalItem,
  ContIcon,
  IconTrash2,
  ContPng,
  Envio,
} from "../styles/components/Cart.Elements";
import CartEmpty from "./CartEmptyContainer";
import Spderman from "../assets/heroPngs/spman.png";
import "../App.css";
import { serverTimestamp, updateDoc, increment, doc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { Toaster } from "react-hot-toast";
import { NotifyOrder, AlertClear, NotifyDelete } from "./Toast&Alert";

const Cart = () => {
  useEffect(() => {
    document.title = "Comic & Manga | Cart";
  }, []);

  const {
    CartList,
    deleteThis,
    ClearCart,
    TotalPrice,
    QtyInCart,
    TotalPerItem,
    CalcTaxes,
    setCartList,
    TotalWithTax,
  } = useContext(CartContext);

  const [icon, setIcon] = useState(false);

  const updateStock = () => {
    CartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.cantidad),
      });
    });
  };

  const CreateOrder = () => {
    let order = {
      buyer: {
        name: "Leo Messi",
        email: "campeonDelMundo@coderhouse.com",
        phone: "1234567",
      },
      item: CartList.map((item) => ({
        id: item.id,
        title: item.name,
        price: item.price,
        qty: item.cantidad,
      })),
      date: serverTimestamp(),
      total: TotalPrice(),
    };

    NotifyOrder(order, updateStock, ClearCart);
  };

  return (
    <>
      {CartList.length > 0 ? (
        <Wrapper>
          <ContenedorCart>
             <ContTitulo>
              <p>MI CARRITO</p>
              <p>Item's ({QtyInCart()})</p>
            </ContTitulo> 

            {CartList.map((item) => (
              <ContCart key={item.id}>
                <ImgCont>
                  <Img src={item.image} alt="" />
                </ImgCont>
                <InfoCart>
                  <Nombre>
                    <TextName>{item.name}</TextName>
                  </Nombre>
                  <DataPrice>
                    <p>
                      Precio u: <span>${item.price}</span>
                    </p>
                    |
                    <p>
                      cantidad: <span>{item.cantidad}</span>
                    </p>
                  </DataPrice>
                  <SubtotalItem>
                    <p>Subtotal: ${TotalPerItem(item.id).toFixed(2)}</p>
                  </SubtotalItem>
                  <ContIcon
                    icon={icon}
                    onClick={() => {
                      NotifyDelete();
                      deleteThis(item.id);
                    }}
                    onMouseEnter={() => setIcon(true)}
                    onMouseLeave={() => setIcon(false)}
                  >
                    {icon ? <IconTrash2 /> : <IconTrash />}
                  </ContIcon>
                </InfoCart>
              </ContCart>
            ))}
            {/* <BtnClear onClick={() => AlertClear(setCartList)}>
              Limpiar carrito
            </BtnClear> */}
          </ContenedorCart>

          
            <WrapperBuy>
            <TituloWrapper>
                  <p>Precio total Detalle</p>
                  <p>${TotalWithTax()}</p>
                </TituloWrapper> 
              <BuyCont>
                 
                <ContInfo>
                  <PriceTotal>
                    <p>Subtotal:</p>
                    <p>{TotalPrice().toFixed(2)}</p>
                  </PriceTotal>
                  <Impuesto>
                    <p>Impuesto:</p>
                    <ImpuestoPrice>+{CalcTaxes().toFixed(2)}</ImpuestoPrice>
                  </Impuesto>

                  <Envio>
                    <p>Envio:</p>
                    {TotalWithTax() >= 18000 ? (
                      <p style={{ color: "gray" }}>Gratis</p>
                    ) : (
                      <p style={{ color: "green" }}>+500</p>
                    )}
                  </Envio>

                  <TotalFin>
                    <p>Total a pagar Final:</p>
                    <Totals>
                      <PriceOld>${TotalPrice()}</PriceOld>
                      <p style={{ color: "black" }}>${TotalWithTax()}</p>
                    </Totals>
                  </TotalFin>
                </ContInfo>

                <BtnAmount onClick={() => CreateOrder()}>Comprar</BtnAmount>
              </BuyCont>
            </WrapperBuy>
             <ContPng>
              <img src={`${Spderman}`} alt="" />
            </ContPng> 
    
        </Wrapper>
      ) : (
        <CartEmpty />
      )}
      <Toaster />
    </>
  );
};
export default Cart;
