


import { AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carrito from "./CartWidget";
import "../App.css"


const MyNavBar = () =>{
    return (
        <>
    <Navbar bg="light" expand="lg" className="NavBarMain">
      <Container className="ContainerNavMain">
      <div className="contLogo">
            <img src="/logoWeb.png" alt="" srcset="" />
          </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navBarComp">
          <Nav className="me-auto navCont">
            <Nav.Link href="#">Categoria 1</Nav.Link>
            <Nav.Link href="#">Categoria 2</Nav.Link>
            <Nav.Link href="#">Categoria 3</Nav.Link>
          </Nav>
         
          <div className="UserOptions">
            <span>
              < AiOutlineUserAdd className="icons"/>
              <a href="">Registrarse</a></span>
            <span>
              <AiOutlineUser className="icons"/>
              <a href="">Inciar Sesion</a></span>
          </div>
          
          <Carrito/>

        </Navbar.Collapse>
        </Container>
    </Navbar>

        </>
    )
}


export default MyNavBar
