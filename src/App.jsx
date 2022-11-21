import MyNavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>{

  return(
  <>
<MyNavBar/>
<ItemListContainer mensaje="Hola Mundo ItemListContainer!!!"/>
<Footer/>

  </>
  )
}

export default App
