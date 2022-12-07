import ComicsData from "../utils/Data"
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () =>{
    const [datos,setDatos] = useState([])
    const {idComic} = useParams()

    useEffect(()=>{
customFetch(2000,ComicsData.find(item => item.id === idComic))
.then(response => setDatos(response))
.catch(err => console.log(err))
    },[])
    
    
    return(
        <>
       <ItemDetail items={datos}/>
      
        </>
    )
}

export default ItemDetailContainer
