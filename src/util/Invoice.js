import { Address } from './Address';

export class Invoice{

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
         for(let i = 0; i < this.items.length; i++){
            sum += this.items[i].total*1
         }
         this.total =  sum;
     }
     
}
