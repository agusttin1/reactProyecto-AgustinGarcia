import styled from "styled-components";





export const ContWishList = styled.div`

display: flex;
flex-direction: column;

width: 100%;
height: auto;
flex-flow: row wrap;
    
   padding:30px;
   gap: 25px;

`
export const ContCardWishList = styled.div`
display: flex;
flex-flow:  row wrap;
width: 100%;
   padding:30px;
    height: auto;
    gap: 25px;
    justify-content: flex-start;


`

export const ContTituloWList = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
gap: 40px;
height: auto;
color: white;
text-shadow: 2px 4px 6px black;
width: auto;
-webkit-text-stroke: 2px var(--color-primary);

p{
  margin: 0;
  padding: 0;
  font-size: 30px;
  font-family: 'Knewave';
}


`














export const ContWishListEmpty= styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  

`

export const PMsjWishList = styled.p`

font-family: "Knewave";
  font-size: 18px;
  inline-size: 550px;
position: absolute;
bottom: 205px;
  text-align: center;
  word-wrap: break-word;

  @media (max-width: 600px) {
inline-size:auto ;
  }


  
`

export const ContImgWishList = styled.div`
height: auto;
width: 400px;
img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}




`
