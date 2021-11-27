import React, { useState } from 'react';
import { FormStyling }  from './SelectFormStyle';
import arrowDown from '../../assets/icon-arrow-down.svg';
import InputRadio from './InputRadio'; 


const SelectForm = ({onStatusSelected, theme}) => {
    const [isOpen , setIsOpen] = useState(false);

    const toggleForm = () => {
        setIsOpen(!isOpen);
    }
    const handleOnChange = (event) => {
        const status = event.target.value;
        onStatusSelected(status);
    }

    return(
    <FormStyling onChange = {handleOnChange}> 
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

export default SelectForm;

