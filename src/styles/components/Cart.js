import styled from "styled-components";

import { Link } from "react-router-dom";


export const ContCard =styled.div`
width: 50%;
height: auto;
padding: 15px;
margin: 50px 0;
position: relative;
margin-left: 50px;
`


















// Components para el carrito vacio //

export const ContenedorCart = styled.div`
width: 100%;
height: 100%;
padding: 50px;
display: flex;
position: relative;
`

export const ContCarritoVacio = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

export const PmsjErr = styled.p`
font-family: 'Knewave';
font-size: 18px;

`

export const StyledLink = styled(Link)`
text-decoration: none;
background: white;
border: 4px solid var(--color-primary);
padding: 10px;
color: var(--color-primary);
font-family: 'Knewave';

&:hover{
    color: var(--color-primary);

}
`
