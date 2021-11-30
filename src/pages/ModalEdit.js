import React from 'react';
import EditButtons  from '../components/Buttons/EditButtons';
import GoBack  from '../components/GoBack';
import  {ModalContainer, LinkContainer, FormContainer, GradientDiv } from './ModalStyle';
import Form from '../components/Forms/Form';
import useFormEdit from '../hooks/useFormEdit';

const ModalEdit = ({invoice,  onUpdateForm , handleGoBack}) => {

    const { setItemFields, onFormSubmit, onFormCancel, invoiceEdit, formFieldsRef, itemFields,
        itemName, itemQuantity, itemPrice, formErrors} = useFormEdit({invoice,  onUpdateForm , handleGoBack})
    return(
        <ModalContainer>     
            <FormContainer onSubmit = {onFormSubmit}>
                <LinkContainer onClick = { handleGoBack }>
                    <GoBack/>    
                </LinkContainer>
                <Form invoiceId =  { invoice.id } 
                    invoice = { invoiceEdit } 
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

