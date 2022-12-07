import styled from 'styled-components'
import { Link } from "react-router-dom";

export const ContMainCards = styled.div`
display: flex;
    flex-wrap: wrap;
    width: 100%;
   padding:30px;
    height: auto;
    gap: 25px;
    justify-content: center;
    background-color: whitesmoke;
    `
export const ContCard = styled.div`
width: 240px;
height: auto;
position: relative;
background-color:white;
padding:15px;
border-radius:10px;
`

export const CardImg = styled.img`
width: 100%;
height:100% ;
object-fit:cover;
position:relative;
`

export const ButtonCard = styled.button`
padding:5px;
width:100%;
border-radius:10px;
color:white;
font-family:'Poppins';
border:2px solid white;
text-shadow:4px 4px 10px black;
background-color:var(--color-primary);
`

export const CardTitle = styled.div`
font-size:16px;
font-family: 'Poppins';
width:200px;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
cursor:pointer;
text-align:center;

`

export const CardBody = styled.div`
display:flex;
flex-direction:column;
gap:5px;
align-items:center;
margin-top:10px;
`


export const CardText = styled.p`
color:var(--color-primary);
font-size:18px;
font-family:'Knewave';
`
export const ContNovedad = styled.div`
position:absolute;
top:-20px;
left:0;
height:85px;
width:85px;

`


export const HideContNovedad = styled.div`
display:none;

`

export const ImgNovedad = styled.img`
height:90%;
width:100%;
object-fit:cover;
`

export const ContIconDetails = styled.span`
position:absolute;
bottom:0;
right:-10px;
font-size:25px;
text-decoration:none;
`
export const StyledLink = styled(Link)`
color:var(--color-secondary);
transition: .5s ease-in-out;
&:hover{
    color:var(--color-primary);
}

`
