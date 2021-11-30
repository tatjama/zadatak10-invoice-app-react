import styled  from 'styled-components';
import checked from "../../assets/icon-check.svg";

const LabelContainer = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin: 16px;
    cursor: pointer;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.25px;
    font-weight: bold;
    text-transform: capitalize;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover{
      span{
          border: 1px solid #7C5DFA;
      }
  }
  input {
  position: absolute;
  opacity: 0;
  cursor: pointer;  
    &:checked ~ span {
        background-color: #7C5DFA;
        &:after{
            display: block;
        }
    }
  }

`
const CheckMark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    border: 1px solid transparent;
    border-radius: 2px;
    background-color: ${props => props.theme.inputRadio};
    &:after {
        content: "";
        position: absolute;
        display: none;
        top: 3px;
	    left: 2px;
	    width: 10px;
	    height: 10px;
        background-image: url(${checked});
        background-size: contain;
        background-repeat: no-repeat;
    }
`
export { LabelContainer, CheckMark } 

