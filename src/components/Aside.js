import React from 'react';
import Image from './Image';
import styled  from 'styled-components';
import logo  from '../assets/logo.svg';
import moon  from "../assets/icon-moon.svg";
import sun from '../assets/icon-sun.svg';
import avatar from '../assets/image-avatar.jpg';

const Aside = ({theme, setTheme}) => {
    const icon = (theme === "light")? moon: sun;

    const onToggleTheme = () =>{
        console.log("click");
        if(theme === "light"){
            setTheme("dark");
        }else{
            setTheme("light");
        }
    }

    return (
        <AsideContainer>
            <Image  primary = { true } secondary = { true } src = { logo } alt = { "logo" }/>
            <ImageMask></ImageMask>
            <div >
                <ToggleThemeButton onClick = { onToggleTheme}>
                    <Image 
                        primary = { false }                     
                        secondary = { false } 
                        src = { icon }                      
                    />
                </ToggleThemeButton>
                <Image primary = { false } secondary = { true } src = { avatar } alt = { "avatar" }/>                
            </div>
        </AsideContainer>
    )
}

export default Aside;

const AsideContainer = styled.aside` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 103px;
    background-color: #373B53;
    border-radius: 0px 20px 20px 0px;
`;
const ImageMask = styled.div`
    width: 103px;
    height: 52px;
    border-radius: 20px 0px 20px 0px;
    background-color: #9277FF;
    position: absolute;
    top: 60px;
`;
const ToggleThemeButton = styled.div` 
border-bottom: 1px solid #494E6E;
 `
