import React, { useState } from 'react';
import styled  from 'styled-components';
import arrowDown from '../../assets/icon-arrow-down.svg';
import InputRadio from './InputRadio'; 


const Form = ({theme}) => {
    const [isOpen , setIsOpen] = useState(false);

    const toggleForm = () => {
        setIsOpen(!isOpen);
    }

    return(
    <FormStyling> 
        <label onClick = {toggleForm}  htmlFor ="status">
            Filter <span> by status</span> 
            <img src = { arrowDown } alt = "arrow down"/>
        </label>{
            
            isOpen && <fieldset>
                        <InputRadio radioValue="draft"/>
                        <InputRadio radioValue="pending"/>
                        <InputRadio radioValue="paid"/>
                    </fieldset>     
                    }   
    </FormStyling>    
    )
}

export default Form;

const FormStyling = styled.form` 
    margin-right: 40px;    
    position: relative;
    label{
        font-weight: 700;    
        color: ${props => props.theme.titleColor};        
        cursor: pointer; 
    }
    img{
        margin-left: 16px;
    }
    fieldset{
        position: absolute;
        top: 24px;
        left: -32px;
        width: 192px;
        height: 128px;
        padding: 8px;
        border: 0;
        box-shadow:${props => props.theme.shadowField};
        border-radius: 8px;
        background : ${props => props.theme.backgroundField};
        /*display: none;*/       
    }
    /*select:hover{
        display: block;
    }*/
    @media screen and (max-width:600px){
        margin-right: 12px;
        span:first-child{
            display: none;
        }
    }
 `