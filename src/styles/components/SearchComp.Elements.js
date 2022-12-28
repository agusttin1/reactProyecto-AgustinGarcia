import styled from "styled-components";
import Icon from "../../assets/icons8-search-more-100.png";
import { Link } from "react-router-dom";

export const ContHeaderFilters = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: auto;
width: 100%;
border-bottom: 4px solid black;
background-color: var(--color-primary);
h1{
    position: relative;
    height: auto;
    padding: 0;
    margin: 0;
    &::before{
        position: absolute;
        content: "/";
        font-size: small;
        padding-right:10px;
        bottom: 10px;
        left: -10px;

    }
}

`;

export const ContTitulo = styled.div`
font-family: 'Poppins';
font-weight: 800;

border-radius: 10px;
color:white;
padding: 10px;
`

export const Search = styled.input`
  width: 15px;
  height: 15px;
  padding: 20px;
  position: relative;
  background: url(${Icon}) no-repeat;
  background-size: 22px;
  background-position: center;
border-radius: 50%;
border: 1.5px solid var(--bg-primary);
transition: 500ms;
cursor: pointer;

  &:hover{
    border: 1px solid var(--bg-primary);
    
  }

  &:focus{
    width: 200px;
    border-radius: 20px;
    background: url(${Icon}) no-repeat;
    background-position: 10px 50%;
    background-size: 22px;
    padding-left: 40px;
    color: white;
    outline: none;
    background-color: transparent;
    font-family:'Poppins';
  }
`;


export const ContComp = styled.div`
padding: 40px;
display: flex;
width: 100%;
margin: auto;
align-items: center;
gap: 20px;
flex-flow:row wrap;


`

export const ContCategory =styled.ul`
display: flex;
gap: 20px;
list-style: none;
width: auto;
height: auto;
margin: 0;
padding: 0;


li{
    margin: 0;
    padding: 0;
    color: white;
}
`


export const StyledLink = styled(Link)`
text-decoration: none;
color: white;
-webkit-text-stroke: 1px var(--bg-primary);
width: 100%;
position: relative;



&:hover{
    width: 100%;
    color: var(--bg-secondary);
}

&::after{
    content: "";
    width: 0;
    height: 3px;
    background-color: var(--bg-primary);
    position: absolute;
    left: 0;
    bottom: -3.5px;
    transition: .3s ease-out;
    
}

&:hover::after{
    width: 100%;
 
}

`
