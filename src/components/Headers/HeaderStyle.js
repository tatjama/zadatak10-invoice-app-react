import styled  from 'styled-components';

const HeaderContainer = styled.header` 
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
         color: ${props => props.theme.titleColor};
    }
    p{
        color: ${props => props.theme.paragraphColor};
        @media screen and (max-width: 600px) {
            span{
                display: none;
            }
        }
    }    
 `
 const FormContainer = styled.div`  
    display: flex;
    align-items: center;
 `
  export { HeaderContainer, FormContainer }