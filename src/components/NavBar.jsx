


import { AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";
import { BsTruck } from "react-icons/Bs";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carrito from "./CartWidget";

import "../App.css";
import { StyledLink } from "../styles/components/NavBar";
import Logo from "../assets/logo/logoWeb.png"
import { Link } from "react-router-dom";

const MyNavBar = () =>{
    return (
        <header>
    <div className="topNavBar">
      <p><BsTruck/> Envio gratis desde $12000</p>
    </div>
    <Navbar bg="light" expand="lg" className="NavBarMain">
      <Container className="ContainerNavMain">
      
      <div className="contLogo">
            <Link to='/'><img src={Logo} alt=""  /></Link>
      </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navBarComp">
          <Nav className="me-auto navCont">
            <StyledLink to='/categoria/Comic Americano'>Comic Americano</StyledLink>
            <StyledLink to='/categoria/Comic Europeo'>Comic Europeo</StyledLink>
            <StyledLink to='/categoria/Manga'>Manga</StyledLink>
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

        </header>
    )
}


export default MyNavBar
