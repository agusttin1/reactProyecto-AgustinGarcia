import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { fetchOneFromFirebase } from "../utils/fetchFromFirebase";


const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});
  const { idComic } = useParams();


  useEffect(() => {
    
      fetchOneFromFirebase(idComic)
        .then((result) => setDato(result))
        .catch((e) => console.log(e));
    
  }, []);


  return (
    <>
<ItemDetail items={dato}/>
    </>
  );
};

export default ItemDetailContainer;
