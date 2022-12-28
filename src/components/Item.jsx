import {
  ContCard,
  CardImg,
  ButtonCard,
  CardTitle,
  CardBody,
  CardText,
  ContNovedad,
  ImgNovedad,
  ContIconDetails,
  StyledLink,
} from "../styles/components/ItemListContainer.Elements";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";
export const Comic = (props) => {

const { addToCart, NotifyAdd } = useContext(CartContext);

  return (
    <>
      <ContCard>
        <div style={{ position: "relative" }}>
          <CardImg src={props.image} />
          <ContIconDetails>
            <StyledLink to={`/item/${props.id}`}>
              <AiOutlineInfoCircle />
            </StyledLink>
          </ContIconDetails>
        </div>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>${props.price}</CardText>
          <ButtonCard
            variant="primary"
            onClick={() => {
              NotifyAdd(1);
              addToCart(props, 1);
            }}
          >
            Añadir al carrito
          </ButtonCard>
        </CardBody>

        {props.novedad ? (
          <ContNovedad>
            <ImgNovedad src={props.novedad} alt="pngNovedad" />
          </ContNovedad>
        ) : (
          <ContNovedad />
        )}
        <Toaster 
        position="bottom-right"
        />
      </ContCard>
    </>
  );
};
