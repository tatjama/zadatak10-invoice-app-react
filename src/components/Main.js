import React, { useState }from 'react';
import Header from './Headers/Header';
import Empty from './Empty';
import InvoiceListItem from './Invoices/InvoiceListItem';

import { InvoicesListContainer, MainContainer } from './MainStyle';

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



