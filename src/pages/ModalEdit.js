import React from 'react';
import EditButtons  from '../components/Buttons/EditButtons';
import GoBack  from '../components/GoBack';
import Form from '../components/Forms/Form';
import useForm from '../hooks/useForm';

import  {ModalContainer, LinkContainer, FormContainer, GradientDiv } from './ModalStyle';

const ModalEdit = ({invoice,  onSubmitForm , handleGoBack}) => {

    const { setItemFields, onFormSubmit, onFormCancel, invoiceAdd, formFieldsRef, itemFields,
        itemName, itemQuantity, itemPrice, formErrors} = useForm({invoice,  onSubmitForm , handleGoBack})
    return(
        <ModalContainer>     
            <FormContainer onSubmit = {onFormSubmit}>
                <LinkContainer onClick = { handleGoBack }>
                    <GoBack/>    
                </LinkContainer>
                <Form invoiceId =  { invoice.id } 
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
                        <EditButtons cancelForm = {onFormCancel} submitForm = { onFormSubmit }/>
                    </GradientDiv>
            </FormContainer>
        </ModalContainer>
    )
}

export default ModalEdit;

