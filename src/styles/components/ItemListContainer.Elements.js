import styled from 'styled-components'
import { Link } from "react-router-dom";
import heartFill from '/pngHeart/Fill.png'
import heartNoFill from '/pngHeart/NoFill.png'


export const ContMainCards = styled.div`
display: flex;
    flex-flow: row wrap;
    width: 100%;
   padding:30px;
    height: auto;
    gap: 25px;
    justify-content: center;
 
   
    `
export const ContCard = styled.div`
width: 240px;
height: auto;
position: relative;


z-index: 99;
padding:20px;
border-radius:10px;
background-color: whitesmoke;

@media (max-width:600px) {
    width: 190px;
    
}
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
width:250px;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
cursor:pointer;
text-align:center;
@media (max-width:600px) {
    width: 180px;
}

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
text-decoration: none;
color: white;
&:hover{
    color:wheat;
   
}

`

export const ContHeart = styled.input`
width: 45px;
height: 45px;
position: relative;
z-index: 1;
appearance: unset;
position: absolute;
top:  0px;
right: -10px;
&::after{
    background-color: transparent;
background-image:url(${heartFill}) ;
border: none;

background-position: center;
background-size: contain;
position: absolute;
height: 40px;
width: 40px;
content: '';
}

`

export const ContHeartNoFill = styled.input`
width: 45px;
height: 45px;
position: relative;
background-color: transparent;
border: none;
outline: none;
z-index: 1;
appearance: unset;
position: absolute;
top:  0px;
right: -10px;

&::after{
    background-image: url(${heartNoFill}) ;
border: none;
height: 40px;
width: 40px;
background-position: center;
background-size: cover;
background-color: transparent;
position: absolute;
content: '';
}
`
