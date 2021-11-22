import React from 'react';
import styled  from 'styled-components';
import { Link } from 'react-router-dom';
import arrowLeft from '../assets/icon-arrow-left.svg';

const GoBack = () => {
    return(
        <Link to="/">
                <LinkStyle>
                    <img src= {arrowLeft} alt = "arrow left"/>
                    Go back
                </LinkStyle>
            </Link>
    )
}

export default GoBack;

const LinkStyle = styled.p`     
        font-weight: 700;
        color: ${props => props.theme.titleColor};
        img{
            margin-right: 24px;
        }
        &:hover{
            color: ${props => props.theme.paragraphColor};
        }    
`
