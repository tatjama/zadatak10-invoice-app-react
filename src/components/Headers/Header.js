import React from 'react';
import SelectForm from '../Forms/SelectForm';
import AddButton from '../Buttons/AddButton';

import { HeaderContainer, FormContainer }  from './HeaderStyle';

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


 