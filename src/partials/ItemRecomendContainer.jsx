import { useState, useEffect,useContext } from "react";
import {Cont,ContLi,Li,ContTitulo,Btn,} from "../styles/components/Recomendation.Elements";
import { ContHeart,ContHeartNoFill } from "../styles/components/ItemListContainer.Elements";
import { fetchFromFirebase } from "../utils/fetchFromFirebase";
import Loader from "../components/Loader";
import { WishContext } from "../Context/WishContext";
import RndomElements from "./GetRndomElement";
import toast from "react-hot-toast";

const ItemRecomendContainer = () => {
  const [data, setData] = useState([]);

  const {Existe,removeOfWishList,addToWishList}= useContext(WishContext)

  const { addToCart } = useContext(WishContext);
  const notifyAdd = () => {
    toast.success("Se ha agregado 1 producto", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
      duration: 1000,
    });
  };

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
                    onClick={() => {
                      addToCart(props, 1);
                      notifyAdd();
                    }}
                  >
                    Agregar Al Carrito
                  </Btn>
                  {
                    Existe(props.id)? <ContHeart type='checkbox' onClick={()=>removeOfWishList(props.id)}/> 
                    : <ContHeartNoFill  type='checkbox'onClick={()=>addToWishList(props)}/>
                }
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
