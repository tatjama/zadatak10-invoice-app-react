import React, { useState } from 'react';
import styled  from 'styled-components';
import Main from '../components/Main';
import Aside from '../components/Aside';
import Modal from './Modal';
//import {useNavigate} from 'react-router-dom';


const Home = ({theme, setTheme}) => {
   // const navigate = useNavigate();
    console.log(theme)

    const [isAddForm, setIsAddForm] = useState(false)

    const onAddForm = () => {
        setIsAddForm(true);
        //navigate('/form');
    }
    const onGoBack = () => {
        setIsAddForm(false);
    }

    return(
            <Container  >
                <Aside theme = {theme} setTheme={setTheme} />                            
                <Main theme = {theme}  handleAddForm = {onAddForm}/>
                {isAddForm && <Modal handleGoBack = {onGoBack }/>}
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

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;