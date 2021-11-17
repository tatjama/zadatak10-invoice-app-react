import React from 'react';
import styled  from 'styled-components';
import Main from '../components/Main';
import Aside from '../components/Aside';


const Home = ({theme, setTheme}) => {

    console.log(theme)

    return(
            <Container  >
                <Aside theme = {theme} setTheme={setTheme} />            
                <Main theme = {theme} />
            </Container>
    )
}

export default Home;


const Container = styled.div` 
    width: 100%;
    min-height: 100vh;
    background-color: ${props=>props.theme.background};// #f2f2f2;//141625
    display: flex;
    transition: all 0.5s ease;
`;