import React, {useState, useRef, useEffect } from 'react';
import EditButtons  from '../components/Buttons/EditButtons';
import GoBack  from '../components/GoBack';
import FormErrors from '../components/Errors/FormErrors';
import { Invoice } from '../util/Invoice';
import { Item } from '../util/Item';
import { formValidation } from '../util/formValidation';
import { createId } from '../util/createId';
import  {ModalContainer, LinkContainer , FormContainer, FlexWrapper ,  
    GradientDiv , ErrorsStyling } from './ModalStyle';
import  ItemsFieldset from '../components/Forms/ItemsFieldset';

const ModalEdit = ({invoice,  onUpdateForm , handleGoBack}) => {

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
    
    const initialInvoice = JSON.parse(JSON.stringify(invoice))
    const [ invoiceEdit, setInvoiceEdit] = useState(new Invoice(initialInvoice.createdAt, 
        initialInvoice.status, initialInvoice.description, initialInvoice.paymentTerms, 
        initialInvoice.clientName, initialInvoice.clientEmail, initialInvoice.senderAddress.street, 
        initialInvoice.senderAddress.city, initialInvoice.senderAddress.postCode, 
        initialInvoice.senderAddress.country, initialInvoice.clientAddress.street, 
        initialInvoice.clientAddress.city, initialInvoice.clientAddress.postCode, 
        initialInvoice.clientAddress.country, initialInvoice.items));

        const [ itemFields, setItemFields ] = 
        useState( invoiceEdit.items.map( (item) =>new Item(item.name, item.quantity, item.price)))
        
        
    const [formErrors, setFormErrors] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const addItemField = (event) => {
        event.preventDefault();
        setItemFields([...itemFields, new Item("", 0, 0)]);
    }
    
        const handleOnChange = (index, event) => {
            const values = [...itemFields];      
            values[index][event.target.name] = event.target.value;
            values.forEach(value => value.total = value.price*value.quantity)
            setItemFields(values)
        }

        

        const removeItemField = (id) => {
            const values = [...itemFields];
            values.splice(id, 1);
            setItemFields(values);
        }

    
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
           
            const tempInvoice = new Invoice(createdAtValue, invoiceEdit.status, descriptionValue, 
                paymentTermsValue, clientNameValue, clientEmailValue, senderStreetValue, 
                senderCityValue, senderPostCodeValue, senderCountryValue, clientStreetValue, 
                clientCityValue, clientPostCodeValue, clientCountryValue, itemFields );
            tempInvoice.calculateTotal();
            tempInvoice.id = (invoice.id)? invoice.id: createId();
            const fErrors =  formValidation( formFieldsValues, formFieldsNames, formFieldsRef);
            return [tempInvoice, fErrors];
        }


    const onFormSubmit = (event) => {
        event.preventDefault();
        const [addedInvoice, errorsList] = createInvoice();
        addedInvoice.status = "pending";
        setInvoiceEdit(addedInvoice);
        setFormErrors(errorsList);
        setIsSubmitted(true);        
    }

    useEffect(() => {
        if (isSubmitted) {
          if (formErrors.length === 0) {
            onUpdateForm(invoiceEdit);
            handleGoBack();
          } 
          setIsSubmitted(false);
        }
      }, [isSubmitted, formErrors, handleGoBack, invoiceEdit, onUpdateForm]);
    
     
    const onFormCancel = () => {
        setInvoiceEdit(initialInvoice);
        handleGoBack();
    }

    const handleOnFocus = (e) => {
        e.target.parentElement.className = "";
    }


    return(
        <ModalContainer>     
            <FormContainer onSubmit = {onFormSubmit}>
                <LinkContainer onClick = { handleGoBack }>
                    <GoBack/>    
                </LinkContainer>   
                {invoice.id? <h1>Edit {invoice.id}</h1>: <h1>New Invoice</h1>}
                
                <fieldset>
                    <legend>Bill From</legend>
                    <label htmlFor="senderStreet">Street Address
                    <span>can't be empty</span> 
                        <input type="text" 
                        onFocus = {(e) => handleOnFocus(e)}
                        defaultValue = {invoiceEdit.senderAddress.street} 
                        name="senderStreet"  ref={senderStreet}/>
                    </label>                    
                    <FlexWrapper>                        
                        <label htmlFor="senderCity">City
                        <span>can't be empty</span> 
                            <input type="text"
                            onFocus = {(e) => handleOnFocus(e)}
                            defaultValue = {invoiceEdit.senderAddress.city} 
                            name="senderCity" ref={senderCity}/>
                        </label>
                        <label htmlFor="senderPostCode">Post Code
                        <span>can't be empty</span>
                            <input type="text" name="senderPostCode" 
                            onFocus = {(e) => handleOnFocus(e)}
                            defaultValue = {invoiceEdit.senderAddress.postCode} 
                            ref = {senderPostCode}/>
                        </label>
                        <label htmlFor="senderCountry">Country
                        <span>can't be empty</span>
                            <input type="text" name="senderCountry"
                            onFocus = {(e) => handleOnFocus(e)} 
                            defaultValue = {invoiceEdit.senderAddress.country} 
                            ref = {senderCountry}/> 
                        </label>
                    </FlexWrapper>
                </fieldset>
                <fieldset>
                    <legend>Bill To</legend>
                    <label htmlFor="clientName">Client's name
                    <span>can't be empty</span>
                        <input type="text" name="clientName" 
                        onFocus = {(e) => handleOnFocus(e)}
                        defaultValue = {invoiceEdit.clientName} 
                        ref = {clientName}/>
                    </label>
                    <label htmlFor="clientEmail">Client's Email
                    <span>can't be empty</span>
                        <input type="text" name="clientEmail" 
                        onFocus = {(e) => handleOnFocus(e)}
                        defaultValue = {invoiceEdit.clientEmail} 
                        ref = {clientEmail}/>
                    </label>
                    <label htmlFor="clientStreet">Street Address
                    <span>can't be empty</span>
                        <input type="text" name="clientStreet" 
                        onFocus = {(e) => handleOnFocus(e)}
                        defaultValue = {invoiceEdit.clientAddress.street} 
                        ref = {clientStreet}/>
                    </label>
                    <FlexWrapper>
                        <label htmlFor="clientCity">City
                        <span>can't be empty</span>
                            <input type="text" name="clientCity" 
                            onFocus = {(e) => handleOnFocus(e)}
                            defaultValue = {invoiceEdit.clientAddress.city} 
                            ref = {clientCity}/>
                        </label>
                        <label htmlFor="clientPostCode">Post Code
                        <span>can't be empty</span>
                            <input type="text" name="clientPostCode" 
                            onFocus = {(e) => handleOnFocus(e)}
                            defaultValue = {invoiceEdit.clientAddress.postCode} 
                            ref = {clientPostCode}/>
                        </label>
                        <label htmlFor="clientCountry">Country
                        <span>can't be empty</span>
                            <input type="text" name="clientCountry" 
                            onFocus = {(e) => handleOnFocus(e)}
                            defaultValue = {invoiceEdit.clientAddress.country} 
                            ref = {clientCountry}/>
                        </label>
                    </FlexWrapper>
                </fieldset>
                <fieldset>
                    <FlexWrapper>
                        <label htmlFor="invoiceDate">Invoice Date
                            <input type="date" name="invoiceDate"
                             defaultValue = {invoiceEdit.createdAt} 
                            ref = {createdAt}/>
                        </label>
                        <label htmlFor="paymentTerms" >Payment Terms<br/>
                            <select id="paymentTerms" name="paymentTerms" 
                            defaultValue = {invoiceEdit.paymentTerms} 
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
                        onFocus = {(e) => handleOnFocus(e)}
                        defaultValue = {invoiceEdit.description} 
                        ref = {description}/>
                    </label>
                </fieldset>
                <ItemsFieldset 
                    invoiceItems = { itemFields } 
                    handleOnChange ={ handleOnChange } 
                    removeItemField = { removeItemField }
                    addItemField = { addItemField }/>
                <ErrorsStyling>
                    <FormErrors formErrors = {formErrors}/>
                </ErrorsStyling>
                
                <GradientDiv>
                        <div></div>
                        <EditButtons cancelForm = {onFormCancel} submitForm = { onFormSubmit }/>
                    </GradientDiv>
            </FormContainer>
        </ModalContainer>
    )
}

export default ModalEdit;

