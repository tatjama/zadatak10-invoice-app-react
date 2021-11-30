import React from 'react';

import styled  from 'styled-components';
import  plus from '../../assets/icon-plus.svg';

const AddButton = ({handleAddForm}) => {
    
    return(
    <AddButtonStyling onClick = {handleAddForm} type="button">
        <div>
            <img src = { plus } alt="plus"/>
        </div>
        <span>New <span>Invoice</span></span>
    </AddButtonStyling>    
    )
}

export default AddButton;

const AddButtonStyling = styled.button` 
    padding: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    
    div{
        width: 32px;
        height: 32px;
        background: #FFFFFF;
        border-radius: 50%;
        padding: 11px;
        margin-right: 15px;
    }
    img{
        width: 10px;
        height: 10px;
    }
    span span{
        margin-right: 15px;
    }
    @media screen and (max-width: 600px) {
        padding: 6px;
        div{
            margin-right: 0px;
        }
        span{
            margin-left: 8px;
            margin-right: 15px;
            span{
                display: none;
            }
        }
    }
 `