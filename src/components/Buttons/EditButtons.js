import React from 'react';

import { ButtonsContainer, FirstButtons, ButtonCancelStyle, ButtonSaveStyle } from './ButtonsGlobalStyle';

const EditButtons = ({cancelForm,submitForm}) => {

    return(
        <ButtonsContainer>
            <FirstButtons>
                <ButtonCancelStyle onClick = {cancelForm}>Cancel</ButtonCancelStyle>
            </FirstButtons>
                <ButtonSaveStyle onClick = {submitForm} >SaveChanges</ButtonSaveStyle>
        </ButtonsContainer>  
    )
}

export default EditButtons;



