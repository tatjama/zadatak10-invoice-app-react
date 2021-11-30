import React from 'react';
import { Link } from 'react-router-dom';

import { LinkStyle }  from './GoBackStyle';
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

