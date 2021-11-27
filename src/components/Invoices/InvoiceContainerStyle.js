import styled  from 'styled-components';

const MainContainer = styled.main`
    width: 51%;
    margin: 64px auto;
    position : relative;
        
    @media screen and (max-width: 1200px) {
        width: 70%;
    }
    @media screen and (max-width: 1000px) {
        width: 88%;
        margin: 56px auto;
    }
    @media screen and (max-width: 600px) {
       margin: 32px auto;
    }
`
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

export { Container, MainContainer }