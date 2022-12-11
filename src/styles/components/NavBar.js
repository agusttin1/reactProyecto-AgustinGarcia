import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: "Poppins";
  position: relative;

  &::before{
    content: "";
  background: var(--color-primary);
  width: 0%;
  height: 3px;
  position: absolute;
  left: 50%;
  bottom: -2px;
  transform: translateX(-50%);
  transition: all 0.5s;
  }

  &:hover::before{
    width: 50%;
  }

  &:hover{
    color: black;
  }
`
