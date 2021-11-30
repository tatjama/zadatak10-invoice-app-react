import arrowDown from '../../assets/icon-arrow-down.svg';
import styled  from 'styled-components';

export const SelectStyle = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -webkit-padding-end: 20px;
    -moz-padding-end: 20px;
    -webkit-padding-start: 20px;
    -moz-padding-start: 2px;
    background-color: ${props => props.theme.backgroundInvoice}; 
    color: ${props => props.theme.titleColor};
    background-image: url(${arrowDown});
    background-position: center right 20px;
    background-repeat: no-repeat;
    border-radius: 2px;
    border: ${props => props.theme.inputBorder};
    font-size: inherit;
    overflow: hidden;
    text-overflow: ellipsis;    
    option{
        color: ${props => props.theme.titleColor};
        cursor: pointer;
        
    }
 `
