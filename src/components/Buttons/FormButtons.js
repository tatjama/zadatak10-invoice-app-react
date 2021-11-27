import React from 'react';
import { ButtonsContainer, FirstButtons, ButtonCancelStyle, ButtonSaveStyle  } from './ButtonsGlobalStyle';
const FormButtons = ({ discardForm, saveAsDraft, submitForm}) => {

    return(
        <ButtonsContainer>
            <FirstButtons>
                <ButtonCancelStyle onClick = {discardForm}>Discard</ButtonCancelStyle>
                <ButtonSaveStyle onClick = { saveAsDraft } >Save as Draft</ButtonSaveStyle>
            </FirstButtons>
                <button onClick = {submitForm} >Save & Send</button>
        </ButtonsContainer>  
    )
}

export default FormButtons;



