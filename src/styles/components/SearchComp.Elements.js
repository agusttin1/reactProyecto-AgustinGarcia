import styled from "styled-components";
import Icon from "../../assets/icons/icons8-search-more-100.png";
import { Link } from "react-router-dom";
import banner from '../../assets/banner/pexels-photo-7809123.jpeg'

export const ContHeaderFilters = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image:url(${banner}) ;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width: 100%;
height: 320px;
position: relative;
clip-path: polygon(0% 0%, 100% 0, 100% 100%, 54% 87%, 0 72%);


&::after{
  content: '';
  width: 100%;
  height: 100%;
  background-color: var(--color);
  position: absolute;

}


h1{
    position: relative;
    height: auto;
    padding: 0;
    margin: 0;
    font-family: 'Knewave';
    text-shadow: 6px 6px 10px black;
  -webkit-text-stroke: 2px var(--color-primary);

   
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
z-index: 1;
border-radius: 10px;
color:white;
padding: 10px;
`

export const Search = styled.input`
  width: 15px;
  z-index: 1;
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
font-weight: 800;


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
color: white;
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
z-index: 1;
font-size: 18px;;
-webkit-text-stroke: 1px var(--color-primary);
width: 100%;
position: relative;

font-family: 'Knewave';



&:hover{
    width: 100%;
    color: var(--color-secundary);
}

&::after{
    content: "";
    width: 0;
    height: 3px;
    background-color: var(--color-primary);
    position: absolute;
    left: 0;
    bottom: -3.5px;
    transition: .3s ease-out;
    
}

&:hover::after{
    width: 100%;
 
}

`
