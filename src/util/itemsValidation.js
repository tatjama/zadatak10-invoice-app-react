export const itemsValidation = (itemName, itemQuantity, itemPrice)=> {
    let errors = []
    if (itemName.current.value === ""){
        itemName.current.className = "error";
        errors = ["All items must be added"]
    }else if(itemQuantity.current.value*1 === 0){
        itemQuantity.current.className = "error";
        errors = ["All items must be added"]
    } else if(itemPrice.current.value*1 === 0){
        itemPrice.current.className = "error";
        errors = ["All items must be added"]
    }else{
        errors = []          
    }
    return errors;
}
