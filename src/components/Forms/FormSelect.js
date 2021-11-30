import React from 'react';
import { SelectStyle }  from './FormSelectStyle';

const SelectForm = ({value, inputRef, name,  label}) => {    
    return(
        <label htmlFor={ name } >{ label }<br/>
            <SelectStyle id={ name } name={name} defaultValue = {value} ref = {inputRef}>
                <option value="1">Net 1 Day </option>
                <option value="7">Net 7 Days</option>
                <option value="14">Net 14 Days</option>
                <option value="30">Net 30 Days</option>
            </SelectStyle>                    
        </label>
    )
}

export default SelectForm;

