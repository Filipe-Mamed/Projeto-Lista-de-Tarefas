import styled from "styled-components";
import { FcFullTrash } from "react-icons/fc";
import { FaRocket } from "react-icons/fa";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Centro = styled.main`
    background-color: white;
    padding: 30px 20px;
    border-radius: 5px;
`;

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    margin-right: 10px;
    width: 340px;
    margin-right: 40px;
`;

export const Button = styled.button`
   background-color: #8052EC;
   border-radius: 5px;
   color: white;
   font-weight: 900;
   font-size: 17px;
   line-height: 2px;
   height: 40px;
   border: none;
   width: 130px;
   cursor: pointer;
   
   &:hover {
    opacity: 0.8;
   }

   &:active{
    opacity: 0.6;
   }
`;

export const ItemLista = styled.ul`
    border-radius: 5px;
    padding: 0;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 500px;
`;

export const Item = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${function(props){
        return props.$Finalizada ? "#E8FF8B" : "#E4E4E4";
    }};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-bottom: 10px;
    width: 100%;
    padding: 10px;
    height: 50px;
`;

export const Foguete = styled(FaRocket)`
    cursor: pointer;
`

export const Lixo = styled(FcFullTrash)`
    cursor: pointer;
`

export const Texto3 = styled.h3`
    text-align: center;
`