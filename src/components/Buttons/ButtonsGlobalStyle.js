import styled from 'styled-components';


 const ButtonsContainer = styled.div` 
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding:0 48px;
    @media screen and (max-width: 600px){
        justify-content: space-between;
        padding: 0 16px;
        button{
            padding: 17px 16px;
        }
        
    }
`
const ButtonsContainerForThree = styled(ButtonsContainer)` 
    padding: 0; 
    @media screen and (max-width: 600px){
        justify-content: space-around;
        padding: 0px;
        button{
            padding: 17px 24px;
        }
    }
`
const FirstButtons = styled.section`
    width: 72%;
    display:flex;
    justify-content: space-between;    
    @media screen and (max-width: 600px) {
        width: 65%;
    }
`
const ButtonDeleteStyle = styled.button`
     background-color: #EC5757;
     color: #FFFFFF;
     margin-left: 8px;
     &:hover{
         background-color: #FF9797;
    }
`
const ButtonCancelStyle = styled.button`         
background-color: #F9FAFE;
color: #7E88C3;
&:hover{
    background-color: #DFE3FA;
}                
`

const ButtonSaveStyle = styled.button` 
    background-color: #373B53;
    color: #888EB0;
    margin-right: 6px;
    &:hover{
        background-color: #0C0E16;
    }  
 `

export { ButtonsContainer, ButtonsContainerForThree, FirstButtons, ButtonDeleteStyle, ButtonCancelStyle, ButtonSaveStyle }
