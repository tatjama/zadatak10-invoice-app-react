import React, { useState } from 'react';
import {   ThemeProvider } from 'styled-components';
import Home from './pages/Home';



const lightTheme ={
  background:  "#f2f2f2",
  backgroundField:  "#f2f2f2",
  shadowField: " 0px 10px 20px rgba(72, 84, 159, 0.25)",
  inputRadio:"#DFE3FA",
  backgroundInvoice:"#FFFFFF",
  titleColor: "#0C0E16",
  tableColor: "#858BB2",
  paragraphColor: "#888EB0",
}
const darkTheme ={
  background: "#141625",
  backgroundField: "#252945",
  shadowField: "0px 10px 20px rgba(0, 0, 0, 0.25)",  
  inputRadio:"#1E2139",
  backgroundInvoice:"#1E2139",
  titleColor: "#FFFFFF",
  tableColor: "#FFFFFF",
  paragraphColor: "#DFE3FA"
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
         <Home theme = { theme } setTheme = { setTheme }/>    
      </ThemeProvider>
  );
}

export default App;
