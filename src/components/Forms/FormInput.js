import React from 'react';

const FormInput = ({ value, name, label, type, inputRef}) => {
    return(
    <label htmlFor={ name }> { label }
         <span>can't be empty</span>
        <input type={ type } name = { name } 
        onFocus = {(e) => e.target.parentElement.className = ""}
        defaultValue = { value } 
        ref = { inputRef }/>
    </label>
    )
}

export default FormInput;