import React from 'react';
import styled  from 'styled-components';
import bin  from '../../assets/icon-delete.svg';

const ItemsFieldset = ({ invoiceItems, handleOnChange, removeItemField, addItemField }) => {
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
                    invoiceItems.map((item, idx) =>{
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
                                        { (item.total*1).toFixed(2) }
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

const FlexWrapperTitles = styled.div` 
    display: flex;
    justify-content: space-between;
    @media screen and (max-width:600px){
        display: none;
    }
`
const FlexWrapperItems = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    span, p{
        display: none;
        }
    @media screen and (max-width:600px){
        flex-direction: column;
        span, p{
            display: block
        }
    }
`
const FirstItemsContainer = styled.div`
    width: 230px;
    @media screen and (max-width:600px){
        width: 100%;
        label{
            width: 100%;
        }
    }
 `
const SecondItemsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    @media screen and (max-width:600px){
        width: 100%;
    }
 `
const ItemNameField = styled.label` 
    width: 214px;
    margin-right: 16px;
    @media screen and (max-width:600px){
        width: 100%;
        margin-right: 0;
    }
`
const ItemQuantityField = styled.label`
    width: 46px;
    @media screen and (max-width:600px){
        width: 64px;
    }
`
const ItemPriceField = styled.label`
    width: 100px;
`
const ItemParagraph = styled.h5`
    width: 46px;
    font-weight: 700;
    color: ${props => props.theme.paragraphInvoice};
`

const ItemImageField = styled.div`
    width: 15px;
    margin-left: 16px;
    img{
        object-fit: contain;        
        cursor: pointer;
        &:hover{
            filter: brightness(0) saturate(100%) invert(70%) sepia(68%) saturate(6968%) hue-rotate(334deg) brightness(118%) contrast(85%);
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