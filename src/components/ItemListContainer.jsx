import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { fetchFromFirebase } from "../utils/fetchFromFirebase";
import SearchComponent from "./Searcher";
import MiniHeroCont from "./MiniHeroCont";


const ItemListContainer = () => {




  const [datos, setDatos] = useState([]);
  const [search, setSearch] = useState("");
  const { Category } = useParams();

  const searcher = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    fetchFromFirebase(Category)
      .then((result) => setDatos(result))
      .catch((e) => console.log(e));

    
  }, [Category]);

  useEffect(() => {
    return () => {
      setDatos([]);
    };
  }, []);

  const results =
    search == ""
      ? datos
      : datos.filter((dato) =>
          dato.name.toLowerCase().includes(search.toLocaleLowerCase())
        );

  return (
    <>
      {SearchComponent(search, searcher)}


      <MiniHeroCont/>

      <ItemList items={results} />
    </>
  );
};

export default ItemListContainer;
