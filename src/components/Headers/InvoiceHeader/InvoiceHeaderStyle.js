import styled  from 'styled-components';

const HeaderContainer = styled.header` 
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 32px;
    margin: 32px auto 24px auto;
    background: ${props => props.theme.backgroundInvoice};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    p{
        font-weight: 500;
        color: ${props => props.theme.paragraphColor};// #888EB0;//#DFE3FA        
    }
    @media screen and (max-width: 600px){
        padding: 22px 24px;
        margin-bottom: 16px;
    }    
 `
const ButtonsResponsive = styled.div`
    width: 309px;
    @media screen and (max-width: 600px){
        position: absolute;
        bottom: -100px;
        left: 0;
        padding:  10px 0;
    }
 `

export { HeaderContainer, ButtonsResponsive } 