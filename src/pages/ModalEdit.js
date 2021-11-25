import React, {useState, useRef } from 'react';
import styled  from 'styled-components';
import bin  from '../assets/icon-delete.svg';
import EditButtons  from '../components/Buttons/EditButtons';
import GoBack  from '../components/GoBack';

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
    const [isAddItemOpen, setIsAddItemOpen] = useState(true);
    const [ invoiceEdit, setInvoiceEdit] = useState(new Invoice(initialInvoice.createdAt, 
        initialInvoice.status, initialInvoice.description, initialInvoice.paymentTerms, 
        initialInvoice.clientName, initialInvoice.clientEmail, initialInvoice.senderAddress.street, 
        initialInvoice.senderAddress.city, initialInvoice.senderAddress.postCode, 
        initialInvoice.senderAddress.country, initialInvoice.clientAddress.street, 
        initialInvoice.clientAddress.city, initialInvoice.clientAddress.postCode, 
        initialInvoice.clientAddress.country, initialInvoice.items));

    const addNewItem = () => {        
        setIsAddItemOpen(true);
        const itemNameValue = itemName.current.value;
        const itemQuantityValue = itemQuantity.current.value;
        const itemPriceValue = itemPrice.current.value;
        let tempItem = new Item(itemNameValue, itemQuantityValue, itemPriceValue);
        let tempInvoice = {...invoiceEdit};
        tempInvoice.items.push(tempItem);
        setInvoiceEdit(tempInvoice);
        }

        const  createId = () =>  {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const firstLetter = chars[ Math.floor(Math.random() *25)];
            const secondLetter = chars[ Math.floor(Math.random() *25)];
            const numbers = Math.floor(Math.random() * 9999).toString().padStart(4,0);
            return firstLetter + secondLetter + numbers;
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
            const itemNameValue = itemName.current.value;
            const itemQuantityValue = itemQuantity.current.value;
            const itemPriceValue = itemPrice.current.value;    

            const tempInvoice = new Invoice(createdAtValue, invoiceEdit.status, descriptionValue, 
                paymentTermsValue, clientNameValue, clientEmailValue, senderStreetValue, 
                senderCityValue, senderPostCodeValue, senderCountryValue, clientStreetValue, 
                clientCityValue, clientPostCodeValue, clientCountryValue, invoiceEdit.items );
            const tempItem = new Item(itemNameValue, itemQuantityValue, itemPriceValue);

            tempInvoice.addItem(tempItem);
            tempInvoice.calculateTotal();
            tempInvoice.id = (invoice.id)? invoice.id: createId();
            return tempInvoice;
        }


    const onFormSubmit = (event) => {
        event.preventDefault();
        const addedInvoice = createInvoice();
        console.log(addedInvoice);
        //form validation === true
        onUpdateForm(addedInvoice);
        handleGoBack();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const onFormCancel = () => {
        setInvoiceEdit(initialInvoice);
        handleGoBack();
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
                    <label htmlFor="senderStreet">Street Address
                        <input type="text" defaultValue = {invoiceEdit.senderAddress.street} name="senderStreet"  ref={senderStreet}/>
                    </label>
                    <FlexWrapper>
                        <label htmlFor="senderCity">City
                            <input type="text" defaultValue = {invoiceEdit.senderAddress.city} name="senderCity" ref={senderCity}/>
                        </label>
                        <label htmlFor="senderPostCode">Post Code
                            <input type="text" name="senderPostCode" defaultValue = {invoiceEdit.senderAddress.postCode} ref = {senderPostCode}/>
                        </label>
                        <label htmlFor="senderCountry">Country
                            <input type="text" name="senderCountry" defaultValue = {invoiceEdit.senderAddress.country} ref = {senderCountry}/> 
                        </label>
                    </FlexWrapper>
                </fieldset>
                <fieldset>
                    <legend>Bill To</legend>
                    <label htmlFor="clientName">Client's name
                        <input type="text" name="clientName" defaultValue = {invoiceEdit.clientName} ref = {clientName}/>
                    </label>
                    <label htmlFor="clientEmail">Client's Email
                        <input type="text" name="clientEmail" defaultValue = {invoiceEdit.clientEmail} ref = {clientEmail}/>
                    </label>
                    <label htmlFor="clientStreet">Street Address
                        <input type="text" name="clientStreet" defaultValue = {invoiceEdit.clientAddress.street} ref = {clientStreet}/>
                    </label>
                    <FlexWrapper>
                        <label htmlFor="clientCity">City
                            <input type="text" name="clientCity" defaultValue = {invoiceEdit.clientAddress.city} ref = {clientCity}/>
                        </label>
                        <label htmlFor="clientPostCode">Post Code
                            <input type="text" name="clientPostCode" defaultValue = {invoiceEdit.clientAddress.postCode} ref = {clientPostCode}/>
                        </label>
                        <label htmlFor="clientCountry">Country
                            <input type="text" name="clientCountry" defaultValue = {invoiceEdit.clientAddress.country} ref = {clientCountry}/>
                        </label>
                    </FlexWrapper>
                </fieldset>
                <fieldset>
                    <FlexWrapper>
                        <label htmlFor="invoiceDate">Invoice Date
                            <input type="date" name="invoiceDate" defaultValue = {invoiceEdit.createdAt} ref = {createdAt}/>
                        </label>
                        <label htmlFor="paymentTerms" >Payment Terms<br/>
                            <select id="paymentTerms" name="paymentTerms" defaultValue = {invoiceEdit.paymentTerms} ref = {paymentTerms}>
                                <option value="1">Net 1 Day</option>
                                <option value="7">Net 7 Days</option>
                                <option value="14">Net 14 Days</option>
                                <option value="30">Net 30 Days</option>
                            </select>
                        </label>
                    </FlexWrapper>
                    <label htmlFor="projectDescription">Project Description
                        <input type="text" name="projectDescription" defaultValue = {invoiceEdit.description} ref = {description}/>
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
                    invoiceEdit.items.map(item =>{
                        return<FlexWrapper key = {item.name}> 
                            <ItemField >
                         <input type="text"  defaultValue = {item.name}  ref = {item.name}/>
                        </ItemField>
                        <ItemField >
                        <input type="number" defaultValue = {item.quantity}/>
                        </ItemField>
                        <ItemField >
                          <input type="number" defaultValue = {item.price} />
                        </ItemField>
                        <ItemField >
                           <input type="number" defaultValue = {item.total}/>
                        </ItemField>
                         <img src = { bin } alt = "bin"/>    
                        </FlexWrapper>
                    })}
                    
                    { isAddItemOpen && <FlexWrapper>
                        <ItemField htmlFor="itemName">
                         <input type="text"  name="itemName" onFocus = {() => itemName.current.value = ""} defaultValue = "" ref = {itemName}/>
                        </ItemField>
                        <ItemField htmlFor="itemQuantity">
                        <input type="number" name="itemQuantity" onFocus = {() => itemQuantity.current.value = ""} defaultValue = "" ref = {itemQuantity}/>
                        </ItemField>
                        <ItemField htmlFor="itemPrice">
                          <input type="number" name="itemPrice" onFocus = {() => itemPrice.current.value = ""} defaultValue = "" ref = {itemPrice}/>
                        </ItemField>
                        <ItemField htmlFor="total">
                           <input type="number" name="total"/>
                        </ItemField>
                         <img src = { bin } alt = "bin"/>
                    </FlexWrapper>}
                    
                    <ButtonAddItem onClick = {addNewItem}> + Add New Item</ButtonAddItem>                    
                </fieldset>
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