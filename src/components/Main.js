import React from 'react';
import styled  from 'styled-components';
import Header from './Headers/Header';
import Empty from './Empty';


const Main = ({theme}) => {
    return(
        <MainContainer>
            <Header theme = { theme }/>
            <Empty/>
        </MainContainer>
    )
}
const MainContainer = styled.main`
    width : 100%;
    position : relative;
`

export default Main;