export class Item {
    
    constructor(name = "", quantity = "0", price = "0"){
        this.name = name;
        this.quantity = quantity;
        this.price =  price;
        this.total = this.calculateTotal();              
    }
    calculateTotal = () => (this.price*1) * (this.quantity*1);
}