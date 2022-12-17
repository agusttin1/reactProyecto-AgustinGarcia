
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "./firebaseConfig";

const fetchFromFirebase = async() =>{
    const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

}


export default fetchFromFirebase
