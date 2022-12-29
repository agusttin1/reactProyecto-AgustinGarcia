import MyNavBar  from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
 import FeaturesCont from "./components/Features"; 
import Cart from "./components/Cart";
import { CartContextProvider } from "./components/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ItemRecomendContainer from "./partials/ItemRecomendContainer";

const App = () =>{

  return(

  
<CartContextProvider>
  <BrowserRouter>
  <MyNavBar/>

  <Routes>
    <Route path='/'  element={<ItemListContainer/>}/>
    <Route path='/categoria/:Category' element={<ItemListContainer/>}/>
    <Route path='/item/:idComic' element={<>
      <ItemDetailContainer/>
      
      <FeaturesCont/>
      <ItemRecomendContainer/>
    </>
    }/> 
    <Route path='/cart' element={<Cart/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
</CartContextProvider>



  )
}

export default App
