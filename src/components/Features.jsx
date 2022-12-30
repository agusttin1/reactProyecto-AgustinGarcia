import Feature1 from '../assets/icons/credit-card.png'
import Feature2 from '../assets/icons/buy-return.png'
import Feature3 from '../assets/icons/contact-plane.png'

import {  Features,FeatureTitle,FeaturesDescrip,FeaturesSection,FeaturesImg} from "../styles/components/Features.Elements";


const FeaturesCont = () =>{
    return (
        <FeaturesSection>
<Features>
        <FeaturesImg src={Feature1} alt="" />
        <FeatureTitle>COMPRA RÁPIDO Y SEGURO</FeatureTitle>
        <FeaturesDescrip>Hacemos lo posible para que le sea más fácil la compra y al mismo tiempo lo más segura.</FeaturesDescrip>
      </Features>
      <Features>
        <FeaturesImg src={Feature2} alt="" />
        <FeatureTitle>TE DEVOLVEMOS TU DINERO</FeatureTitle>
        <FeaturesDescrip>Si no te llego la entrada, te arrepentiste de la compra o lo que sea. ¡Te devolvemos tu dinero en tiempo récord!</FeaturesDescrip>
      </Features>
      <Features>
        <FeaturesImg src={Feature3} alt="" />
        <FeatureTitle>CONTACTANOS A NUESTRO EMAIL</FeatureTitle>
        <FeaturesDescrip>Si querés dar alguna opinión sobre nuestro sitio o algún reclamo, contactanos a través de nuestro correo.</FeaturesDescrip>
      </Features>

        </FeaturesSection>
    )
}



export default FeaturesCont
