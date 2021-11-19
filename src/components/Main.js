import React, { useState }from 'react';
import styled  from 'styled-components';
import Header from './Headers/Header';
import Empty from './Empty';
import InvoiceListItem from './Invoices/InvoiceListItem'; 


const Main = ({theme}) => {
    const [list, setList] = useState([]);

    return(
        <MainContainer>
            <Header theme = { theme }/>
            { !list.length? 
            <InvoicesListContainer>                
                <InvoiceListItem/>
                <InvoiceListItem/>
                <InvoiceListItem/>
            </InvoicesListContainer>
            : <Empty/>}
        </MainContainer>
    )
}

export default Main;


const InvoicesListContainer = styled.ul`
    width: 100%;
    margin-top: 65px;       
`

const MainContainer = styled.main`
    width: 51%;
    margin: 72px auto;
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

