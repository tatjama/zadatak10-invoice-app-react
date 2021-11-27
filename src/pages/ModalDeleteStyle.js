import styled  from 'styled-components';

export const MessageContainer = styled.div` 
    width: 480px;
    height: 250px;
    position: absolute;
    padding: 48px;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    background-color:${props => props.theme.backgroundInvoice};
    border-radius: 8px;
    h1{
        color: ${props => props.theme.titleColor};
        margin-bottom: 13px;
        font-size: 24px;
        line-height: 32px;    
    }
    p{
        color: ${props => props.theme.paragraphInvoice};
        margin-bottom: 16px;
    }
    @media screen and (max-width:600px){
        width: 327px;
        height: 220px;
        padding: 32px;
        h1{
            margin-bottom: 8px;
        }
        p{
            margin-bottom: 24px;
        }
    }
    
`
