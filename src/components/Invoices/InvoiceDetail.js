import React from 'react';

import { InvoiceDetailContainer, Section, SectionItems, SectionItemHeader, SectionItem , 
    SectionFooter }  from './InvoiceDetailStyle';

const InvoiceDetail = ({invoice}) => {
    
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
                {invoice.items.map((item, idx) =>{
                    return <SectionItem key = {idx}>
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

