import React, { useState } from 'react';
import Main from '../components/Main';
import Aside from '../components/Aside';
import Modal from './Modal';

import { Container } from './InvoiceStyle';

const Home = ({theme, setTheme, invoices, onSubmitForm}) => {
     const [ isUpdate, setIsUpdate ] = useState(false);   

    const [isAddForm, setIsAddForm] = useState(false)

    const onAddForm = () => {
        setIsAddForm(true);
        setIsUpdate(false);
    }
    const onGoBack = () => {
        setIsAddForm(false);
        setIsUpdate(true);
    }
    return(
        <Container  >
                <Aside theme = {theme} setTheme={setTheme} />             
                { (isUpdate || !isAddForm) ? <Main invoices = {invoices} theme = {theme}  handleAddForm = {onAddForm}/> 
                : <> 
                    <Main invoices = {invoices} theme = {theme}  handleAddForm = {onAddForm}/>
                    <Modal invoice = ""  onSubmitForm = { onSubmitForm } handleGoBack = { onGoBack }/>
                </>
                }               
        </Container>
    )
}

export default Home;


