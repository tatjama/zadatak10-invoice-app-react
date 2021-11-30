import React, { useState } from 'react';
import InputRadio from './InputRadio'; 

import { FormStyling }  from './SelectFormStyle';
import arrowDown from '../../assets/icon-arrow-down.svg';


const SelectForm = ({onStatusSelected}) => {
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

