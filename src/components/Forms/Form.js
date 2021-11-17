import React from 'react';
import styled  from 'styled-components';
import arrowDown from '../../assets/icon-arrow-down.svg';

const Form = ({theme}) => {
    return(
    <FormStyling> 
        <label  htmlFor ="status">
            Filter <span> by status</span> 
            <img src = { arrowDown } alt = "arrow down"/>
        </label>
        <br/>
        <select name="status" id="status">
            <option value="draft">Draft</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
        </select>
    </FormStyling>    
    )
}

export default Form;

const FormStyling = styled.form` 
    margin-right: 40px;
    label{
        font-weight: 700;    
        color: ${props => props.theme.titleColor};    
    }
    img{
        margin-left: 16px;
    }
    select{
        display: none;
    }
    @media screen and (max-width:600px){
        margin-right: 12px;
        span{
            display: none;
        }
    }
 `