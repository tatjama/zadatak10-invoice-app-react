import styled  from 'styled-components';

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
const ItemParagraph = styled.label`
    width: 46px;
    h5{
        font-weight: 700;
        color: ${props => props.theme.paragraphInvoice};
    }    
    @media screen and (max-width:600px){
        h5{
            margin-top: 30px;
        }
    }
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
    @media screen and (max-width:600px){
        img{
            margin-bottom: -45px;
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

  export { FlexWrapperTitles, FlexWrapperItems, FirstItemsContainer, SecondItemsContainer, 
    ItemNameField, ItemQuantityField, ItemPriceField, ItemParagraph, ItemImageField, ButtonAddItem }