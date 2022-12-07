import styled from "styled-components";

export const FeaturesSection = styled.section`
display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    width: 100%;
    height: 100%;
    background-color: var(--color-primary);
    @media (max-width:1024px){
        flex-direction:column;
    }

`

export const Features = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: 'Poppins';
`

export const FeaturesImg = styled.img`
width: 40px;
height: 40px;

`
export const FeatureTitle = styled.span`
font-size: 16px;
font-weight: 600;
margin: 20px;
color: white;

`


export const FeaturesDescrip = styled.span`
color: rgb(0, 0, 0);
width: 60%;
height: auto;


`
