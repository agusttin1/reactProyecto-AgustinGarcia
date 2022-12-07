import ComicsData from "../utils/Data"
import { useEffect, useState } from "react";
import {ItemList} from './ItemList';
import  customFetch  from "../utils/customFetch";
import {useParams} from "react-router-dom"
/* const {products} = require('../utils/Data') */





const ItemListContainer = () =>{
    const [datos,setDatos] = useState([])
const { Category } = useParams()


useEffect(()=>{

    if(Category){
        customFetch(2000,ComicsData.filter(item => item.category === Category))
        .then(result => setDatos(result))
        .catch(err=>console.log(err))

    }else{
        customFetch(2000,ComicsData)
        .then(result => setDatos(result))
        .catch(err=>console.log(err))
    }

},[Category])

    return(
<>
<ItemList items={datos}/>
</>
    )
}



export default ItemListContainer
