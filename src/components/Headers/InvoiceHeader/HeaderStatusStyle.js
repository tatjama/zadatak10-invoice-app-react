import styled  from 'styled-components';

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
    margin-left: 5px;
    @media screen and (max-width: 600px){
        margin-top: 24px;
        margin-left: 0;
    }
 `
export { StatusContainer, StatusStyle}