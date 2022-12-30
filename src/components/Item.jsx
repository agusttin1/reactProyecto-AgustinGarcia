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
} from "../styles/components/ItemListContainer.Elements";

export const Comic = (props) => {


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
             <StyledLink to={`/item/${props.id}`}>
             Ver Producto
            </StyledLink>
          </ButtonCard>
        </CardBody>

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
