import styled  from 'styled-components';

export const FormStyling = styled.form` 
    margin-right: 40px;    
    position: relative;
    label{
        font-weight: 700;    
        color: ${props => props.theme.titleColor};        
        cursor: pointer; 
    }
    img{
        margin-left: 16px;
    }
    fieldset{
        position: absolute;
        top: 24px;
        left: -32px;
        width: 192px;
        height: 128px;
        padding: 8px;
        border: 0;
        box-shadow:${props => props.theme.shadowField};
        border-radius: 8px;
        background : ${props => props.theme.backgroundField};
    }
    @media screen and (max-width:600px){
        margin-right: 12px;
        span:first-child{
            display: none;
        }
    }
 `

 