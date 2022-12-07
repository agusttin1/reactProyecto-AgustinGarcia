
import { ContCard,CardImg, ButtonCard , CardTitle,CardBody,CardText,ContNovedad,ImgNovedad,ContIconDetails,HideContNovedad,StyledLink} from "../styles/components/ItemListContainer.js";

import { AiOutlineInfoCircle } from "react-icons/ai";


export const Comic = (props) =>{
    return(
      
<>
        <ContCard>
      <div style={{position:'relative'}} >
        <CardImg src={props.image}/>
        <ContIconDetails>
        <StyledLink  to={`/item/${props.id}`}><AiOutlineInfoCircle /></StyledLink>
        </ContIconDetails>
        </div>
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>
       ${props.price}
        </CardText>
        <ButtonCard variant="primary">Añadir al carrito</ButtonCard>
      </CardBody>

      {
        (props.novedad)
        ? <ContNovedad><ImgNovedad src={props.novedad } alt="pngNovedad"  /></ContNovedad>
        : <ContNovedad/>
      }
     
    </ContCard>

      

    </>
       
    )
}
