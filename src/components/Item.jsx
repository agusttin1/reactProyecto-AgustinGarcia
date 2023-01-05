import {
  ContCard,
  CardImg,
  ButtonCard,
  CardTitle,
  CardBody,
  CardText,
  ContNovedad,
  ImgNovedad,
  StyledLink,
  ContHeart,
  ContHeartNoFill
} from "../styles/components/ItemListContainer.Elements";
import { useState } from "react";

import { useContext } from "react";
import { WishContext } from "../Context/WishContext";
export const Comic = (props) => {
  const { addToWishList , removeOfWishList,Existe} = useContext(WishContext);

  return (
    <>
      <ContCard>
        <div style={{ position: "relative" }}>
          <CardImg src={props.image} />
        </div>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>${props.price}</CardText>
          <ButtonCard>
            <StyledLink to={`/item/${props.id}`}>Ver Producto</StyledLink>
          </ButtonCard>
        </CardBody>
                {
                    Existe(props.id)? <ContHeart type='checkbox' onClick={()=>removeOfWishList(props.id)}/> 
                    : <ContHeartNoFill  type='checkbox'onClick={()=>addToWishList(props)}/>
                }
        
        {props.novedad ? (
          <ContNovedad>
            <ImgNovedad src={props.novedad} alt="pngNovedad" />
          </ContNovedad>
        ) : (
          <ContNovedad />
        )}
      </ContCard>
    </>
  );
};
