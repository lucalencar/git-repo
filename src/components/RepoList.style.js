import styled from "styled-components";

export const Cards = styled.div`
    background-color: #f8f9fa;
    padding: 48px 0 48px 0;
    margin: 80px 0 0 0;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (208px);
    grid-template-columns: repeat(3, 208px);
    justify-content: center;
    grid-gap: 25px; 
`;

export const Card = styled.div`
    background-color: white;
    -webkit-box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 4px; 
`;

export const CardText = styled.div`
    padding: 20px;
    font-size: 18px; 
    font-weight: bold;
`;

export const CardLanguage = styled.div`
    font-size: 15px; 
    opacity: 0.6;
`;

export const CardButtons = styled.div`
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 50px 50px 1fr;
    grid-template-columns: 50px 50px 1fr;
    padding: 15px;
`;

export const CardButton = styled.div`
    display: -ms-grid;
    display: grid;
    align-content: center;
    justify-content: center;
    font-size: 15px;
    height: 30px;
    color: black;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    opacity: 0.6; 

    &:hover {
    -webkit-transition: all .2s;
    transition: all .2s; 
    background-color: #54595c;
    color: white; 
    cursor: pointer;
}
`;

export const CardBottomText = styled.div`
    text-align: right;
    margin: 0;
    padding-top: 5px;
    font-size: 15px;
    opacity: 0.6; 
    color: #202020;
`;

export const Titulo = styled.h2`
    justify-content: center;
    text-align:center;
`;