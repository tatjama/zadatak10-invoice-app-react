
import { ButtonDeleteStyle } from './ButtonGlobalStyle';

const ButtonDelete = ({ deleteInvoice }) => {
    return (
        <ButtonDeleteStyle onClick = {deleteInvoice} >Delete</ButtonDeleteStyle>
    )
}

export default ButtonDelete;
