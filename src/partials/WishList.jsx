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
    ContHeart,
    ContHeartNoFill
  } from "../styles/components/ItemListContainer.Elements";
const WishList = () => {
  const { wish } = useContext(WishContext);

  const [click,setClick] = useState(false)

  const handleClick = ()=>{
    setClick(!click)
  }
  return (
    <>
    <ContMainCards>

      {wish.map((item) => {
          return(
              
              <ContCard>
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
            <div onClick={()=>handleClick()} >

                {
                    click ? <ContHeart onClick={()=>addToWishList(item)}></ContHeart> : <ContHeartNoFill onClick={()=>addToWishList(item)} ></ContHeartNoFill>
                }
               


             
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
