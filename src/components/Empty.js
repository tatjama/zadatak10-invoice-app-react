import React from 'react';

import {EmptySection}  from './EmptyStyle';
import illustration from '../assets/illustration-empty.svg';

const Empty = () => {
    return(
        <EmptySection>
            <img src = {illustration} alt="Girl sharing voice from envelope" />
            <h2>There is nothing here</h2>
            <p>Create an invoice by clicking the 
                 <br/>
            <span >New <span> Invoice</span></span> button and get started</p>
        </EmptySection>
    )
}

export default Empty;
