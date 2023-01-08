import { AiOutlineUser } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import Carrito from "./CartWidget";
import {
  NavBarContainer,
  ContLogo,
  Img,
  NavBar,
  Menu,
  MenuItem,
  StyledLink,
  ContIcons,
  ContIconBars,
  TopNavBar,
  IconAccounts,
} from "../styles/components/NavBar.Elements";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import HeartIcon from "../partials/WishWidget";

import Logo from "../assets/logo/logoWeb.png";

const MyNavBar = () => {
  const [click, setClick] = useState(false);
  

  const ChangeClick = () => {
    return setClick(!click);
  };

  return (
    <header>
      <TopNavBar>
        <p>
          <BsTruck /> Envio Gratis A Partir de los $18000
        </p>
      </TopNavBar>
      <NavBarContainer>
        <NavBar>
          <ContLogo>
            <Link to="/">
              <Img src={Logo} />
            </Link>
          </ContLogo>
          <ContIconBars onClick={() => ChangeClick()}>
            {click ? <FaTimes /> : <FaBars />}
          </ContIconBars>

          <Menu click={click}>
            <MenuItem onClick={() => ChangeClick()}>
              <StyledLink to="/categoria/Comic Americano">
                Comic Americano
              </StyledLink>
            </MenuItem>
            <MenuItem onClick={() => ChangeClick()}>
              <StyledLink to="/categoria/Comic Europeo">
                Comic Europeo
              </StyledLink>
            </MenuItem>
            <MenuItem onClick={() => ChangeClick()}>
              <StyledLink to="/categoria/Manga">Manga</StyledLink>
            </MenuItem>
          </Menu>

          <ContIcons>
            <IconAccounts>
                <AiOutlineUser />
            </IconAccounts>
            <HeartIcon/>
            <Carrito />
          </ContIcons>
        </NavBar>
      </NavBarContainer>
     
    </header>
  );
};

export default MyNavBar;
