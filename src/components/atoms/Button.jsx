import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 80%;
    height: 50px;
    background-color: white; 
    border-radius: 5px;
    color: black;
    font-size: 18px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

    
`;

function Button({title, onclick}){
    return(
        <ButtonStyled onClick={onclick}>{title}</ButtonStyled>
    )
}

export default Button;