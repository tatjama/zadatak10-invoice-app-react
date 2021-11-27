import React from 'react';
import { LinkStyle }  from './GoBackStyle';
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

