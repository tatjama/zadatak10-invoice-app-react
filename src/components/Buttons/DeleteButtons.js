import React from 'react';
import { ButtonsContainer }  from './ButtonsGlobalStyle';
import { Link } from 'react-router-dom';
import ButtonCancel from './ButtonCancel';
import ButtonDelete from './ButtonDelete';


const DeleteButtons = ({deleteInvoice, onCancelDelete}) => {

    return(
        <ButtonsContainer>
                <ButtonCancel onCancelDelete = {onCancelDelete}/>
               <Link to = "/"> <ButtonDelete deleteInvoice = { deleteInvoice }/></Link>
        </ButtonsContainer>  
    )
}

export default DeleteButtons;





