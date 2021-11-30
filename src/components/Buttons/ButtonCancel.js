import React from 'react';

import { ButtonCancelStyle } from './ButtonsGlobalStyle';

const ButtonCancel = ({ onCancelDelete }) => {
    return (
        <ButtonCancelStyle onClick = { onCancelDelete }>Cancel</ButtonCancelStyle>
    )
}

export default ButtonCancel;

