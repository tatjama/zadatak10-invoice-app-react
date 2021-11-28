import React, {useState, useRef, useEffect } from 'react';
import FormButtons  from '../components/Buttons/FormButtons';
import GoBack  from '../components/GoBack';
import FormErrors from '../components/Forms/FormErrors';
import { Invoice } from '../util/Invoice';
import { Item } from '../util/Item';
import { formValidation } from '../util/formValidation';
import { itemsValidation } from '../util/itemsValidation';
import { createId } from '../util/createId';
import  {ModalContainer, LinkContainer ,FormContainer, FlexWrapper ,GradientDiv } from './ModalStyle';
import styled  from 'styled-components';
import ItemsFieldset from '../components/Forms/ItemsFieldset';


const Modal = ({invoice,onSubmitForm , handleGoBack}) => {

    const createdAt = useRef('');
    const description = useRef('');
    const paymentTerms = useRef('');
    const clientName = useRef('');
    const clientEmail = useRef('');
    const senderStreet = useRef('');
    const senderCity = useRef('');
    const senderCountry = useRef('');
    const senderPostCode = useRef('');
    const clientStreet = useRef('');
    const clientCity = useRef('');
    const clientCountry = useRef('');
    const clientPostCode = useRef('');
    const itemName = useRef('');
    const itemQuantity = useRef('');
    const itemPrice = useRef('');


    const [ invoiceAdd, setInvoiceAdd] = useState(new Invoice(new Date().toISOString().substr(0,10), "", "", "1", "", "", "",
         "", "", "", "", "", "", "", []));

         const [ itemFields, setItemFields ] = 
         useState( invoiceAdd.items.map( (item) =>new Item(item.name, item.quantity, item.price)))
         

    const [formErrors, setFormErrors] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
     
    const createInvoice = () => {
        const createdAtValue = createdAt.current.value;
        const descriptionValue = description.current.value;
        const paymentTermsValue = paymentTerms.current.value;
        const clientNameValue = clientName.current.value;
        const clientEmailValue = clientEmail.current.value;
        const senderStreetValue = senderStreet.current.value;
        const senderCityValue = senderCity.current.value;
        const senderCountryValue = senderCountry.current.value;
        const senderPostCodeValue = senderPostCode.current.value;
        const clientStreetValue = clientStreet.current.value;
        const clientCityValue = clientCity.current.value;
        const clientCountryValue = clientCountry.current.value;
        const clientPostCodeValue = clientPostCode.current.value;

        const formFieldsValues = [createdAtValue, descriptionValue ,paymentTermsValue, 
             clientNameValue, clientEmailValue, senderStreetValue ,senderCityValue ,
              senderCountryValue, senderPostCodeValue ,  clientStreetValue, clientCityValue, 
              clientCountryValue, clientPostCodeValue ];
        const formFieldsNames = ["invoiceDate", "projectDescription" ,"paymentTerms", 
            "clientName", "clientEmail", "senderStreet" ,"senderCity" ,
             "senderCountry", "senderPostCode" ,  "clientStreet", "clientCity", 
             "clientCountry", "clientPostCode"];    
        const formFieldsRef = [createdAt, description ,paymentTerms, 
            clientName, clientEmail, senderStreet ,senderCity ,
             senderCountry, senderPostCode ,  clientStreet, clientCity, 
             clientCountry, clientPostCode]     
        
        const tempInvoice = new Invoice(createdAtValue, invoiceAdd.status , descriptionValue, paymentTermsValue, 
        clientNameValue, clientEmailValue, senderStreetValue, senderCityValue, senderPostCodeValue,
        senderCountryValue, clientStreetValue, clientCityValue, clientPostCodeValue, 
        clientCountryValue, itemFields );

        tempInvoice.calculateTotal();
        tempInvoice.id = (invoice.id)? invoice.id: createId();
        tempInvoice.status = "pending";
        const itemErrors = itemsValidation(itemName, itemQuantity, itemPrice);
        const fErrors =  formValidation( formFieldsValues, formFieldsNames, formFieldsRef);
        if(itemErrors.length > 0){
            fErrors.push(itemErrors[0])
        }
        return [tempInvoice, fErrors];
    }

    const onSaveAsDraft = (event) => {
        event.preventDefault();
        const addedInvoice = createInvoice()[0];
        addedInvoice.status = 'draft';
        onSubmitForm(addedInvoice);
        handleGoBack();
    }
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        const [addedInvoice, errorsList] = createInvoice();
        setInvoiceAdd(addedInvoice)
        setFormErrors(errorsList);
        setIsSubmitted(true);
    }        
    
    useEffect(() => {
        if (isSubmitted) {
          if (formErrors.length === 0) {
            onSubmitForm(invoiceAdd);
            handleGoBack();
          } 
          setIsSubmitted(false);
        }
      }, [isSubmitted, formErrors, handleGoBack, invoiceAdd, onSubmitForm]);
    

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleOnFocus = (e) => {
        e.target.parentElement.className = "";
    }

    return(
        <ModalContainer>     
            <FormContainer onSubmit = {handleSubmit}>
                <LinkContainer onClick = { handleGoBack }>
                    <GoBack/>    
                </LinkContainer>   
                {invoice.id? <h1>Edit {invoice.id}</h1>: <h1>New Invoice</h1>}
                
                <fieldset>
                    <legend>Bill From</legend>
                    <label  htmlFor="senderStreet">Street Address
                    <span>can't be empty</span> 
                        <input  type="text" 
                        onFocus = {(e) => handleOnFocus(e)}
                        defaultValue = {invoiceAdd.senderAddress.street} 
                        name="senderStreet"  ref={senderStreet}/>
                    </label>
                    <FlexWrapper>
                        <LabelAddress htmlFor="senderCity">City
                        <span>can't be empty</span> 
                            <input type="text"
                            onFocus = {(e) => handleOnFocus(e)}
                            defaultValue = {invoiceAdd.senderAddress.city} 
                            name="senderCity" ref={senderCity}/>
                        </LabelAddress>
                        <LabelAddress htmlFor="senderPostCode">Post Code
                        <span>can't be empty</span> 
                            <input type="text" name="senderPostCode" 
                            onFocus = {(e) => handleOnFocus(e)}
                            defaultValue = {invoiceAdd.senderAddress.postCode} 
                            ref = {senderPostCode}/>
                        </LabelAddress>
                        <LabelAddress htmlFor="senderCountry">Country
                        <span>can't be empty</span> 
                            <input type="text" name="senderCountry" 
                            onFocus = {(e) => handleOnFocus(e)}
                            defaultValue = {invoiceAdd.senderAddress.country} 
                            ref = {senderCountry}/> 
                        </LabelAddress>
                    </FlexWrapper>
                </fieldset>
                <fieldset>
                    <legend>Bill To</legend>
                    <label htmlFor="clientName">Client's name
                    <span>can't be empty</span> 
                        <input type="text" name="clientName" 
                        onFocus = {(e) => handleOnFocus(e)}
                         defaultValue = {invoiceAdd.clientName} ref = {clientName}/>
                    </label>
                    <label htmlFor="clientEmail">Client's Email
                    <span>can't be empty</span> 
                        <input type="text" name="clientEmail" 
                        placeholder = "e.g. email@example.com"
                        onFocus = {(e) => handleOnFocus(e)}
                        defaultValue = {invoiceAdd.clientEmail} 
                        ref = {clientEmail}/>
                    </label>
                    <label htmlFor="clientStreet">Street Address
                    <span>can't be empty</span> 
                        <input type="text" name="clientStreet" 
                        onFocus = {(e) => handleOnFocus(e)}
                        defaultValue = {invoiceAdd.clientAddress.street} 
                        ref = {clientStreet}/>
                    </label>
                    <FlexWrapper>
                        <LabelAddress htmlFor="clientCity">City
                        <span>can't be empty</span> 
                            <input type="text" name="clientCity" 
                            onFocus = {(e) => handleOnFocus(e)}
                            defaultValue = {invoiceAdd.clientAddress.city} 
                            ref = {clientCity}/>
                        </LabelAddress>
                        <LabelAddress htmlFor="clientPostCode">Post Code
                        <span>can't be empty</span> 
                            <input type="text" name="clientPostCode" 
                            onFocus = {(e) => handleOnFocus(e)}
                            defaultValue = {invoiceAdd.clientAddress.postCode} 
                            ref = {clientPostCode}/>
                        </LabelAddress>
                        <LabelAddress htmlFor="clientCountry">Country
                        <span>can't be empty</span> 
                            <input type="text" name="clientCountry"
                            onFocus = {(e) => handleOnFocus(e)}
                            defaultValue = {invoiceAdd.clientAddress.country} 
                            ref = {clientCountry}/>
                        </LabelAddress>
                    </FlexWrapper>
                </fieldset>
                <fieldset>
                    <FlexWrapper>
                        <label htmlFor="invoiceDate">Invoice Date
                        <span>can't be empty</span> 
                            <input type="date" name="invoiceDate" 
                            defaultValue = {new Date().toISOString().substr(0,10)} 
                            ref = {createdAt}/>
                        </label>
                        <label htmlFor="paymentTerms" >Payment Terms<br/>
                        <span>can't be empty</span> 
                            <select id="paymentTerms" name="paymentTerms" 
                            defaultValue = {invoiceAdd.paymentTerms} 
                            ref = {paymentTerms}>
                                <option value="1">Net 1 Day</option>
                                <option value="7">Net 7 Days</option>
                                <option value="14">Net 14 Days</option>
                                <option value="30">Net 30 Days</option>
                            </select>
                        </label>
                    </FlexWrapper>
                    <label htmlFor="projectDescription">Project Description
                    <span>can't be empty</span> 
                        <input type="text" name="projectDescription" 
                        placeholder = "e.g. Graphic Design Service"
                        onFocus = {(e) => handleOnFocus(e)}
                        defaultValue = {invoiceAdd.description} 
                        ref = {description}/>
                    </label>
                </fieldset>
                <ItemsFieldset 
                    itemFields = { itemFields } 
                    setItemFields = { setItemFields }
                    itemName = { itemName }
                    itemQuantity = { itemQuantity }
                    itemPrice = { itemPrice }

                    />                
                <FormErrors formErrors = {formErrors}/>                
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

const LabelAddress = styled.label` 
    width: 30%;
    @media screen and (max-width:600px){
        width: 152px
    }
`
