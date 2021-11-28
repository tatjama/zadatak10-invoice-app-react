
import styled  from 'styled-components';

const ModalContainer = styled.section` 
    width: 100%;
    height: 100%;
    position: absolute;
    left: 103px;
    display: flex;
    background: rgba(0, 0, 0, 0.5);
    overflow: scroll;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
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
    span{
        text-align: right;
        font-size: 10px;
        line-height: 15px;
        letter-spacing: -0.25px;
        display: none;
    }
    .error{
        color: #EC5757; 
        span{
            display: block;
            margin-top: -15px;
        }
        input{            
            border: 1px solid #EC5757;
        }
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
    
    label[for = "invoiceDate"]{
        width: 48%;
    }
    label[for = "paymentTerms"]{
        width: 48%;
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
    
    }
  `
const ItemField = styled.label`
        &:nth-child(1){
        width: 214px;
    } 
    &:nth-child(2){
        width: 46px;
    } 
    &:nth-child(3){
        width: 100px;
    } 
    &:nth-child(4){
        width: 46px;
        
    } 
    &:nth-child(5){
        width: 15px;
    }
    @media screen and (max-width:600px){        
        &:nth-child(1){
            width: 100%;
        }
        &:nth-child(2){
            width: 21%;
        } 
        &:nth-child(3){
            width: 33%;
        }
        &:nth-child(4){
            width: 20%;
        }
    }
`
const ItemParagraph = styled.p`
    width: 46px;
    font-weight: 700;
    color: ${props => props.theme.paragraphInvoice};
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

   export  { ModalContainer, LinkContainer , FormContainer, FlexWrapper , ItemField , ItemParagraph,
    ButtonAddItem, GradientDiv  }
   