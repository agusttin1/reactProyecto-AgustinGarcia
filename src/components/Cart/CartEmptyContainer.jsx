import {
  ContCarritoVacio,
  PmsjErr,
  StyledLink,
} from "../../styles/components/Cart.Elements";
import BatmanError from "../../assets/heroPngs/cartEmpty.png";

const CartEmpty = () => {
  return (
    <ContCarritoVacio>
      <div style={{ width: "400px", height: "400px" }}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={`${BatmanError}`}
          alt=""
        />
      </div>
      <PmsjErr>“Oops, parece que no hay nadie aqui!</PmsjErr>

      <StyledLink to="/">Ir a comprar</StyledLink>
    </ContCarritoVacio>
  );
};
export default CartEmpty;
