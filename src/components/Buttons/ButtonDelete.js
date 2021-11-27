
import { ButtonDeleteStyle } from './ButtonsGlobalStyle';

const ButtonDelete = ({ deleteInvoice }) => {
    return (
        <ButtonDeleteStyle onClick = {deleteInvoice} >Delete</ButtonDeleteStyle>
    )
}

export default ButtonDelete;
