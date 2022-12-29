import { useState, useEffect } from "react";
import {
  Cont,
  ContLi,
  Li,
  ContTitulo,
  Btn
} from "../styles/components/Recomendation.Elements";
import { fetchFromFirebase } from "../utils/fetchFromFirebase";
import Loader from "../components/Loader";
import { CartContext } from "../components/CartContext";
import { useContext } from "react";
import RndomElements from "./GetRndomElement";
const ItemRecomendContainer = () => {
  const [data, setData] = useState([]);

  const { addToCart, NotifyAdd } = useContext(CartContext);

  useEffect(() => {
    fetchFromFirebase()
      .then(res => setData(()=>RndomElements(res)))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <Cont>
          <ContTitulo>
            <h3>Productos Similares</h3>
          </ContTitulo>

          <ContLi>
            {data.map((props) => {
              return (
                <Li key={props.id}>
                  <img src={props.image} alt="" />

                  <Btn
                    onClick={() => {
                      NotifyAdd(1);
                      addToCart(props, 1);
                    }}
                  >
                    Agregar Al Carrito
                  </Btn>
                </Li>
              );
            })}
          </ContLi>
        </Cont>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default ItemRecomendContainer;
