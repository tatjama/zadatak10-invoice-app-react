import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from './InvoiceListItemStyle.js';
import arrowRight from '../../assets/icon-arrow-right.svg';
import Status from './Status'; 

const InvoiceListItem = ({item}) => {
    return(
        <Link to = {`/invoice/${item.id}`}  >
            <ListItem>            
                <div>{item.id}</div>
                <div>Due { new Date(item.paymentDue).toUTCString().slice(4, 16)}</div>
                <div>{item.clientName}</div>
                <div>&#163; {item.total.toLocaleString("en-GB", { style: "currency", currency: "GBP"}).slice(1)}</div>
                <Status status = {item.status}/>                
                <img src = {arrowRight} alt="arrow right"/>            
            </ListItem>
        </Link>    
    )
}

export default InvoiceListItem;

