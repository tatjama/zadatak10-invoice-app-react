import React from "react";
import styled from 'styled-components';

const Status = ({status}) => {
    return(
        <>
            {(status === "paid")?<StatusPaid><span>.</span> {status}</StatusPaid>
                    : (status === "draft")? <StatusDraft><span>.</span> {status}</StatusDraft>
                    : <StatusStyle><span>.</span> {status}</StatusStyle>
            }
        </>
    )
}

export default Status;

const StatusStyle = styled.div`
    color: #FF8F00;
    position: relative;
    background-color: rgba(255, 143, 0, 0.06);
    width: 104px;
    height: 40px;
    font-weight : 700;
    line-height: 25px;
    text-align: center;
    text-transform: capitalize;
    margin: 0 15px 0 8%;
    span{
        font-size: 40px;                    
    }
    @media screen and (max-width: 700px) {
        order: 5;
        margin-top: -24px;
        margin-right: 0;                    
    }            
 `
 const StatusPaid = styled(StatusStyle)`
    color: #33D69F;
    background-color:  rgba(51, 214, 159, 0.06);
 `
 const StatusDraft = styled(StatusStyle)`
    color: ${props => props.theme.draftColor};
    background-color: ${props => props.theme.backgroundDraft};//
 `