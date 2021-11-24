import React from 'react';
import styled  from 'styled-components';

const InvoiceDetail = ({invoice}) => {
    console.log(invoice)
    return(
        <InvoiceDetailContainer>
            <Section>
                <div>
                    <h3><span>#</span>{invoice.id}</h3>
                    <p>{invoice.description}</p>
                </div>
                <div>
                    <p>{invoice.senderAddress.street}</p>
                    <p>{invoice.senderAddress.city}</p>
                    <p>{invoice.senderAddress.postCode}</p>
                    <p>{invoice.senderAddress.country}</p>
                </div>
            </Section>
            <Section>
                <div>
                    <p>Invoice Date</p>
                    <h4>{ new Date(invoice.createdAt).toUTCString().slice(4, 16)}</h4>
                    <br/>
                    <p>Payment Due</p>
                    <h4>{ new Date(invoice.paymentDue).toUTCString().slice(4, 16)}</h4>
                </div>
                <div>
                    <p>Bill To</p>
                    <h4>{invoice.clientName}</h4>
                    <p>{invoice.clientAddress.street}</p>
                    <p>{invoice.clientAddress.city}</p>
                    <p>{invoice.clientAddress.postCode}</p>
                    <p>{invoice.clientAddress.country}</p>
                </div>
                <div>
                    <p>Sent to</p>
                    <h4>{invoice.clientEmail}</h4>
                </div>
            </Section>
            <SectionItems>
                <SectionItemHeader>
                    <p>Item Name</p>
                    <p>QTY.</p>
                    <p>Price</p>
                    <p>Total</p>
                </SectionItemHeader>
                {invoice.items.map(item =>{
                    return <SectionItem key = {item.name}>
                                <p>{item.name}</p>
                                <p>{item.quantity}</p>
                                <p>&#163; {(item.price*1).toLocaleString("en-GB", { style: "currency", currency: "GBP"}).slice(1)}</p>
                                <p>&#163; {item.total.toLocaleString("en-GB", { style: "currency", currency: "GBP"}).slice(1)}</p>
                            </SectionItem>
                })}                
            </SectionItems>
            <SectionFooter>
                    <p><span>Amount Due</span></p>
                    <h2>&#163; {invoice.total.toLocaleString("en-GB", { style: "currency", currency: "GBP"}).slice(1)}</h2>
                </SectionFooter>    
        </InvoiceDetailContainer>
    )
}

export default InvoiceDetail;

const InvoiceDetailContainer = styled.main` 
    width: 100%;
    background: ${props => props.theme.backgroundInvoice};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    padding: 27px;
    h4{
        color: ${props => props.theme.titleColor};
        margin: 12px 0;
    }
    h3{
        font-weight: 700;
        color: ${props => props.theme.titleColor};
        span{
            color: #888EB0;
        }
    }
    p{
        font-weight: 500;
        color: ${props => props.theme.paragraphInvoice};
        line-height: 19px;
    }    
    @media screen and (max-width: 600px){
        padding: 3px;
        section{
            &:nth-child(1){
                flex-direction: column;
                margin-bottom: 5px;
                div{
                    margin-bottom: 25px;
                }                
            }
        }
    }
`

const Section = styled.section` 
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 21px;
    @media screen and (max-width: 600px){
        div{
            margin-bottom: 32px;
        }
    }
`
const SectionItems = styled.main`
    background-color: ${props => props.theme.backgroundItemsInvoice};
    margin: 45px 12px 0px 12px;
    border-radius: 8px 8px 0 0;
    padding: 32px 0px 8px 0px;
    @media screen and (max-width: 600px){
        margin-top: 40px;
        padding-top: 24px;
    }
`
const SectionItemHeader = styled(Section)`
    margin: 0px 32px;
    p{
        font-size: 11px;
        line-height: 18px;
        &:nth-child(1){
            width: 40%;
        }
        &:nth-child(2){
            text-align: center;
            width: 20%
        }
        &:nth-child(3){
            text-align: right;
            width: 20%
        }
        &:nth-child(4){
            text-align: right;
            width: 20%
        }
    }
    @media screen and (max-width: 600px){
        display: none;
    }
`
const SectionItem = styled(SectionItemHeader)`
    margin: 32px;
    p{
        font-size: 12px;
        line-height: 15px;
        &:nth-child(1){
            font-weight: 700;
            color: ${props => props.theme.titleColor};
        }
        &:nth-child(4){
            font-weight: 700;
            color: ${props => props.theme.titleColor};
        }
    }
    @media screen and (max-width: 600px){
        display: flex;
        margin: 24px 24px 48px 24px;
        position: relative;
        p{
            &:nth-child(1){
                width: 60%;
            }
            &:nth-child(2){
            position: absolute;
            top: 24px;
            left:-15px;
            margin-right: 10px;
            &:after{
                content: "x";
                margin-left: 10px;
            }
            }
            &:nth-child(3){
                position: absolute;
                top: 24px;
                left: -15px;
                width: 40%;
                margin-left: 5px;
            }
            &:nth-child(4){
                width: 40%;
                padding-top: 12px;
            }
        }
        
    }
`
const SectionFooter = styled(Section)`    
    background-color: ${props => props.theme.backgroundFooterInvoice};
    color: #FFFFFF;
    padding: 24px 32px;
    margin: 0px 12px 21px 12px;
    border-radius: 0 0 8px 8px;
    p span{
        color: #FFFFFF;
    }
    @media screen and (max-width: 600px){
        margin-bottom: 24px;
    }
 `


