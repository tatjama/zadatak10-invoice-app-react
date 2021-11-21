import React from 'react';
import { Link } from 'react-router-dom';
import styled  from 'styled-components';
import arrowLeft from '../../assets/icon-arrow-left.svg';
import InvoiceDetail from './InvoiceDetail';
import InvoiceHeader from '../Headers/InvoiceHeader/InvoiceHeader';
import data from '../../data.json';

const InvoiceContainer = ({invoiceId, theme}) => {
    const invoice = data.filter(item => item.id === invoiceId)[0];
    return(
        <MainContainer>
            <Link to="/">
                <LinkStyle>
                    <img src= {arrowLeft} alt = "arrow left"/>
                    Go back
                </LinkStyle>
            </Link>
            <InvoiceHeader status = {invoice.status}/>
            <InvoiceDetail invoice = {invoice}/>            
        </MainContainer>
    )
}

export default InvoiceContainer;

const MainContainer = styled.main`
    width: 51%;
    margin: 64px auto;
    position : relative;
        
    @media screen and (max-width: 1200px) {
        width: 70%;
    }
    @media screen and (max-width: 1000px) {
        width: 88%;
        margin: 56px auto;
    }
    @media screen and (max-width: 600px) {
       margin: 32px auto;
    }
`
const LinkStyle = styled.p`     
        font-weight: 700;
        color: ${props => props.theme.titleColor};
        img{
            margin-right: 24px;
        }
        &:hover{
            color: ${props => props.theme.paragraphColor};
        }    
`
