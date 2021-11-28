import React ,{ useState } from 'react';
import { FlexWrapperTitles, FlexWrapperItems, FirstItemsContainer, SecondItemsContainer, 
    ItemNameField, ItemQuantityField, ItemPriceField, ItemParagraph, ItemImageField, ButtonAddItem }
     from './ItemsFieldsetStyle.js';
import bin  from '../../assets/icon-delete.svg';
import { Item } from '../../util/Item';
import { itemsValidation } from '../../util/itemsValidation';
import FormErrors from './FormErrors';

const ItemsFieldset = ({ itemFields, setItemFields, itemName, itemQuantity, itemPrice }) => {
    const [ formErrors, setFormErrors ] = useState([])
    
    const addItemField = (event) => {        
        event.preventDefault();
        let errorList = []
        console.log(itemName !== null)
        if((itemName.current !== null && itemQuantity.current !==null && itemPrice.current !== null)){
            errorList = itemsValidation(itemName, itemQuantity, itemPrice)
        }
        if(errorList.length ===  0){
            setFormErrors([])
            setItemFields([...itemFields, new Item("", 0, 0)])
        }else{
            setFormErrors(errorList);
        }
    }
        
    const handleOnChange = (index, event) => {
        const values = [...itemFields];      
            values[index][event.target.name] = event.target.value;
            values.forEach(value => value.total = value.price*value.quantity)
            setItemFields(values)
    }

    const removeItemField = (index, event) => {
        const values = [...itemFields];
            values.splice(index, 1);
            setItemFields(values);
    }


    return(
        <fieldset>
                    <h2> Item List</h2>
                    <FlexWrapperTitles >
                        <FirstItemsContainer>
                            <ItemNameField>Item Name</ItemNameField>
                        </FirstItemsContainer>
                        <SecondItemsContainer>
                            <ItemQuantityField >Qty.</ItemQuantityField>
                            <ItemPriceField >Price</ItemPriceField>
                            <ItemQuantityField>Total</ItemQuantityField>
                            <ItemImageField></ItemImageField>
                        </SecondItemsContainer>
                    </FlexWrapperTitles>
                    {
                    itemFields.map((item, idx) =>{
                        return<FlexWrapperItems className = "mobile"  key = {idx}> 
                                  <FirstItemsContainer>
                                    <ItemNameField ><p> Item Name </p>
                                         <input type="text" name = "name" 
                                         onFocus = {(e) => {e.target.className = ""}}
                                        onChange = {(event) => handleOnChange(idx, event)} 
                                        defaultValue = {item.name}
                                        ref = {itemName}  />
                                    </ItemNameField>
                                </FirstItemsContainer>
                                <SecondItemsContainer>                        
                                    <ItemQuantityField><span>Qty.</span>
                                        <input type="number" name = "quantity"
                                        onFocus = {(e) => {e.target.className = ""}}
                                        onChange = {(event) => handleOnChange(idx, event)} 
                                        defaultValue = {item.quantity}
                                        ref = {itemQuantity}/>
                                    </ItemQuantityField>
                                    <ItemPriceField ><span>Price</span>
                                        <input type="number" name = "price"
                                            onFocus = {(e) => {e.target.className = ""}}
                                            onChange = {(event) => handleOnChange(idx, event)} 
                                            defaultValue = {(item.price*1).toFixed(2)}
                                            ref = {itemPrice} />
                                    </ItemPriceField>
                                    <ItemParagraph ><span>Total</span>
                                       <h5> { (item.total*1).toFixed(2) }</h5>
                                    </ItemParagraph>
                                    <ItemImageField>
                                        <img onClick = { (event) => removeItemField(idx,event)} src = { bin } alt = "bin"/>    
                                    </ItemImageField>
                                </SecondItemsContainer>
                            </FlexWrapperItems>
                    })}                    
                    
                    <ButtonAddItem onClick = {addItemField}> + Add New Item</ButtonAddItem>                   
                    <FormErrors formErrors = {formErrors}/>                                    
                </fieldset>
    )
}

export default ItemsFieldset;

