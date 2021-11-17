import React from 'react';
import styled  from 'styled-components';
import Form from '../Forms/Form';
import AddButton from '../Buttons/AddButton';

const Header = ({theme}) => {
    return(
        <HeaderContainer>
            <div>
                <h1> Invoices </h1>
                <p> No invoices </p>
            </div>
            <FormContainer>
                <Form theme = { theme }/>
                <AddButton/>
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
    @media screen and (max-width: 1000px) {
        width: 88%;
        margin: 56px auto;
    }
    @media screen and (max-width: 600px) {
       margin: 32px auto;
    }
 `
 const FormContainer = styled.div`  
    display: flex;
    align-items: center;
 `
  
 