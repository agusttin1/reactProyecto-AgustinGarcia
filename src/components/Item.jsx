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
  const { addToWishList } = useContext(WishContext);
  const [click,setClick] = useState(false)

  const handleClick = ()=>{
    setClick(!click)
  }

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
        <div onClick={()=>handleClick()} >

                {
                    click ? <ContHeart onClick={()=>addToWishList(props)}></ContHeart> : <ContHeartNoFill onClick={()=>addToWishList(props)}></ContHeartNoFill>
                }
               


             
            </div>
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
