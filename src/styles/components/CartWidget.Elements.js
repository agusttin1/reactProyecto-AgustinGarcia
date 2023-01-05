import styled from "styled-components";
import { CiShoppingCart } from "react-icons/ci";



export const NoContador = styled.span`
display: none;
`
export const ContadorCart = styled.span`
position: absolute;
    right: -12px;
    top: -18px;
    background-color: var(--color-primary);
    font-size: 12.5px;
    font-weight: 600;
color: white;
    border: black 2px solid;
    border-radius: 50px;
    padding: 1px;

`

export const Icon = styled(CiShoppingCart)`
  fill: var(--color-primary);
    font-size: 30px;
`

export const CarritoCont = styled.div`
    position: relative;
    height: 100%;
    width: auto;
`
