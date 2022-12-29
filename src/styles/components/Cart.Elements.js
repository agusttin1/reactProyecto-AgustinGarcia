import styled from "styled-components";

import { Link } from "react-router-dom";
import { TbTrash,TbTrashX } from "react-icons/tb";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 100px;
  height: auto;
  padding: 50px;
  margin: 20px;
`;

export const ContTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  width: 100%;
  position: relative;
  color: white;
  font-family: "knewave";
  -webkit-text-stroke: 2px var(--color-primary);

  &h1,
  span {
    padding: 0;
    margin: 0;
  }
`;

export const ContenedorCart = styled.div`
  width: 560px;
  height: 100%;

  display: flex;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
export const ContCart = styled.div`
  width: 100%;
  gap: 20px;
  background-color: red;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  background-color: whitesmoke;
  position: relative;
`;

export const ImgCont = styled.div`
  height: 200px;
  width: 200px;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const InfoCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;

export const Nombre = styled.div`
  width: 100%;
  border-bottom: 2px solid var(--color-primary);
  padding: 0;
`;

export const DataPrice = styled.div`
  font-family: "Poppins";
  color: black;
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    color: black;
    font-weight: 900px;

    span {
      color: var(--color-primary);
      font-family: "Knewave";
    }
  }
`;

export const SubtotalItem = styled.div`
text-align: center;
font-family: 'Poppins';
`

export const ContIcon =styled.div`
position: absolute;
  top: 15px;
  right: 15px;
`
export const IconTrash = styled(TbTrash)`
  font-size: 26px;
  fill: var(--color-primary);
  cursor: pointer;
`;

export const IconTrash2 = styled(TbTrashX)`
  font-size: 26px;
  fill: var(--color-primary);
  cursor: pointer;
`

export const TextName = styled.p`
  font-size: 16px;
  font-family: "Poppins";
  width: 250px;
  white-space: wrap;
  cursor: pointer;
  margin: 0;
`;

export const BtnAmount = styled.button`
  font-family: "knewave";
  padding: 5px;
  border-radius: 10px;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: var(--color-primary);
    color: white;
    border: white 2px solid;
  }
`;

export const BtnClear = styled.button`
  font-family: "knewave";
  font-size: 16px;
  padding: 2px;
  border-radius: 10px;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  transition: 0.5s ease-in-out;
  position: absolute;
  top: 35px;
  right: 0;

  &:hover {
    background-color: var(--color-primary);
    color: white;
    border: white 2px solid;
  }
`;

export const WrapperBuy = styled.div`
  width: 560px;
  height: 100%;

  display: flex;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const BuyCont = styled.div`
  flex-direction: column;
  display: flex;
  gap: 25px;
  justify-content: flex-start;
`;

export const TituloWrapper = styled.div`
  width: 560px;
  position: relative;
  color: white;
  text-align: center;
  font-family: "knewave";
  display: flex;
  font-size: 25px;
  justify-content: space-between;
  -webkit-text-stroke: 2px var(--color-primary);
`;

export const ContInfo = styled.div`
  background-color: whitesmoke;
  padding: 10px;
  width: 100%;
`;

export const PriceTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: "Poppins";
`;
export const Impuesto = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: "Poppins";
`;

export const ImpuestoPrice = styled.p`
  color: green;
`;
export const TotalFin = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: "Poppins";
`;

export const Totals = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  &::before {
    content: "";
    width: 80px;
    height: 2px;
    position: absolute;
    right: 0;
    top: 10px;
    bottom: 30px;
    background-color: gray;
  }
`;

export const PriceOld = styled.p`
  color: rgb(158, 158, 158);
  margin: 0;
  padding: 0;
`;

// Components para el carrito vacio //

export const ContCarritoVacio = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const PmsjErr = styled.p`
  font-family: "Knewave";
  font-size: 18px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  background: white;
  border: 4px solid var(--color-primary);
  padding: 10px;
  color: var(--color-primary);
  font-family: "Knewave";

  &:hover {
    color: var(--color-primary);
  }
`;
