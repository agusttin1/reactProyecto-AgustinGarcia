import { useState, useEffect } from "react";
import {
  Cont,
  ContLi,
  Li,
  ContTitulo,
  Btn,
} from "../styles/components/Recomendation.Elements";
import { fetchFromFirebase } from "../utils/fetchFromFirebase";
import Loader from "../components/Loader";
import { CartContext } from "../components/CartContext";
import { useContext } from "react";
import RndomElements from "./GetRndomElement";
import toast from 'react-hot-toast'

const ItemRecomendContainer = () => {
  const [data, setData] = useState([]);

  const { addToCart } = useContext(CartContext);
  const notifyAdd = () =>{
    toast.success( 'Se ha agregado 1 producto', {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      },
      duration:1000
    });
  }

  useEffect(() => {
    fetchFromFirebase()
      .then((res) => setData(() => RndomElements(res)))
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
                    onClick={() =>
                      {
                        addToCart(props, 1)
                        notifyAdd()

                      }
                    }   
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
