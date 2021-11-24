import React, { useState }from 'react';
import styled  from 'styled-components';
import Header from './Headers/Header';
import Empty from './Empty';
import InvoiceListItem from './Invoices/InvoiceListItem';

const Main = ({theme, handleAddForm, invoices}) => {
    const data = invoices;
    const [list, setList] = useState(invoices);

const onStatusSelected = (status) => {
    let filteredList = data.filter(item => item.status === status);
    setList(filteredList);
}    

    return(
        <MainContainer>
            <Header 
                num = {list.length} 
                onStatusSelected = {onStatusSelected} 
                handleAddForm = {handleAddForm} 
                theme = { theme }
                />
            { list.length? 
            <InvoicesListContainer>    
                {
                    list.map(item =>{
                       return <InvoiceListItem item = { item } key = { item.id}/>                            
                    })
                }            
                
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

