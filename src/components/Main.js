import React from 'react';
import styled  from 'styled-components';
import Header from './Headers/Header';
import illustration from '../assets/illustration-empty.svg';

const Main = ({theme}) => {
    return(
        <MainContainer>
            <Header theme = { theme }/>
            <EmptySection>
                <img src = {illustration} alt="Girl sharing voice from envelope" />
                <h2>There is nothing here</h2>
                <p>Create an invoice by clicking the 
                    <br/>
                    <span >New Invoice</span> button and get started</p>
            </EmptySection>
        </MainContainer>
    )
}
const MainContainer = styled.main`
    width : 100%;
    position : relative;
`
const EmptySection = styled.section` 
    margin: 140px auto;
    width: 242px;
    text-align: center;
    h2{
         color: ${props => props.theme.titleColor};// #0C0E16;//#FFFFFF;
         margin-bottom: 24px;
    }
    p{
        color: ${props => props.theme.paragraphColor};// #888EB0;//#DFE3FA
    }
 `

export default Main;