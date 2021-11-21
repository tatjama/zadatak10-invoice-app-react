import React from 'react';
import styled  from 'styled-components';

const Status = ({status}) => {

    return(
        <StatusContainer>
            <p>Status</p>
            <StatusStyle><span>.</span> {status}</StatusStyle>
        </StatusContainer>           
    )
}

export default Status;

const StatusContainer = styled.div`
width: 159px;
display: flex;
justify-content: space-between;
align-items: center;
color: "#858BB2";
@media screen and (max-width: 600px){
    width: 100%;
}    
`

const StatusStyle = styled.div` 
color: #FF8F00;
background-color: rgba(255, 143, 0, 0.06);
width: 104px;
height: 40px;
line-height: 25px;
text-align: center;
text-transform: capitalize;
border-radius: 8px;
span{
       font-size: 40px;                    
}    
`
