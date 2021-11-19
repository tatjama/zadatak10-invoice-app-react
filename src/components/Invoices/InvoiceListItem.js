import React from 'react';
import styled  from 'styled-components';
import arrowRight from '../../assets/icon-arrow-right.svg';

const InvoiceListItem = () => {
    return(
        <ListItem>
            <div>RT3080</div>
            <div>Due 19 Aug 2015</div>
            <div>Jensen Huang</div>
            <div>&#163; 1.800,00</div>
            <div><span>.</span> Paid</div>
            <img src = {arrowRight} alt="arrow right"/>
        </ListItem>    
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
                width: 20%;
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
                width: 20%;
            }
            &:nth-child(5){
                color: #FF8F00;
                position: relative;
                background-color: rgba(255, 143, 0, 0.06);
                width: 15%;
                height: 40px;
                line-height: 25px;
                text-align: center;
                margin-right: 15px;
                span{
                    font-size: 40px;                    
                }
            }
            &:nth-child(6){
                width: 10%;
            }            
        }
        @media screen and (max-width:600px){
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
                    }
                    &:nth-child(5){
                        order: 5;
                        width: 37%;
                        margin-top: -24px;
                        margin-right: 0;
                    }
                }
                img{
                        display: none;
                    }
            }
`
