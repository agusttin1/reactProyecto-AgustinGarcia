import { Link } from "react-router-dom";
import styled from "styled-components";


export const NavBarContainer = styled.div`
width: 100%;
height:100%;
position: sticky;
top: 0;
z-index: 99;
background-color: transparent;
display: flex;
justify-content: center;
position: relative;
border-top: 6px solid var(--color-primary);

`

export const NavBar = styled.div`
width: 100%;
max-width: 1300px;
height: 100%;
align-items: center;
display: flex;
justify-content: flex-start;
gap: 75px;

`


export const ContLogo = styled.div`
width: auto;
height: auto;
padding-left: 1rem;
`

export const Img = styled.img`
width: 200px;
height: 200px;
object-fit: contain;
`


export const Menu = styled.ul`

display: flex;
justify-content: center;
align-items: center;
gap: 20px;
margin: 0;
padding:0;

@media screen and (max-width:960px) {
width: 100%;
height: 90vh;
gap: 0;
position: absolute;
top: 200px;
left: ${({click}) => click ? 0 : '-100%'};
flex-direction: column;
background-color:var(--bg-primary);

transition: .5s all ease-in-out;
} 
`
export const MenuItem =styled.li`
justify-content: center;
align-items: center;
font-size: 18px;
font-family: 'Knewave';
list-style: none;
height: 60px;
height: 100%;
@media screen  and (max-width:960px){
    height: 60px;
} 
`


export const StyledLink =styled(Link)`
text-decoration: none;
color: white;
-webkit-text-stroke: 1px var(--color-primary);
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

export const CarritoCont =styled.div`
position: absolute;
right: 50px;
padding: 0;
margin: 0;
display: flex;
align-items: center;
padding-right: 1rem;
`


export const ContIconBars = styled.div`
display: none;

@media screen and (max-width:960px) {
    display: flex;
    color:var(--color-primary);
    font-size: 2rem;
    justify-content: flex-end;
width: 100%;
padding-right: 1rem;
}
`
export const TopNavBar = styled.div`

 text-align: center;
  color: #a95534;
  background-color: transparent;
  padding: 10px;
  font-weight: 600;
  width: 100%;
  p{
    margin: 0;
  }
  `
