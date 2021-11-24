import React from 'react';
import styled  from 'styled-components';

const Buttons = ({onClickEdit, status}) => {

    return(
        <ButtonsContainer>
            <Button onClick = {onClickEdit}>Edit</Button>
            <Button >Delete</Button>
            <Button >Mark as Paid</Button>
        </ButtonsContainer>  
    )
}

export default Buttons;

const ButtonsContainer = styled.div` 
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    @media screen and (max-width: 600px){
        justify-content: space-around;
    }
`

const Button = styled.button` 
    &:nth-of-type(1){
            background-color: #F9FAFE;
            color: #7E88C3;
            &:hover{
                background-color: #DFE3FA;
            }
        }
        &:nth-child(2){
            background-color: #EC5757;
            &:hover{
                background-color: #FF9797;
            }
        }
`


