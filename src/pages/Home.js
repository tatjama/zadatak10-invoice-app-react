import React, { useState } from 'react';
import styled  from 'styled-components';
import Main from '../components/Main';
import Aside from '../components/Aside';
import Modal from './Modal';


const Home = ({theme, setTheme, invoices, onSubmitForm}) => {
     const [ isUpdate, setIsUpdate ] = useState(false);   
    console.log(theme)

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
                    <Modal invoice = "" initialInvoices = {invoices} onSubmitForm = { onSubmitForm } handleGoBack = { onGoBack }/>
                </>
                }               
        </Container>
            /*<Container  >
                <Aside theme = {theme} setTheme={setTheme} />             
                { isUpdate ? <Main invoices = {invoices} theme = {theme}  handleAddForm = {onAddForm}/> 
                : isAddForm ?<> <Main invoices = {invoices} theme = {theme}  handleAddForm = {onAddForm}/>
                                <Modal initialInvoices = {invoices} onSubmitForm = { onSubmitForm } handleGoBack = { onGoBack }/>
                            </>
                            :<Main invoices = {invoices} theme = {theme}  handleAddForm = {onAddForm}/>
                }               
                
            </Container>*/
    )
}

export default Home;


const Container = styled.div` 
    width: 100%;
    min-height: 100vh;
    background-color: ${props=>props.theme.background};// #f2f2f2;//141625
    display: flex;
    transition: all 0.5s ease;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;