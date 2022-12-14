

import { collection, getDocs, query,where,doc,getDoc,orderBy,setDoc } from "firebase/firestore"; 

import { db } from "./firebaseConfig";
import { updateDoc, increment} from "firebase/firestore";


 export const fetchFromFirebase = async(Category) =>{
  let q
  if(Category){
    
    q = query(collection(db,'products'), where('category','==', Category))
    document.title=`Comic & Manga | ${Category}`
}else{

  q = query(collection(db,"products"), orderBy('name'))
  document.title='Comic & Manga | Home'
}

const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(item => ({
      id:item.id,
      ...item.data()
    }))
    
    return dataFromFirestore
    

}

export const fetchOneFromFirebase = async(id)=>{

  
  const docRef = doc(db, "products",id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return(
      {
        id:id,
        ...docSnap.data()
      }
      )
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  
  
 export const createOrderFireBase = async(order)=>{
    const newOrderRef = doc(collection(db,'orders'))
    
    await setDoc(newOrderRef,order)
    return newOrderRef
    
  }



  export const updateStock = (CartList) => {

    CartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.cantidad),
      });
    });
  };
