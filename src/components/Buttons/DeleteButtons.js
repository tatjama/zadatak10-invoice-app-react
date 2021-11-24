import React from 'react';
import styled  from 'styled-components';
import { Link } from 'react-router-dom';

const DeleteButtons = ({deleteInvoice, onCancelDelete}) => {

    return(
        <ButtonsContainer>
                <button onClick = {onCancelDelete}>Cancel</button>
               <Link to = "/"> <button onClick = {deleteInvoice} >Delete</button></Link>
        </ButtonsContainer>  
    )
}

export default DeleteButtons;

const ButtonsContainer = styled.div` 
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center; 
    padding:0 48px;
    button{        
         background-color: #F9FAFE;
         color: #7E88C3;
          &:hover{
            background-color: #DFE3FA;
          }                
    }
    a button{
            background-color: #EC5757;
            color: #FFFFFF;
            margin-left: 8px;
            &:hover{
                background-color: #FF9797;
            }
        }
    @media screen and (max-width: 600px){
        padding: 0 16px;
        button{
            padding: 17px 16px;
        }
        
    }
`

