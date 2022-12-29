import styled from "styled-components";

export const Cont = styled.div`
display: flex;
flex-direction: column;
margin: 60px;
justify-content: center;
align-items: center;
width: auto;
height: auto;
position: relative;
padding: 40px;

&::before{
content: '';
position: absolute;
height: 100%;
width: 100%;
border-radius: 0% 50% 0% 50%;
left: 0;
top: 15px;
background-color: var(--color-primary);

}

`
export const ContLi = styled.ul`
display: flex;
list-style: none;
gap: 20px;
height: auto;
justify-content: center;
flex-wrap: wrap;
background-color: transparent;
padding: 30px;
position: relative;
border-radius: 20px;
width: 100%;


`

export const ContTitulo = styled.div`
font-family: 'knewave';
text-align: center;
font-size: 22px;
position: relative;
-webkit-text-stroke: 2px var(--color-primary);
color:white;
text-shadow: 4px 4px 8px black;

&::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 25px;
   
    z-index: -1;
    left: 0;
}

`

export const Li = styled.li`
width: 240px;
height: 240px;
height: auto;
position: relative;
display: flex;
align-items: center;
flex-direction: column;
gap: 10px;


img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}


`

export const Btn = styled.button`
padding:5px;
width:100%;
border-radius:10px;
color:white;
font-family:'Poppins';
border:2px solid white;
text-shadow:4px 4px 10px black;
background-color:var(--color-primary);
transition: all .4s;

&:hover{
    background-color: var(--bg-secondary);
    color: black;
    border: 2px solid black;
}
`
