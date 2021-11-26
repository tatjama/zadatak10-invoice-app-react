import React, {useState, useRef, useEffect } from 'react';
import styled  from 'styled-components';
import bin  from '../assets/icon-delete.svg';
import EditButtons  from '../components/Buttons/EditButtons';
import GoBack  from '../components/GoBack';
import FormErrors from '../components/Errors/FormErrors';

const ModalEdit = ({invoice,  onUpdateForm , handleGoBack}) => {
    
    class Address  {
        constructor(street = "", city = "", postCode = "", country = ""){
            this.street = street;
            this.city =  city;
            this.postCode =  postCode;
            this.country = country;
        }
    }

    class Item {
        constructor(name = "", quantity = "0", price = "0"){
            this.name = name;
            this.quantity = quantity;
            this.price =  price;
            this.total = this.calculateTotal();              
        }
        calculateTotal = () => (this.price*1) * (this.quantity*1);
    }

    class Invoice{
        constructor(createdAt = new Date(), status,  description = '', paymentTerms = "1", 
                    clientName = "", clientEmail = "", senderStreet = "", senderCity ="", 
                    senderPostCode = "", senderCountry = "", clientStreet = "", clientCity = "", 
                    clientPostCode = "", clientCountry = "", items = []){
            
            this.createdAt = createdAt;
            this.paymentTerms = paymentTerms;
            this.paymentDue = this.calculatePaymentDue();
            this.description = description;            
            this.clientName = clientName;
            this.clientEmail = clientEmail;
            this.status = status;
            this.senderAddress  = new Address(senderStreet, senderCity, senderPostCode, senderCountry);
            this.clientAddress = new Address(clientStreet, clientCity, clientPostCode, clientCountry);
            this.items = items;
            this.total = 0;
        }

        calculatePaymentDue = () =>{
            if(this.createdAt && this.paymentTerms){
                let days = this.paymentTerms*(24*60*60*1000);
                let invoiceDate = Date.parse(this.createdAt);
                return new Date(invoiceDate + days);
            }else{
                return new Date()
            }            
        } 

        
        addItem = (item) => {
            this.items.push(item)
        }
         calculateTotal = () => {
             let sum = 0;
             console.log(this.items)
             for(let i = 0; i < this.items.length; i++){
                sum += this.items[i].total*1
             }
             this.total =  sum;
         }
         
    }
    
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

    const [isFormValid, setIsFormValid] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);


    const formValidation = (formValues, fieldNames, fieldRefs) =>{
        let fieldValidationErrors = [];
        for(let i=0; i < 13; i++){         
            switch(fieldNames[i]) {
              case 'clientName':
                //let nameValid = (formValues[i].match(/^[a-zA-ZŠšĐđŽžČčĆć]+$/) 
                let nameValid = (formValues[i].match(/^[a-z ,.'-]+$/i) 
                && formValues[i] !=="");
                if(!nameValid) {
                    fieldValidationErrors.push("Client name is not valid!");
                    fieldRefs[i].current.parentElement.className = "error";
                    }
                break;
               case 'clientEmail':
                let emailValid = (formValues[i].match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) 
                && formValues[i] !=="");
                if(!emailValid) {
                        fieldValidationErrors.push("Client email is invalid!");
                        fieldRefs[i].current.parentElement.className = "error";
                    }
                break;
              default:
                  let fieldValid = (formValues[i] !== '');
                  if(!fieldValid) {
                      fieldValidationErrors.push(fieldNames[i] + " cannot be empty!")
                      fieldRefs[i].current.parentElement.className = "error";
                  }   
                break;
            }
         }
       return fieldValidationErrors;       
    }
         

        const handleOnChange = (index, event) => {
            const values = [...itemFields];      
            values[index][event.target.name] = event.target.value;
            values.forEach(value => value.total = value.price*value.quantity)
            setItemFields(values)
        }

        const addNewItemField = (event) => {
            event.preventDefault();
            setItemFields([...itemFields, new Item("", 0, 0)]);
        }

        const removeItemField = (id) => {
            console.log(id)
            const values = [...itemFields];
            values.splice(id, 1);
            setItemFields(values);
        }

        const  createId = () => "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[ Math.floor(Math.random() *25)] 
            + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[ Math.floor(Math.random() *25)] 
                + Math.floor(Math.random() * 9999).toString().padStart(4,0);          

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
                clientCityValue, clientPostCodeValue, clientCountryValue, invoiceEdit.items );
            tempInvoice.calculateTotal();
            tempInvoice.id = (invoice.id)? invoice.id: createId();
            const fErrors =  formValidation( formFieldsValues, formFieldsNames, formFieldsRef);
            return [tempInvoice, fErrors];
        }


    const onFormSubmit = (event) => {
        event.preventDefault();
        const [addedInvoice, errorsList] = createInvoice();
        setInvoiceEdit(addedInvoice)
        setFormErrors(errorsList);
        setIsSubmitted(true);        
    }

    useEffect(() => {
        if (isSubmitted) {
          if (formErrors.length === 0) {
            setIsFormValid(true);
            onUpdateForm(invoiceEdit);
            handleGoBack();
          } else {
            setIsFormValid(false);

          }
          setIsSubmitted(false);
        }
      }, [isSubmitted, formErrors, handleGoBack, invoiceEdit, onUpdateForm]);
    
      
         

    const handleSubmit = (event) => {
        event.preventDefault();
    }

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
                <fieldset>
                    <h2> Item List</h2>
                    <FlexWrapper>
                        <ItemField>Item Name</ItemField>
                        <ItemField >Qty.</ItemField>
                        <ItemField >Price</ItemField>
                        <ItemField >Total</ItemField>
                        <ItemField></ItemField>
                    </FlexWrapper>
                    {
                    itemFields.map((item, idx) =>{
                        return<FlexWrapper key = {idx}> 
                            <ItemField >
                         <input type="text" label = "Item Name" name = "name" 
                         onFocus = {(e) => e.target.value = ""}
                         onChange = {(event) => handleOnChange(idx, event)}
                          defaultValue = {item.name} />
                        </ItemField>
                        <ItemField >
                        <input type="number" label = "Qty." name = "quantity"
                        onFocus = {(e) => e.target.value = ""} 
                        onChange = {(event) => handleOnChange(idx, event)} 
                        defaultValue = {item.quantity}/>
                        </ItemField>
                        <ItemField >
                          <input type="number" label = "Price" name = "price" 
                          onFocus = {(e) => e.target.value = ""}
                          onChange = {(event) => handleOnChange(idx, event)} 
                          defaultValue = {item.price} />
                        </ItemField>
                        <ItemField >
                           <input type="number" readOnly label = "Total" name = "total" 
                           defaultValue = {item.total} />
                        </ItemField>
                         <img onClick = {() => removeItemField(idx)} src = { bin } alt = "bin"/>    
                        </FlexWrapper>
                    })}
                    
                    <ButtonAddItem onClick = {addNewItemField}> + Add New Item</ButtonAddItem>                    
                </fieldset>
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

const ModalContainer = styled.section` 
    width: 100%;
    height: 100%;
    position: absolute;
    left: 103px;
    display: flex;
    background: rgba(0, 0, 0, 0.5);
    overflow: scroll;
    @media screen and (max-width: 1000px) {
        top: 80px;
        left: 0;
    }
    @media screen and (max-width: 600px) {
        top: 72px;
    }
`
const LinkContainer = styled.div` 
    display: none;
    margin: 24px;
    @media screen and (max-width:600px){
        display: block;
    }
`
const FormContainer = styled.form`
    width: 616px;
    height: 100%;
    background-color: ${props => props.theme.backgroundAddInvoice};
    overflow: scroll;
    border-radius: 0 28px 28px 0;
    padding: 8px;
    
    h1{
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.5px;
        margin: 48px;
        color: ${props => props.theme.titleColor};
    }
    h2{
        font-size: 18px;
        line-height: 32px;
        letter-spacing: -0.38;
        color: #777F98;       
    }
    fieldset{
       margin: 48px;
        border: none; 
    }
    label{
        margin-top: 24px;
        display: block;
        color: #7E88C3;
    }
    legend{
        color:#7C5DFA;
        font-weight: 700;        
    }
    label{
        color: ${props => props.theme.paragraphInvoice};
    }
    input, select{
        color: ${props => props.theme.titleColor} !important;
        border: ${props => props.theme.inputBorder};
        box-shadow : ${props => props.theme.inputBoxShadow} ;
    }
    span{
        float: right;
        font-size: 10px;
        line-height: 15px;
        letter-spacing: -0.25px;
        display: none;
    }
    .error{
        color: #EC5757; 
        span{
            display: block;
        }
        input{            
            border: 1px solid #EC5757;
        }
    }
    input:-webkit-autofill{
        -webkit-text-fill-color: ${props => props.theme.titleColor} !important;
    }
    input:hover, select:hover{
       border: 1px solid #7C5DFA; 
    }    
    @media screen and (max-width:600px){
        width: 100%;
        h1{
            margin: 24px 16px;
        }
        fieldset{
            margin: 24px 16px;
        }
    }
 `
 const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    label{
        width: 30%;        
    }
    label[for = "invoiceDate"]{
        width: 48%;
    }
    label[for = "paymentTerms"]{
        width: 48%;
    }
     
    img{
        object-fit: contain;
        margin-top: 50px;
        cursor: pointer;
    }
    @media screen and (max-width:600px){
        label{
            width: 152px;
            &:nth-child(3){
                width: 100%;
            }
        }
        label[for = "invoiceDate"]{
            width: 100%;
        }
        label[for = "paymentTerms"]{
            width: 100%;
        }
    
    }
  `
    const ItemField = styled.label`
        &:nth-child(1){
        width: 42%;
    } 
    &:nth-child(2){
        width: 9%;
    } 
    &:nth-child(3){
        width: 20%;
    } 
    &:nth-child(4){
        width: 9%;
        input{
            border: transparent;
            padding-left: 0;
            color: ${props => props.theme.paragraphInvoice} !important;
        }
    } 
    &:nth-child(5){
        width: 15px;
    }
    @media screen and (max-width:600px){        
        &:nth-child(1){
            width: 100%;
        }
        &:nth-child(2){
            width: 21%;
        } 
        &:nth-child(3){
            width: 33%;
        }
        &:nth-child(4){
            width: 20%;
        }
    }
    `

  const ButtonAddItem = styled.button`   
        width: 100%;
        background-color:${props => props.theme.backgroundItemsInvoice};
        color: ${props => props.theme.paragraphInvoice};
        margin: 16px 0 47px 0;
        &:hover{
            background-color: #DFE3FA ;
        }
        @media screen and (max-width:600px){
            margin: 48px 0 0 0;
        }
  `
  const GradientDiv = styled.div`
        width: 100%;
        height: 155px;
        div{
            &:first-child{
                height:64px;
                margin-bottom: 21px;
                background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.1) 100%);
                display: none;
            }
        }
        
        @media screen and (max-width:600px){
            div{
                &:first-child{
                    display: block;
                }
            }            
        }
   `
   const ErrorsStyling = styled.div`
   margin: 48px -16px 48px 44px;
       p{
            color:#EC5757;
            font-size: 10px;
            line-height: 15px;
            letter-spacing: -0.21px;
            font-weight: 500;
       }
   `
   