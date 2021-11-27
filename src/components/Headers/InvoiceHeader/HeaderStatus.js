import React from 'react';
import { StatusContainer, StatusStyle }  from './HeaderStatusStyle';
import Status from '../../Invoices/Status';

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

