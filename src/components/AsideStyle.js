import styled  from 'styled-components';

const AsideContainer = styled.aside` 
display: flex;
flex-direction: column;
justify-content: space-between;
width: 103px;
background-color: #373B53;
border-radius: 0px 20px 20px 0px;
@media screen and (max-width: 1000px) {
    width: 100%;
    height: 80px;
    flex-direction: row;
    border-radius: 0;
    div{
        display: flex;            
    }
}
@media screen and (max-width: 600px){
    height: 72px;
}
`;
const ImageMask = styled.div`
width: 103px;
height: 52px;
border-radius: 20px 0px 20px 0px;
background-color: #9277FF;
position: absolute;
top: 60px;
@media screen and (max-width: 1000px) {
    width: 80px;
    height: 40px;
    top: 40px;
}
@media screen and (max-width: 600px) {
    width: 72px;
    height: 36px;
    top: 36px;
}
`;
const ToggleThemeButton = styled.div` 
border-bottom: 1px solid #494E6E;
cursor: pointer;
&:hover{
      img {     
        filter: brightness(0) saturate(100%) invert(100%) sepia(77%) saturate(256%) hue-rotate(297deg) brightness(114%) contrast(90%);     
    }
}

@media screen and (max-width: 1000px) {
    border-right: 1px solid #494E6E;
    border-bottom: 0;
}
`
export { AsideContainer, ImageMask, ToggleThemeButton}