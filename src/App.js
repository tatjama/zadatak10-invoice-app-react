import React, { useState } from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import {   ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Invoice from './pages/Invoice';



const lightTheme ={
  white: "#FFFFFF",
  background:  "#F2F2F2",
  backgroundField:  "#F2F2F2",
  backgroundItemsInvoice: "#F9FAFE",
  backgroundFooterInvoice: "#373B53",
  shadowField: " 0px 10px 20px rgba(72, 84, 159, 0.25)",
  inputRadio:"#DFE3FA",
  backgroundInvoice:"#FFFFFF",
  titleColor: "#0C0E16",
  tableColor: "#858BB2",
  paragraphColor: "#888EB0",
  paragraphHover: "#7E88C3",
  paragraphInvoice: "#7E88C3",
}
const darkTheme ={
  white: "#FFFFFF",
  background: "#141625",
  backgroundField: "#252945",
  backgroundItemsInvoice: "#252945",
  backgroundFooterInvoice: "#0C0E16",
  shadowField: "0px 10px 20px rgba(0, 0, 0, 0.25)",  
  inputRadio:"#1E2139",
  backgroundInvoice:"#1E2139",
  titleColor: "#FFFFFF",
  tableColor: "#FFFFFF",
  paragraphColor: "#DFE3FA",
  paragraphHover: " #888EB0",
  paragraphInvoice: "#DFE3FA",
  
}
const themes = {
  light: lightTheme,
  dark: darkTheme
}

function App() {  
  
  const [theme, setTheme] = useState("light");
  
  console.log(themes[theme])
  return (
      <ThemeProvider theme = { themes[theme] } >     
        <Router>   
          <Routes>
            <Route name="home" 
              exact path="/" 
              element = {<Home theme = { theme } setTheme = { setTheme }/> }
            />
            <Route name="invoice" 
              path="/invoice/:id" 
              element = {<Invoice theme = { theme } setTheme = { setTheme }/>}
            />
          </Routes>   
         </Router>
      </ThemeProvider>
  );
}

export default App;
