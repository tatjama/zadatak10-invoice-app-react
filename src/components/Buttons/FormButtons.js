import React from 'react';
import styled  from 'styled-components';

const FormButtons = ({status}) => {

    return(
        <ButtonsContainer>
            <Button>Discard</Button>
                <Button >Save as Draft</Button>
                <Button >Save & Send</Button>
        </ButtonsContainer>  
    )
}

export default FormButtons;

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
            background-color: #373B53;
            color: #888EB0;
            margin-right: 6px;
            &:hover{
                background-color: #0C0E16;
            }
        }
        @media screen and (max-width: 600px) {
            padding: 17px 16px;
        }
`

