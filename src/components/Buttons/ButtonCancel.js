import React from 'react';
import { ButtonCancelStyle } from './ButtonGlobalStyle';

const ButtonCancel = ({ onCancelDelete }) => {
    return (
        <ButtonCancelStyle onClick = { onCancelDelete }>Cancel</ButtonCancelStyle>
    )
}

export default ButtonCancel;

