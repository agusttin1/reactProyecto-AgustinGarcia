
import { useEffect, useState } from "react";
import {ItemList} from './ItemList';
import {useParams} from "react-router-dom"
import fetchFromFirebase from "../utils/fetchFromFirebase";


  


const ItemListContainer = () =>{
    const [datos,setDatos] = useState([])
const { Category } = useParams()


useEffect(()=>{

   fetchFromFirebase()

},[Category])

    return(
<>
<ItemList items={datos}/>
</>
    )
}



export default ItemListContainer
