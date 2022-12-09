import MyNavBar  from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import FeaturesCont from "./components/Features";
import Cart from "./components/Cart";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
const App = () =>{

  return(

  

  <BrowserRouter>
  <MyNavBar/>

  <Routes>
    <Route path='/'  element={<><FeaturesCont/><ItemListContainer/></>}/>
    <Route path='/categoria/:Category' element={<ItemListContainer/>}/>
    <Route path='/item/:idComic' element={<ItemDetailContainer/>}/> 
    <Route path='/cart' element={<Cart/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>



  )
}

export default App
