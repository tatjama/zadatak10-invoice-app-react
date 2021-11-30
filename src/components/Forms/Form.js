import React from 'react';
import FormAddress from './FormAddress';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormErrors from './FormErrors';
import ItemsFieldset from './ItemsFieldset';

import {  FlexWrapper } from '../../pages/ModalStyle';

const Form  = ({ invoiceId, invoice , formFieldsRef,itemFields, setItemFields, itemName , 
        itemQuantity, itemPrice, formErrors }) => {
    
    return(
        <>
                   {invoiceId? <h1>Edit {invoiceId}</h1>: <h1>New Invoice</h1>}                
                <fieldset>
                    <legend>Bill From</legend>
                    <FormAddress 
                        address = { invoice.senderAddress }
                        street = { formFieldsRef[5] }
                        postCode = { formFieldsRef[8] }
                        city ={ formFieldsRef[6] }
                        country = { formFieldsRef[7] }
                        type = "sender"
                        />
                </fieldset>
                <fieldset>
                    <legend>Bill To</legend>
                    <FormInput value = { invoice.clientName } inputRef = { formFieldsRef[3] }
                        name = "clientName" label = "Client's name" type= "text"
                    />
                    <FormInput value = { invoice.clientEmail } inputRef = { formFieldsRef[4] }
                        name = "clientEmail" label = "Client's Email" type= "email"
                    />                    
                    <FormAddress 
                        address = { invoice.clientAddress }
                        street = { formFieldsRef[9] }
                        postCode = { formFieldsRef[12] }
                        city ={ formFieldsRef[10] }
                        country = { formFieldsRef[11] }
                        type = "client"
                        />       
                </fieldset>
                <fieldset>
                    <FlexWrapper>
                        <FormInput value = {invoice.createdAt} inputRef = { formFieldsRef[0] }  
                            name = "invoiceDate" label = "Invoice Date" type= "date"
                        />
                        <FormSelect value = {invoice.paymentTerms} inputRef = { formFieldsRef[2] }
                        name = "paymentTerms" label = "Payment Terms" 
                        />                       
                    </FlexWrapper>
                    <FormInput value = { invoice.description } inputRef = { formFieldsRef[1] }
                        name = "projectDescription" label = "Project Description" type= "text"
                    />                    
                </fieldset>
                <ItemsFieldset 
                    itemFields = { itemFields } 
                    setItemFields = { setItemFields }
                    itemName = { itemName }
                    itemQuantity = { itemQuantity }
                    itemPrice = { itemPrice }
                    />                
                <FormErrors formErrors = {formErrors}/>
         
        </>
    )
}

export default Form;
