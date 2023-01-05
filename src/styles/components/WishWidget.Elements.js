import styled from "styled-components";
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai"


export const ContHeart = styled.div`
 position: relative;
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
`

export const Contador = styled.span`
position: absolute;
    right: -12px;
    top: -20px;
    background-color: var(--color-primary);
    font-size: 12.5px;
    font-weight: 600;
color: white;
    border: black 2px solid;
    border-radius: 50px;
    padding: 1px;
`



export const Icon = styled(AiOutlineHeart)`
 fill: var(--color-primary);
    font-size: 25px;
`

export const IconFill = styled(AiFillHeart)`
 fill: var(--color-primary);
    font-size:25px;
`
