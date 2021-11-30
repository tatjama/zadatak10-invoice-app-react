import React from 'react';
import Status from '../../Invoices/Status';

import { StatusContainer, StatusStyle }  from './HeaderStatusStyle';

const HeaderStatus = ({status}) => {

    return(
        <StatusContainer>
            <p>Status</p>
            <StatusStyle>
                <Status status = {status}/>
            </StatusStyle>
        </StatusContainer>           
    )
}

export default HeaderStatus;

