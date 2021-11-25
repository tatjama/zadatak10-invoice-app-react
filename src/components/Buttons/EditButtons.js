import React from 'react';
import styled  from 'styled-components';

const EditButtons = ({cancelForm,submitForm}) => {

    return(
        <ButtonsContainer>
            <FirstButtons>
                <button onClick = {cancelForm}>Cancel</button>
            </FirstButtons>
                <button onClick = {submitForm} >SaveChanges</button>
        </ButtonsContainer>  
    )
}

export default EditButtons;

const ButtonsContainer = styled.div` 
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding:0 48px;
    @media screen and (max-width: 600px){
        justify-content: space-between;
        padding: 0 16px;
        button{
            padding: 17px 16px;
        }
        
    }
`
const FirstButtons = styled.section`
    width: 72%;
    display:flex;
    justify-content: space-between;
    button{
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
    }
    @media screen and (max-width: 600px) {
        width: 65%;
    }
`

