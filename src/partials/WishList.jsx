import { useContext , useEffect} from "react";
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
  ContHeart
} from "../styles/components/ItemListContainer.Elements";
import { ContWishList , ContCardWishList,ContTituloWList} from "../styles/components/WishList.Elements";
import WishListEmpty from "./WishListEmpty";
const WishList = () => {
  const { wish, removeOfWishList } = useContext(WishContext);

  useEffect(()=>{
    document.title = 'Comic & Manga | Wish List'

  },)

  return (
    <>
      {wish.length > 0 ? (
        <ContWishList>

        <ContTituloWList>

          <p>Lista de favoritos </p>
          <p>({wish.length})</p>
       </ContTituloWList>
         <ContCardWishList>
          {wish.map((item) => {
            return (
              <ContCard key={item.id}>
                <div style={{ position: "relative" }}>
                  <CardImg src={item.image} />
                </div>
                <CardBody>
                  <CardTitle>{item.name}</CardTitle>
                  <CardText>${item.price}</CardText>
                  <ButtonCard>
                    <StyledLink to={`/item/${item.id}`}>
                      Ver Producto
                    </StyledLink>
                  </ButtonCard>
                </CardBody>

                <ContHeart
                  type="checkbox"
                  onClick={() => removeOfWishList(item.id)}
                  />

                {item.novedad ? (
                  <ContNovedad>
                    <ImgNovedad src={item.novedad} alt="pngNovedad" />
                  </ContNovedad>
                ) : (
                  <ContNovedad />
                )}
              </ContCard>
            );
          })}
        </ContCardWishList>
      </ContWishList>
      ) : (
        <WishListEmpty />
      )}
    </>
  );
};

export default WishList;
