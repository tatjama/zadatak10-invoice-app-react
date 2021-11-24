import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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

const ListItem = styled.li` 
       margin: 16px 0 ;
       padding: 16px 32px;
       background-color: ${props => props.theme.backgroundInvoice};
       box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
       border-radius: 8px;
       display : flex;
       justify-content: space-between;
       align-items: center;
       border-radius: 8px;
       cursor: pointer;
        div{
            &:nth-child(1){
                font-weight: bold;
                text-transform: uppercase;
                color:${props => props.theme.titleColor};
                border-radius: 8px;
                width: 15%;
                    &:before{
                        content: "#";
                    color: #7E88C3;
                    }
            }
            &:nth-child(2){
                color: ${props => props.theme.paragraphColor};
                width: 21%;
            }
            &:nth-child(3){
                color: ${props => props.theme.tableColor};
                width: 20%;
            }
            &:nth-child(4){
                color: ${props => props.theme.titleColor};
                font-size: 16px;
                line-height: 24px;
                letter-spacing: -0.8px;
                font-weight: bold;
                width: 19%;
                text-align: right;
            }            
        }
        @media screen and (max-width:700px){
            padding: 24px;
                flex-wrap: wrap;
                div{                    
                    &:nth-child(1){
                        width: 50%;
                        margin-bottom: 24px;
                    }
                    &:nth-child(2){
                        order: 3;
                        width: 60%;
                        margin-bottom: 8px;
                    }
                    &:nth-child(3){
                        order: 2;
                        width: 50%;
                        margin-bottom: 24px;
                        text-align: right;
                    }
                    &:nth-child(4){
                        order: 3;
                        width: 50%;
                        text-align: left;
                    }                    
                }
                img{
                        display: none;
                    }
            }
`
