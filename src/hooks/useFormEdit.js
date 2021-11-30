import React , { useState, useRef, useEffect} from 'react';
import { Invoice } from '../util/Invoice';
import { Item } from '../util/Item';
import { formValidation } from '../util/formValidation';
import { itemsValidation } from '../util/itemsValidation';
import { createId } from '../util/createId';

const useFormEdit = ({ invoice, onUpdateForm, handleGoBack }) => {

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

    const formFieldsRef = [createdAt, description ,paymentTerms, clientName, clientEmail, 
            senderStreet, senderCity, senderCountry, senderPostCode,  clientStreet, clientCity, 
            clientCountry, clientPostCode]                      
           
        
    const [ itemFields, setItemFields ] = 
        useState( invoiceEdit.items.map( (item) =>new Item(item.name, item.quantity, item.price)))
    const [formErrors, setFormErrors] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);      

    const createInvoice = () => {            
        const tempInvoice = new Invoice(createdAt.current.value, invoiceEdit.status, 
                description.current.value, paymentTerms.current.value, clientName.current.value, 
                clientEmail.current.value, senderStreet.current.value, senderCity.current.value, 
                senderPostCode.current.value, senderCountry.current.value, clientStreet.current.value, 
                clientCity.current.value, clientPostCode.current.value, clientCountry.current.value, 
                itemFields );

            tempInvoice.calculateTotal();
            tempInvoice.id = (invoice.id)? invoice.id: createId();
            let itemErrors = [];
            if(itemName.current !== null && itemQuantity.current !==null && itemPrice !== null){
               itemErrors = itemsValidation(itemName, itemQuantity, itemPrice)
            }
            const invoiceErrors =  formValidation(  formFieldsRef);
            if(itemErrors.length > 0){
                invoiceErrors.push(itemErrors[0])
            }
        return [tempInvoice, invoiceErrors];
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


    return{ setItemFields, onFormSubmit, onFormCancel, invoiceEdit, formFieldsRef, itemFields,
     itemName, itemQuantity, itemPrice, formErrors  } 
}

export default useFormEdit;