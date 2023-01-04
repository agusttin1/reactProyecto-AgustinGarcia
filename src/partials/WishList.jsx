import { useState } from "react";
import { useContext } from "react";
import { WishContext } from "../Context/WishContext";
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
    ContMainCards,
    ContHeart
  } from "../styles/components/ItemListContainer.Elements";
const WishList = () => {
  const { wish,removeOfWishList } = useContext(WishContext);

  return (
    <>
    <ContMainCards>

      {wish.map((item) => {
          return(
              
              <ContCard key={item.id}>
            <div style={{ position: "relative" }}>
              <CardImg src={item.image} />
            </div>
            <CardBody>
              <CardTitle>{item.name}</CardTitle>
              <CardText>${item.price}</CardText>
              <ButtonCard>
            <StyledLink to={`/item/${item.id}`}>Ver Producto</StyledLink>
          </ButtonCard>
            </CardBody>
            <div>
              
                <ContHeart type='checkbox' onClick={()=> removeOfWishList(item.id)}/> 
            
            </div>
            {item.novedad ? (
              <ContNovedad>
                <ImgNovedad src={item.novedad} alt="pngNovedad" />
              </ContNovedad>
            ) : (
              <ContNovedad />
              )}
          </ContCard>
        )
    })}
    </ContMainCards>
    </>
  );
};

export default WishList;
