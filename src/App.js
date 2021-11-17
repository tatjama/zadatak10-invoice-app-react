import React, { useState } from 'react';
import {   ThemeProvider } from 'styled-components';
import Home from './pages/Home';



const lightTheme ={
  background:  "#f2f2f2",
  titleColor: "#0C0E16",
  paragraphColor: "#888EB0"
}
const darkTheme ={
  background: "#141625",
  titleColor: "#FFFFFF",
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
