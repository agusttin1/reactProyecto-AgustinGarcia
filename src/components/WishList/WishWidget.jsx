import { Link } from "react-router-dom";
import {
  ContHeart,
  Contador,
  Icon,
  IconFill,
} from "../../styles/components/WishWidget.Elements";
import { useContext } from "react";
import { WishContext } from "../../Context/WishContext";
import { NoContador } from "../../styles/components/CartWidget.Elements";

const HeartIcon = () => {
  const { QtyInWish } = useContext(WishContext);
  return (
    <>
      <ContHeart>
        <Link to="/wishList">
          {QtyInWish() === 0 ? <Icon /> : <IconFill />}
        </Link>
        {QtyInWish() === 0 ? (
          <NoContador></NoContador>
        ) : (
          <Contador>({parseInt(QtyInWish())})</Contador>
        )}
      </ContHeart>
    </>
  );
};

export default HeartIcon;
