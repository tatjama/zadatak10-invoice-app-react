import React, { useState } from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import {   ThemeProvider } from 'styled-components';
import { themes } from './theme/Theme';
import Home from './pages/Home';
import Invoice from './pages/Invoice';
import useService from './hooks/useService';


function App( ) {  
  
  const [theme, setTheme] = useState("light");

  const { invoices, setInvoicesOnSubmitForm, setInvoicesOnUpdateForm, setInvoicesOnDeleteInvoice, setInvoicesOnUpdateStatus } = useService()
    

    return (
      <ThemeProvider theme = { themes[theme] } >     
        <Router>   
          <Routes>
            <Route name="home" 
              exact path="/" 
              element = {<Home 
                      invoices = {invoices} 
                      theme = { theme } 
                      onSubmitForm = {(value) => setInvoicesOnSubmitForm(value) }
                      setTheme = { setTheme }/> }
            />
            <Route name="invoice" 
              path="/invoice/:id" 
              element = {<Invoice 
                      invoices = { invoices } 
                      onUpdateForm = { (updatedInvoice) => setInvoicesOnUpdateForm(updatedInvoice)}
                      onClickDelete = { (invoiceId) => setInvoicesOnDeleteInvoice(invoiceId)}
                      onClickPaid = {(invoiceId) => setInvoicesOnUpdateStatus(invoiceId)}
                      deleteInvoice = { (invoiceId) => setInvoicesOnDeleteInvoice(invoiceId)}
                      theme = { theme } 
                      setTheme = { setTheme }/>}
            />
           
          </Routes>   
         </Router>
      </ThemeProvider>
  );
}

export default App;
