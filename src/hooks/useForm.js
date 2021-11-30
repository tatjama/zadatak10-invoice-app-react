import react, {useState, useRef, useEffect} from 'react';
import { Invoice } from '../util/Invoice';
import { Item } from '../util/Item';
import { formValidation } from '../util/formValidation';
import { itemsValidation } from '../util/itemsValidation';
import { createId } from '../util/createId';


const useForm = ({ invoice, onSubmitForm, handleGoBack}) => {

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
     
    const formFieldsRef = [createdAt, description ,paymentTerms, clientName, clientEmail, 
        senderStreet ,senderCity , senderCountry, senderPostCode ,  clientStreet, clientCity, 
         clientCountry, clientPostCode]         
    
    const createInvoice = () => {
        const tempInvoice = new Invoice(createdAt.current.value, invoiceAdd.status, 
            description.current.value, paymentTerms.current.value, clientName.current.value, 
            clientEmail.current.value, senderStreet.current.value, senderCity.current.value, 
            senderPostCode.current.value, senderCountry.current.value, clientStreet.current.value, 
            clientCity.current.value, clientPostCode.current.value, clientCountry.current.value, 
            itemFields );

        tempInvoice.calculateTotal();
        tempInvoice.id = (invoice.id)? invoice.id: createId();
        tempInvoice.status = "pending";
        let itemErrors = [];
        if((itemName.current !== null && itemQuantity.current !==null && itemPrice.current !== null)){
            
            itemErrors = itemsValidation(itemName, itemQuantity, itemPrice)
        }
        const invoiceErrors =  formValidation(  formFieldsRef);
        if(itemErrors.length > 0){
            invoiceErrors.push(itemErrors[0])
        }
        return [tempInvoice, invoiceErrors];
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
    return{setItemFields, onSaveAsDraft , onFormSubmit ,handleSubmit, invoiceAdd, formFieldsRef, itemFields, 
        itemName, itemQuantity, itemPrice, formErrors}
}

export default useForm