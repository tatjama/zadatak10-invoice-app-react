import styled  from 'styled-components';

const Container = styled.div` 
    width: 100%;
    min-height: 100vh;
    background-color: ${props=>props.theme.background};// #f2f2f2;//141625
    display: flex;
    transition: all 0.5s ease;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`
const InvoiceFooter = styled.footer`
    display: none;
    margin-top: 20px;
    @media screen and (max-width: 600px){
        width: 100%;
        background: ${props => props.theme.backgroundInvoice};
        padding: 24px 8%;            
        display: inline-block;
    }
`
export { Container, InvoiceFooter }