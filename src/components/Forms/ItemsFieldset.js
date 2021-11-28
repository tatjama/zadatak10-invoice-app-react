import React from 'react';
import { FlexWrapperTitles, FlexWrapperItems, FirstItemsContainer, SecondItemsContainer, 
    ItemNameField, ItemQuantityField, ItemPriceField, ItemParagraph, ItemImageField, ButtonAddItem }
     from './ItemsFieldsetStyle.js';
import bin  from '../../assets/icon-delete.svg';

const ItemsFieldset = ({ itemFields, handleOnChange, removeItemField, addItemField }) => {
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
                                            onChange = {(event) => handleOnChange(idx, event)} 
                                        defaultValue = {item.name}  />
                                    </ItemNameField>
                                </FirstItemsContainer>
                                <SecondItemsContainer>                        
                                    <ItemQuantityField><span>Qty.</span>
                                        <input type="number" name = "quantity"
                                        onChange = {(event) => handleOnChange(idx, event)} 
                                        defaultValue = {item.quantity}/>
                                    </ItemQuantityField>
                                    <ItemPriceField ><span>Price</span>
                                        <input type="number" name = "price"
                                            onChange = {(event) => handleOnChange(idx, event)} 
                                            defaultValue = {item.price} />
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
                </fieldset>
    )
}

export default ItemsFieldset;

