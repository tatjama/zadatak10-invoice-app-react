import React from 'react';
import styled  from 'styled-components';
import SelectForm from '../Forms/SelectForm';
import AddButton from '../Buttons/AddButton';

const Header = ({num, onStatusSelected, theme, handleAddForm}) => {


    return(
        <HeaderContainer>
            <div>
                <h1> Invoices </h1> 
                {(num) ? <p><span>There are</span> {num}<span> total</span> invoices</p>: <p> No invoices </p>}                
            </div>
            <FormContainer>
                <SelectForm onStatusSelected = {onStatusSelected} theme = { theme }/>
                <AddButton handleAddForm = { handleAddForm} />
            </FormContainer>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.header` 
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
         color: ${props => props.theme.titleColor};// #0C0E16;//#FFFFFF;
    }
    p{
        color: ${props => props.theme.paragraphColor};// #888EB0;//#DFE3FA
        @media screen and (max-width: 600px) {
            span{
                display: none;
            }
        }
    }    
 `
 const FormContainer = styled.div`  
    display: flex;
    align-items: center;
 `
  
 