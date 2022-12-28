import { useContext,useState } from "react";
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
} from "../styles/components/Cart.Elements";

import CartEmpty from "./CartEmptyContainer";
import "../App.css";
import { serverTimestamp, updateDoc, increment, doc } from "firebase/firestore";

import { db } from "../utils/firebaseConfig";
import { Toaster } from "react-hot-toast";
import { NotifyOrder, AlertClear, NotifyDelete } from "./Toast&Alert";


const Cart = () => {
  const {
    CartList,
    deleteThis,
    ClearCart,
    TotalPrice,
    QtyInCart,
    TotalPerItem,
    CalcTaxes,
    setCartList,
   TotalWithTax
  } = useContext(CartContext);




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
                  <IconTrash
                    onClick={() => {
                      NotifyDelete();
                      deleteThis(item.id);
                    }}
                  />
                </InfoCart>
              </ContCart>
            ))}
            <BtnClear onClick={() => AlertClear(setCartList)}>
              Limpiar carrito
            </BtnClear>
          </ContenedorCart>

          <WrapperBuy>
            <BuyCont>
              <TituloWrapper>
                <p>Precio total Detalle</p>
                <p>${TotalWithTax()}</p>
              </TituloWrapper>
              <ContInfo>
                <PriceTotal>
                  <p>Subtotal:</p>
                  <p>{TotalPrice().toFixed(2)}</p>
                </PriceTotal>
                <Impuesto>
                  <p>Impuesto:</p>
                  <ImpuestoPrice>+{CalcTaxes().toFixed(2)}</ImpuestoPrice>
                </Impuesto>
                <TotalFin>
                  <p>Total a pagar(IVA del %21):</p>
                  <Totals>
                    <PriceOld>${TotalPrice()}</PriceOld>
                    <p style={{ color: "black" }}>
                      ${TotalWithTax()} 
                    </p>
                  </Totals>
                </TotalFin>
              
              </ContInfo>

              <BtnAmount onClick={() => CreateOrder()}>Comprar</BtnAmount>
            </BuyCont>
          </WrapperBuy>
        </Wrapper>
      ) : (
        <CartEmpty />
      )}
      <Toaster />
    </>
  );
};
export default Cart;
