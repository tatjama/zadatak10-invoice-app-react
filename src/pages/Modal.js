import React from 'react';
import FormButtons  from '../components/Buttons/FormButtons';
import GoBack  from '../components/GoBack';
import Form from '../components/Forms/Form';
import useForm from '../hooks/useForm';

import  {ModalContainer, LinkContainer ,FormContainer, GradientDiv } from './ModalStyle';

const Modal = ({invoice,onSubmitForm , handleGoBack}) => {

 const  {setItemFields, onSaveAsDraft , onFormSubmit ,handleSubmit, invoiceAdd, formFieldsRef, 
    itemFields, itemName, itemQuantity, itemPrice, formErrors } = useForm({invoice, onSubmitForm, handleGoBack})
    
    return(
        <ModalContainer>     
            <FormContainer onSubmit = {handleSubmit}>
                <LinkContainer onClick = { handleGoBack }>
                    <GoBack/>    
                </LinkContainer>   
                <Form 
                    invoiceId =  { invoice.id } 
                    invoice = { invoiceAdd } 
                    formFieldsRef = { formFieldsRef }
                    itemFields = { itemFields } 
                    setItemFields = { setItemFields }
                    itemName = { itemName }
                    itemQuantity = { itemQuantity }
                    itemPrice = { itemPrice }
                    formErrors = {formErrors}
                />
                <GradientDiv>
                        <div></div>
                        <FormButtons 
                            saveAsDraft = { onSaveAsDraft } 
                            discardForm = {handleGoBack} 
                            submitForm = { onFormSubmit }/>
                    </GradientDiv>
            </FormContainer>
        </ModalContainer>
    )
}

export default Modal;


