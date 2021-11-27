import React from 'react';
import { LabelContainer, CheckMark }  from './InputRadioStyle';

const InputRadio = ({radioValue}) => {
    return(
        <LabelContainer htmlFor = { radioValue }> { radioValue }
                <input name = "status" type = "radio" id= { radioValue } value = { radioValue }/>
                <CheckMark></CheckMark>
            </LabelContainer>
    )
}

export default InputRadio;

