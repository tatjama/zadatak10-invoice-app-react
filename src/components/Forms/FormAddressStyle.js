import styled from 'styled-components'

export const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    label{
        width: 152px;
    }
    label[for = "invoiceDate"]{
        width: 48%;
    }
    label[for = "paymentTerms"]{
        width: 48%;
    }    
    @media screen and (max-width:600px){        
        flex-wrap: wrap;    
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

