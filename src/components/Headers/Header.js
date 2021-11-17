import React from 'react';
import styled  from 'styled-components';
import arrowDown from '../../assets/icon-arrow-down.svg';
import  plus from '../../assets/icon-plus.svg';

const Header = () => {
    return(
        <HeaderContainer>
            <div>
                <h1>
                    Invoices
                </h1>
                <p>
                    No invoices
                </p>
            </div>
            <FormContainer>
                <Form> 
                    <label  htmlFor ="status">
                        Filter by status 
                        <img src = { arrowDown } alt = "arrow down"/>
                    </label>
                    <br/>
                    <select name="status" id="status">
                        <option value="draft">Draft</option>
                        <option value="pending">Pending</option>
                        <option value="paid">Paid</option>
                    </select>
                </Form>
                <AddButton type="button">
                    <div>
                        <img src = { plus } alt="plus"/>
                    </div>
                    <span>New Invoice</span>
                </AddButton>
            </FormContainer>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.header` 
    width: 55%;
    margin: 72px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
         color: ${props => props.theme.titleColor};// #0C0E16;//#FFFFFF;
    }
    p{
        color: ${props => props.theme.paragraphColor};// #888EB0;//#DFE3FA
    }
 `
 const FormContainer = styled.div`  
    display: flex;
    align-items: center;
 `
 const Form = styled.form` 
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
 ` 
 const AddButton = styled.button` 
    padding: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: #9277FF;
    }
    div{
        width: 32px;
        height: 32px;
        background: #FFFFFF;
        border-radius: 50%;
        padding: 11px;
    }
    img{
        width: 10px;
        height: 10px;
    }
    span{
        margin: 0 15px;
    }
 `