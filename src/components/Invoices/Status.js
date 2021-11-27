import React from "react";
import { StatusStyle, StatusPaid, StatusDraft } from './StatusStyle';

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

