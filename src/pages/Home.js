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
                    <Modal invoice = ""  onSubmitForm = { onSubmitForm } handleGoBack = { onGoBack }/>
                </>
                }               
        </Container>
    )
}

export default Home;


const Container = styled.div` 
    width: 100%;
    min-height: 100vh;
    background-color: ${props=>props.theme.background};
    display: flex;
    transition: all 0.5s ease;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;