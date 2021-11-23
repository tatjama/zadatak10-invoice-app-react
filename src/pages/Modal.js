import React, {useState, useRef } from 'react';
import styled  from 'styled-components';
import bin  from '../assets/icon-delete.svg';
import FormButtons  from '../components/Buttons/FormButtons';
import GoBack  from '../components/GoBack';

const Modal = ({initialInvoices,onSubmitForm , handleGoBack}) => {
   // const [invoices, setInvoices ] = useState(initialInvoices);
  //  const initialInvoices = fetchInvoices();
   // const url = '';
    //const [ invoices, setInvoices ] = useState(initialInvoices); 

    /*const fetchInvoices = async() =>{
        let response = await fetch(url);
        let data = await response.json();
        let invoices = await data;
        console.log(invoices);
    }*/
    class Address  {
        constructor(street, city, postCode, country){
            this.street = street.current.value;
            this.city =  city.current.value;
            this.postCode =  postCode.current.value;
            this.country = country.current.value;
        }
    }

    class Item {
        constructor(name, quantity, price){
            this.name = name.current.value;
            this.quantity = quantity.current.value;
            this.price =  price.current.value;
            this.total = this.calculateTotal();              
        }
        calculateTotal = () => (this.price*1) * (this.quantity*1);
    }

    class Invoice{
        constructor(createdAt,  description, paymentTerms, clientName, clientEmail, 
                    senderStreet, senderCity, senderPostCode, senderCountry, clientStreet, 
                    clientCity, clientPostCode, clientCountry/*, itemName, itemQuantity, itemPrice*/){
            this.id = this.createId();
            this.createdAt = createdAt.current.value;
            this.paymentTerms = paymentTerms.current.value;
            this.paymentDue = this.calculatePaymentDue();
            this.description = description.current.value;            
            this.clientName = clientName.current.value;
            this.clientEmail = clientEmail.current.value;
            this.status = this.defineStatus();
            this.senderAddress  = new Address(senderStreet, senderCity, senderPostCode, senderCountry);
            this.clientAddress = new Address(clientStreet, clientCity, clientPostCode, clientCountry);
            this.items = [];//this.addItem(itemName, itemQuantity, itemPrice);
            this.total = 0;
        }

        createId = () =>  "3" 

        calculatePaymentDue = () => this.paymentTerms

        defineStatus = () => "pending"

        addItem = (item) => {
            this.items.push(item)
        }
        /*addItem = (itemName, itemQuantity, itemPrice) => (this.items)?
         this.items.push(new Item(itemName, itemQuantity, itemPrice))
         : [].push(new Item(itemName, itemQuantity, itemPrice))
        */
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

    const onFormSubmit = (event) => {
        event.preventDefault();
        const tempInvoice = new Invoice(createdAt,  description, paymentTerms, clientName, 
        clientEmail, senderStreet, senderCity, senderPostCode, senderCountry, clientStreet, 
        clientCity, clientPostCode, clientCountry);
        const tempItem = new Item(itemName, itemQuantity, itemPrice);
        tempInvoice.addItem(tempItem);
        tempInvoice.calculateTotal();
        console.log(tempInvoice);
        let tempInvoices = [...initialInvoices];
        tempInvoices.push(tempInvoice);
        onSubmitForm(tempInvoices);
        handleGoBack()
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    console.log(initialInvoices)
    return(
        <ModalContainer>     
            <FormContainer onSubmit = {handleSubmit}>
                <LinkContainer onClick = { handleGoBack }>
                    <GoBack/>    
                </LinkContainer>   
                <h1>New invoice</h1>
                <fieldset>
                    <legend>Bill From</legend>
                    <label htmlFor="senderStreet">Street Address
                        <input type="text" name="senderStreet"  ref={senderStreet}/>
                    </label>
                    <FlexWrapper>
                        <label htmlFor="senderCity">City
                            <input type="text" name="senderCity" ref={senderCity}/>
                        </label>
                        <label htmlFor="senderPostCode">Post Code
                            <input type="text" name="senderPostCode" ref = {senderPostCode}/>
                        </label>
                        <label htmlFor="senderCountry">Country
                            <input type="text" name="senderCountry" ref = {senderCountry}/> 
                        </label>
                    </FlexWrapper>
                </fieldset>
                <fieldset>
                    <legend>Bill To</legend>
                    <label htmlFor="clientName">Client's name
                        <input type="text" name="clientName" ref = {clientName}/>
                    </label>
                    <label htmlFor="clientEmail">Client's Email
                        <input type="text" name="clientEmail" ref = {clientEmail}/>
                    </label>
                    <label htmlFor="clientStreet">Street Address
                        <input type="text" name="clientStreet" ref = {clientStreet}/>
                    </label>
                    <FlexWrapper>
                        <label htmlFor="clientCity">City
                            <input type="text" name="clientCity" ref = {clientCity}/>
                        </label>
                        <label htmlFor="clientPostCode">Post Code
                            <input type="text" name="clientPostCode" ref = {clientPostCode}/>
                        </label>
                        <label htmlFor="clientCountry">Country
                            <input type="text" name="clientCountry" ref = {clientCountry}/>
                        </label>
                    </FlexWrapper>
                </fieldset>
                <fieldset>
                    <FlexWrapper>
                        <label htmlFor="invoiceDate">Invoice Date
                            <input type="date" name="invoiceDate" ref = {createdAt}/>
                        </label>
                        <label htmlFor="paymentTerms" >Payment Terms<br/>
                            <select id="paymentTerms" name="paymentTerms" ref = {paymentTerms}>
                                <option value="1">Net 1 Day</option>
                                <option value="7">Net 7 Days</option>
                                <option value="14">Net 14 Days</option>
                                <option value="30">Net 30 Days</option>
                            </select>
                        </label>
                    </FlexWrapper>
                    <label htmlFor="projectDescription">Project Description
                        <input type="text" name="projectDescription" ref = {description}/>
                    </label>
                </fieldset>
                <fieldset>
                    <h2> Item List</h2>
                    <FlexWrapper>
                        <label htmlFor="itemName">Item Name
                            <input type="text" name="itemName" ref = {itemName}/>
                        </label>
                        <label htmlFor="itemQuantity">Qty.
                            <input type="number" name="itemQuantity" ref = {itemQuantity}/>
                        </label>
                        <label htmlFor="itemPrice">Price
                            <input type="number" name="itemPrice" ref = {itemPrice}/>
                        </label>
                        <label htmlFor="total">Total
                            <input type="number" name="total"/>
                        </label>
                        <img src = { bin } alt = "bin"/>
                    </FlexWrapper>
                    <ButtonAddItem> + Add New Item</ButtonAddItem>                    
                </fieldset>
                <GradientDiv>
                        <div></div>
                        <FormButtons submitForm = { onFormSubmit }/>
                    </GradientDiv>
            </FormContainer>
        </ModalContainer>
    )
}

export default Modal;

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
    label[for = "itemName"]{
        width: 42%;
    } 
    label[for = "itemQuantity"]{
        width: 9%;
    } 
    label[for = "itemPrice"]{
        width: 20%;
    } 
    label[for = "total"]{
        width: 9%;
        input{
            border: transparent;
            padding-left: 0;
            color: ${props => props.theme.paragraphInvoice} !important;
        }
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
        label[for = "itemName"]{
            width: 100%;
        }
        label[for = "itemQuantity"]{
            width: 21%;
        } 
        label[for = "itemPrice"]{
            width: 33%;
        }
        label[for = "total"]{
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