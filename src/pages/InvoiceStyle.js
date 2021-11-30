import styled  from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    min-height: 100vh;
    background-color: ${props=>props.theme.background};// #f2f2f2;//141625
    display: flex;
    transition: all 0.5s ease;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`

